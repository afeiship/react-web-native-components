import React from "react";
import Input from "@jswork/react-input";

function App() {
  return (
    <div className="App">
      <aside>Input</aside>
      <section>
        <Input
          placeholder="Type text1..."
          onChange={(inEvent) => console.log(inEvent.target.value)}
        />

        <Input
          placeholder="Type text2..."
          type="search"
          onChange={(inEvent) => console.log(inEvent.target.value)}
        />
      </section>
    </div>
  );
}

export default App;
