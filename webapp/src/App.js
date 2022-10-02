import { Board } from "./pages/Board";
import { Nav } from "./components/Nav/Nav";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Board />
    </div>
  );
}

export default App;
