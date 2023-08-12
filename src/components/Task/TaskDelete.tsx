import { Button } from "@chakra-ui/react";
import { MdDeleteForever } from "react-icons/md";
import { useTasks } from "../../TaskProvider";

interface Props {
  id: number;
  onClose: () => void;
}

const TaskDelete = ({ id, onClose }: Props) => {
  const { dispatch } = useTasks();

  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      taskID: id,
    });
    onClose;
  };
  return (
    <Button
      type="submit"
      color="red.300"
      colorScheme="red"
      variant="ghost"
      onClick={handleDelete}
    >
      <MdDeleteForever size="1.5rem" />
    </Button>
  );
};

export default TaskDelete;
