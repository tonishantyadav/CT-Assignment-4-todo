import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import ClearTasks from "./ClearTasks";
import ColorModeSwitch from "./ColorModeSwitch";
import { BsGear } from "react-icons/bs";

const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} variant="unstyled">
        <BsGear size="2rem" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent height="75vh" marginTop="30px" borderRadius="5px">
          <DrawerCloseButton />
          <DrawerHeader fontSize="3xl">Settings</DrawerHeader>
          <Divider/>
          <DrawerBody>
            <VStack align="stretch">
              <Box>
                <HStack justifyContent="space-between">
                  <Text>Dark mode</Text>
                  <ColorModeSwitch />
                </HStack>
              </Box>
              <Box>
                <HStack justifyContent="space-between">
                  <Text>Clear all tasks</Text>
                  <ClearTasks />
                </HStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Settings;
