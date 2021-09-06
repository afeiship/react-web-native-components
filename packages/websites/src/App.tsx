import React, { useState } from "react";
import CheckboxGroup from "@jswork/react-checkbox-group";

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

function App() {
  const initial: any[] = [];
  const [value, setValue] = useState(initial);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);

  return (
    <div className="App">
      <aside>Input</aside>
      <section>
        <p>
          <CheckboxGroup
            ref={ref1}
            forwardedRef={ref2}
            value={value}
            placeholder="请选择"
            items={items}
            onChange={(e: any) => {
              console.log(e.target.value, ref1, ref2);
            }}
          />
        </p>
        <p>
          <button
            onClick={() => {
              console.log("async set value");
              setValue(["v1", "v3"]);
            }}
          >
            async set value
          </button>
        </p>
      </section>
    </div>
  );
}

export default App;
