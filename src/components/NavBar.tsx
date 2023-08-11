import { HStack, Heading } from "@chakra-ui/react";
import { LiaTasksSolid } from "react-icons/lia";
import Settings from "./Settings";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" margin={3}>
        <HStack>
          <Heading>Your tasks</Heading>
          <LiaTasksSolid size="2.5rem"/>
        </HStack>
        <Settings />
      </HStack>
    </>
  );
};

export default NavBar;
