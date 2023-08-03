import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { useTask } from "../TaskProvider";
import { Task } from "../reducers/taskReducer";

interface Props {
  task: Task;
}

const UpdateTask = ({ task }: Props) => {
  const [inputValue, setInputValue] = useState(task.title);
  const [backspaceCount, setBackspaceCount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const { dispatch } = useTask();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    dispatch({
      type: "UPDATE",
      taskID: task.id,
      taskTitle: data.title,
    });
  };

  const allowedKeys = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    } else if (event.key === "Backspace") {
      setBackspaceCount(backspaceCount + 1);
      setInputValue((prevValue) => prevValue.slice(0, prevValue.length - 1));
    } else if (allowedKeys.test(event.key)) {
      setBackspaceCount(0);
      setInputValue((prevValue) => prevValue + event.key);
    } else {
      event.preventDefault();
    }
  };

  const handleKeyUp = () => {
    setBackspaceCount(0);
  };

  return (
    <>
      <Button
        size="sm"
        variant="ghost"
        marginTop={4}
        padding={2}
        onClick={onOpen}
      >
        <BsPencilSquare size="1rem" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>
              <Input
                type="text"
                placeholder="Update a note"
                variant="unstyled"
                value={inputValue}
                {...register("title")}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
              />
            </ModalHeader>
            <ModalCloseButton />
            <Flex margin={4}>
              <Box>
                <Button
                  type="submit"
                  color="red.300"
                  colorScheme="red"
                  variant="ghost"
                  onClick={() => {
                    dispatch({
                      type: "DELETE",
                      taskID: task.id,
                    });
                    onClose;
                  }}
                >
                  <MdDeleteForever size="1.5rem" />
                </Button>
              </Box>
              <Spacer />
              <Box>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button type="submit" variant="ghost" onClick={onClose}>
                  Save
                </Button>
              </Box>
            </Flex>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default UpdateTask;
