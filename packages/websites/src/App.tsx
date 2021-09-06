import React from "react";
import RadioGroup from "@jswork/react-radio-group";

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
          <RadioGroup
            ref={ref1}
            forwardedRef={ref2}
            placeholder="请选择"
            items={items}
            onChange={(e) => {
              console.log(e.target.value, ref1, ref2);
            }}
          />
        </p>
      </section>
    </div>
  );
}

export default App;
