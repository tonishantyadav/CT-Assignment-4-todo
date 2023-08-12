import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const TaskStarred = () => {
  const [starred, setStarred] = useState(false);

  return (
    <Button variant="ghost" onClick={() => setStarred(!starred)}>
      {starred ? (
        <AiFillStar color="#FFD700" size="1.5rem" />
      ) : (
        <AiOutlineStar size="1.5rem" color="#FFD700" />
      )}
    </Button>
  );
};

export default TaskStarred;
