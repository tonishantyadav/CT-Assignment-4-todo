import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useTasks } from "../TaskProvider";
import useTasksSort from "../hooks/useTasksSort";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";
import SortTasks from "./SortTasks";
import TaskCard from "./TaskCard";

const Tasks = () => {
  const { tasks } = useTasks();
  const [sortOrder, setSortOrder] = useState(false);

  const toogleSortOrder = () => {
    setSortOrder(!sortOrder);
  };

  const sortedTasks = useTasksSort(tasks, sortOrder);

  if (sortedTasks.length === 0)
    return (
      <Box>
        <Text textAlign="center">No task found</Text>
      </Box>
    );
  return (
    <>
      <SimpleGrid templateColumns={"100px 1fr 50px"} marginBottom={5}>
        <Box>
          <AddTask />
        </Box>
        <Box marginStart={4}>
          <SearchTask />
        </Box>
        <Box marginStart={4}>
          <SortTasks sortOrder={sortOrder} onSortClick={toogleSortOrder} />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
        {sortedTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Tasks;
