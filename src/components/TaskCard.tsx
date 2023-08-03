import {
  Box,
  Card,
  CardHeader,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import { Task as TaskType } from "../reducers/taskReducer";
import UpdateTask from "./UpdateTask";

interface Props {
  task: TaskType;
}

const TaskCard = ({ task }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card boxShadow={colorMode === "light" ? "outline" : ""}>
      <SimpleGrid templateColumns="1fr 50px">
        <Box>
          <CardHeader fontSize="lg">{task.title}</CardHeader>
        </Box>
        <Box>
          <UpdateTask task={task} />
        </Box>
      </SimpleGrid>
    </Card>
  );
};

export default TaskCard;
