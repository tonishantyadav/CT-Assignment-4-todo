import { HStack, Heading } from "@chakra-ui/react";
import Settings from "./Settings";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" margin={3}>
        <HStack>
          <Heading>Your tasks</Heading>
        </HStack>
        <Settings />
      </HStack>
    </>
  );
};

export default NavBar;
