import React from "react";
import Select from "@jswork/react-select";

function App() {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const items = [
    {
      label: "optino1",
      value: "v1",
    },
    {
      label: "optino2",
      value: "v2",
    },
    {
      label: "optino3",
      value: "v3",
    },
  ];

  return (
    <div className="App">
      <aside>Input</aside>
      <section>
        <p>
          <Select placeholder="请选择" items={[]} />
        </p>
      </section>
    </div>
  );
}

export default App;
