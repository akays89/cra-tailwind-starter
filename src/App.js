import { useState } from "react";
import Hello from "./components/Hello";
import Input from "./components/Input";

function App() {
  const [name, setName] = useState("Mark");

  return (
    <main>
      <Hello name={name} />

      <Input handler={setName} />
    </main>
  );
}

export default App;
