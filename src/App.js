import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLeaf, faScissors, faGem } from "@fortawesome/free-solid-svg-icons";
import Generator from "./pages/Generator";
library.add(faLeaf, faScissors, faGem);

function App() {
  return (
    <div className="App">
      <Generator />
    </div>
  );
}

export default App;
