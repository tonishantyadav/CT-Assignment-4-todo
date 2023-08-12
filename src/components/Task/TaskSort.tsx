import { Button, useColorMode } from "@chakra-ui/react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

interface Props {
  sortOrder: boolean;
  onSortClick: () => void;
}

const SortTasks = ({ sortOrder, onSortClick }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      onClick={onSortClick}
      variant="unstyled"
      color={colorMode === "light" ? "blue.500" : "yellow.300"}
    >
      {!sortOrder ? (
        <AiOutlineSortAscending size="1.5rem" />
      ) : (
        <AiOutlineSortDescending size="1.5rem" />
      )}
    </Button>
  );
};

export default SortTasks;
