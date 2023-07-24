import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useContext } from "react";
import TaskContext from "../contexts/taskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
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
        <Task key={task.id} task={task} />
      ))}
    </SimpleGrid>
  );
};

export default TaskList;
