import {
  Box,
  Grid,
  GridItem,
  SimpleGrid
} from "@chakra-ui/react";
import { useReducer } from "react";
import AddTaskDialog from "./components/AddTaskDialog";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SearchAndSortTask from "./components/SearchAndSort";
import TaskList from "./components/TaskList";
import TaskContext from "./contexts/taskContext";
import defaultTasks from "./data/tasks";
import taskReducer from "./reducers/taskReducer";

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, defaultTasks);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <Grid
        templateAreas={`"nav nav" 
                      "main main"
                      "footer footer"`}
        gridTemplateRows={"50px 1fr 50px"}
      >
        <GridItem area={"nav"}>
          <Box marginX={2} marginY={1}>
            <NavBar />
          </Box>
        </GridItem>
        <GridItem area={"main"}>
          <Box margin={4}>
            <SimpleGrid
              templateColumns="100px 1fr"
              marginTop={8}
              marginBottom={8}
              spacing={2}
            >
              <Box>
                <AddTaskDialog />
              </Box>
              <Box>
                <SearchAndSortTask />
              </Box>
            </SimpleGrid>
            <TaskList />
          </Box>
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </TaskContext.Provider>
  );
};

export default App;
