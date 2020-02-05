import React from "react";
import Container from "../../components/Container";
import Quiz from "./components/Quiz";
import "./css/quiz.css";

function View() {
  return (
    <Container
      link="https://dribbble.com/shots/5836646-Quiz-iOS-app-Animation"
      name="Quiz App"
      color="white"
      style={{ backgroundColor: "var(--blue)" }}
    >
      <Quiz />
    </Container>
  );
}

export default View;
