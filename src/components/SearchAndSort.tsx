import { HStack, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import TaskContext from "../contexts/taskContext";
import SortTasks from "./SortTasks";

const SearchAndSortTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const { dispatch } = useContext(TaskContext);

  const onSubmit = (data: FieldValues) => {
    console.log("clicked");
    dispatch({
      type: "SEARCH",
      taskTitle: data.searchText,
    });
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack spacing={3}>
        <Input
          type="text"
          placeholder="Search a task..."
          borderRadius="50px"
          {...register("searchText")}
        />
      </HStack>
    </form>
  );
};

export default SearchAndSortTask;
