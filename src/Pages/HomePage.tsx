import { Flex, Heading } from "@chakra-ui/react";
import { LiaTasksSolid } from "react-icons/lia";
import SignInPage from "./SignInPage";

const HomePage = () => {
  return (
    <Flex direction="column" marginTop="8rem">
      <Flex direction="row" alignItems="center" justifyContent="center">
        <Heading fontSize="5xl">Taskaid</Heading>
        <LiaTasksSolid size="2.5rem" />
      </Flex>
      <SignInPage />
    </Flex>
  );
};

export default HomePage;
