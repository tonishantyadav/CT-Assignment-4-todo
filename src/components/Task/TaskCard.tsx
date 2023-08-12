import { Box, Card, CardHeader, SimpleGrid } from "@chakra-ui/react";
import { Task } from "../../reducers/taskReducer";
import TaskUpdate from "./TaskUpdate";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  return (
    <Card variant="filled">
      <SimpleGrid templateColumns="1fr 50px">
        <Box>
          <CardHeader fontSize="lg">{task.title}</CardHeader>
        </Box>
        <Box>
          <TaskUpdate task={task} />
        </Box>
      </SimpleGrid>
    </Card>
  );
};

export default TaskCard;
