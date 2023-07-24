import { HStack, Heading } from "@chakra-ui/react";
import { SiTask } from "react-icons/si";
import { AiOutlineClear } from "react-icons/ai";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding={1} justifyContent="space-between" marginTop={2}>
      <HStack>
        <Heading>Taskaid</Heading>
        <SiTask size="2em" />
      </HStack>
      <HStack>
        <AiOutlineClear size="1.5rem" className="clear-icon" />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
