import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TaskGrid from "../components/TaskGrid";
import TaskProvider from "../TaskProvider";

const TasksListPage = () => {
  return (
    <TaskProvider>
      <Grid
        templateAreas={`
          "nav nav"
          "main main"
          "footer footer"
        `}
        gridTemplateRows={"50px 1fr 50px"}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem area={"main"}>
          <TaskGrid />
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </TaskProvider>
  );
};

export default TasksListPage;
