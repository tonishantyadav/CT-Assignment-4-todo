import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { TiTick, TiTickOutline } from "react-icons/ti";

const TaskCompleted = () => {
  const [completed, setCompleted] = useState(false);
  return (
    <Button variant="ghost" onClick={() => setCompleted(!completed)}>
      {completed ? (
        <TiTick color="#58e888" size="1.5rem" />
      ) : (
        <TiTickOutline size="1.5rem" color="58e888" />
      )}
    </Button>
  );
};

export default TaskCompleted;
