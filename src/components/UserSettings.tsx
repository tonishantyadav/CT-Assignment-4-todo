import {
  Box,
  Button,
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

const UserSettings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Panel</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent height="75vh" marginTop="30px">
          <DrawerCloseButton />
          <DrawerHeader>Settings</DrawerHeader>
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

export default UserSettings;
