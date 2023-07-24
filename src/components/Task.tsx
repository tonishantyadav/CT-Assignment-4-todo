import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { TiTick, TiTickOutline } from "react-icons/ti";
import UpdateTaskDialog from "./UpdateTaskDialog";
import { Task as TaskType } from "../reducers/taskReducer";
import TaskContext from "../contexts/taskContext";

interface Props {
  task: TaskType;
}

const Task = ({ task }: Props) => {
  const [important, setImportant] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { dispatch } = useContext(TaskContext);
  const { colorMode } = useColorMode();

  return (
    <Card boxShadow={colorMode === "light" ? "outline" : ""}>
      <CardHeader height="100px">
        <Heading size="lg">{task.title}</Heading>
      </CardHeader>
      <CardFooter justifyContent="space-between" marginY={4}>
        <HStack>
          <Text margin={2} color="gray.400">
            24.08.200
          </Text>
          <Button variant="ghost" onClick={() => setImportant(!important)}>
            {important ? (
              <AiFillStar color="#FFD700" size="1.5rem" />
            ) : (
              <AiOutlineStar size="1.5rem" color="#FFD700" />
            )}
          </Button>
          <Button variant="ghost" onClick={() => setCompleted(!completed)}>
            {completed ? (
              <TiTick color="#58e888" size="1.5rem" />
            ) : (
              <TiTickOutline size="1.5rem" color="58e888"/>
            )}
          </Button>
          <UpdateTaskDialog task={task} />
          <Button
            type="submit"
            color="red.300"
            colorScheme="red"
            variant="ghost"
            onClick={() =>
              dispatch({
                type: "DELETE",
                taskID: task.id,
              })
            }
          >
            <MdDeleteForever size="1.5rem" />
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default Task;
