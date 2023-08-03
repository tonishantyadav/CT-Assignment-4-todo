import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useTask } from "../TaskProvider";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { tasks } = useTask();
  if (tasks.length === 0)
    return (
      <Box>
        <Text textAlign="center">No task found</Text>
      </Box>
    );
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
    >
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </SimpleGrid>
  );
};

export default TaskList;
