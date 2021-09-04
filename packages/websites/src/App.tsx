import React from "react";
import Input from "@jswork/react-input";
import Checkbox from "@jswork/react-checkbox";

function App() {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  return (
    <div className="App">
      <aside>Input</aside>
      <section>
        <p>
          <label>
            <Checkbox
              ref={ref1}
              forwardedRef={ref2}
              indeterminate
              onChange={(inEvent) =>
                console.log(inEvent.target.value, ref1, ref2)
              }
            />
            <strong>同意</strong>
          </label>
        </p>
      </section>
    </div>
  );
}

export default App;
