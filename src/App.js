import React, { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/shared/Card";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header text={"Hello World"}></Header>
      <FeedbackList feedback={feedback} />
    </>
  );
};

export default App;
