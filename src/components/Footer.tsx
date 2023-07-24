import { Container, Flex, Text } from "@chakra-ui/react";
import { SiTask } from "react-icons/si";

const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
    <Flex justify="center" direction="column" align="center" gap={4}>
      <SiTask size="3rem" />
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} Taskaid, Inc. All rights reserved.
      </Text>
    </Flex>
  </Container>
);

export default Footer;
