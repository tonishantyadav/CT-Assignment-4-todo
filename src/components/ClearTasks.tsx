import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineClear } from "react-icons/ai";
import { useTasks } from "../TaskProvider";

const ClearTasks = () => {
  const { tasks, dispatch } = useTasks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClear = () => {
    dispatch({
      type: "CLEAR",
    });
    onClose();
  };

  if (tasks.length === 0) return null;

  return (
    <>
      <Button onClick={onOpen} variant="unstyled">
        <AiOutlineClear size="1.5rem" className="clear-icon" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Clear</ModalHeader>
          <ModalCloseButton />
          <ModalBody> Are you sure you want to clear all tasks?</ModalBody>

          <ModalFooter>
            <Button
              variant="solid"
              colorScheme="red"
              mr={3}
              onClick={handleClear}
            >
              Clear
            </Button>
            <Button colorScheme="blue" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClearTasks;
