import "./css/style.css";
import { BlocksContext } from "./context/blocksContext"
import { FlatsContext } from "./context/flatsContext"
import { useBlocks } from "./hooks/blocks.hook"


import { Loader } from './components/loader';

function App() {
  const { blocks, setBlocks, menuClick, setMenuClick } = useBlocks()
  return (
    <div className="App container_main">
      <BlocksContext.Provider value={{ blocks, setBlocks, menuClick, setMenuClick }}>
        <Loader />
      </BlocksContext.Provider>
    </div>
  );
}

export default App;
