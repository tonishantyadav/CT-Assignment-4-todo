import {
  Button,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { MdOutlineUpdate } from "react-icons/md";
import useTask from "../hooks/useTask";
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

  return (
    <>
      <Button color="blue.200" variant="ghost" onClick={onOpen}>
        <MdOutlineUpdate size="1.2rem" />
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
              />
            </ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type="submit" variant="ghost" onClick={onClose}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default UpdateTask;
