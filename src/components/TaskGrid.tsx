import { Box } from "@chakra-ui/react";
import TaskList from "./Tasks";

const TaskGrid = () => {
  return (
    <Box marginX={4} marginTop={10}>
      <TaskList />
    </Box>
  );
};

export default TaskGrid;
