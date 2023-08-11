import { Button } from "@chakra-ui/react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

interface Props {
  sortOrder: boolean;
  onSortClick: () => void;
}

const SortTasks = ({ sortOrder, onSortClick }: Props) => {
  return (
    <Button color="yellow.300" variant="unstyled" onClick={onSortClick}>
      {!sortOrder ? (
        <AiOutlineSortAscending size="1.5rem" />
      ) : (
        <AiOutlineSortDescending size="1.5rem" />
      )}
    </Button>
  );
};

export default SortTasks;
