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
import { FieldValues, useForm } from "react-hook-form";
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { useTask } from "../TaskProvider";
import { Task } from "../reducers/taskReducer";

interface Props {
  task: Task;
}

const UpdateTask = ({ task }: Props) => {
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
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
                {...register("title")}
                onKeyDown={handleKeyDown}
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
