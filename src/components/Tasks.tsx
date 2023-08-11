import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useTasks } from "../TaskProvider";
import TaskCard from "./TaskCard";
import SortTasks from "./SortTasks";
import useTasksSort from "../hooks/useTasksSort";

const TaskList = () => {
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
      <Flex justifyContent="flex-end">
        <SortTasks sortOrder={sortOrder} onSortClick={toogleSortOrder} />
      </Flex>
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

export default TaskList;
