import { Box, HStack, Heading } from "@chakra-ui/react";
import { AiOutlineClear } from "react-icons/ai";
import { SiTask } from "react-icons/si";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Box marginX={2} marginY={1}>
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
    </Box>
  );
};

export default NavBar;
