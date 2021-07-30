import React, { Fragment } from "react";
import BackgroundImage from "components/BackgroundImage/BackgroundImage.component";
import Container from "components/Container/Container.component";
import Header from "components/Header/Header.component";
import TodosContainer from "components/TodosContainer/TodosContainer.component";
import AddTodoForm from "components/AddTodoForm/AddTodoForm.component";
import TodoList from "components/TodoList/TodoList.component";
import Footer from "components/Footer/Footer.component";

function Home() {
  return (
    <Fragment>
      <BackgroundImage />
      <Container>
        <Header />
        <TodosContainer>
          <AddTodoForm />
          <TodoList />
        </TodosContainer>
        <Footer />
      </Container>
    </Fragment>
  );
}

export default Home;
