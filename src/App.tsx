import React from "react";
import Talent from "./components/Talent";
import "antd/dist/reset.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Talent Pipeline</h1>
      <Talent />
    </div>
  );
};

export default App;
