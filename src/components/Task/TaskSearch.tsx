import {
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AiOutlineFileSearch } from "react-icons/ai";
import TaskContext from "../../contexts/taskContext";

const SearchTask = () => {
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
      <InputGroup>
        <InputLeftElement children={<AiOutlineFileSearch />} />
        <Input
          type="text"
          placeholder="Search task"
          borderRadius="50px"
          variant="filled"
          {...register("searchText")}
        />
      </InputGroup>
    </form>
  );
};

export default SearchTask;
