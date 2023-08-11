import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useTasks } from "../TaskProvider";
import TaskCard from "./TaskCard";
import SortTasks from "./SortTasks";

const TaskList = () => {
  const { tasks } = useTasks();
  const [sortOrder, setSortOrder] = useState(false);
  const [sortedTasks, setSortedTasks] = useState([...tasks]);

  const toogleSortOrder = () => {
    setSortOrder(!sortOrder);

    const updatedSortedTasks = [...tasks].sort((t1, t2) => {
      const task1 = t1.title.toLowerCase();
      const task2 = t2.title.toLowerCase();

      if (!sortOrder) {
        return task1.localeCompare(task2);
      } else {
        return task2.localeCompare(task1);
      }
    });
    setSortedTasks(updatedSortedTasks);
  };

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
