import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";
import QuestionsTable from "./Components/QuestionsTable";

function App() {
  return (
    <div className="App">
      <h1> Stack overflow questions </h1>
      <QuestionsTable></QuestionsTable>
    </div>
  );
}

export default App;
