import React from "react";
import { CalculateScore } from "./components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Steve"
        School="DNV Public School"
        Total={284}
        goal={3}
      />
    </div>
  );
}

export default App;