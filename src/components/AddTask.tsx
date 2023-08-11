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
import { useTasks } from "../TaskProvider";

const AddTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();

  const { tasks, dispatch } = useTasks();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    dispatch({
      type: "ADD",
      task: {
        id: tasks.length + 1,
        title: data.title,
      },
    });
    reset();
  };

  return (
    <>
      <Button variant="solid" colorScheme="blue" onClick={onOpen}>
        Add task
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>
              <Input
                type="text"
                placeholder="Take a note"
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

export default AddTask;
