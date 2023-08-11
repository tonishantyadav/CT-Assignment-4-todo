import { Box, HStack, Heading } from "@chakra-ui/react";
import { SiTask } from "react-icons/si";
import UserSettings from "./UserSettings";

const NavBar = () => {
  return (
    <Box marginX={2} marginY={1}>
      <HStack padding={1} justifyContent="space-between" marginTop={2}>
        <HStack>
          <Heading>Taskaid</Heading>
          <SiTask size="2rem" />
        </HStack>
        <HStack>
          <UserSettings />  
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
