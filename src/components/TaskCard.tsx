import {
  Box,
  Card,
  CardHeader,
  HStack,
  SimpleGrid
} from "@chakra-ui/react";
import { Task as TaskType } from "../reducers/taskReducer";
import UpdateTask from "./UpdateTask";

interface Props {
  task: TaskType;
}

const TaskCard = ({ task }: Props) => {
  return (
    <Card variant="filled">
      <SimpleGrid templateColumns="1fr 50px">
        <Box>
          <CardHeader fontSize="lg">{task.title}</CardHeader>
        </Box>
        <Box>
          <HStack>
            <UpdateTask task={task} />
          </HStack>
        </Box>
      </SimpleGrid>
    </Card>
  );
};

export default TaskCard;
