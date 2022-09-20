import "./App.css";
import PlayBoard from "./Baitap_xucxac/PlayBoard";
import PlayResult from "./Baitap_xucxac/PlayResult";

function App() {
  return (
    <div className="App text-center">
      <h1 style={{ fontSize: 50 }}>GAME ĐỔ XÚC XẮC </h1>
      <PlayBoard />
      <PlayResult />
    </div>
  );
}

export default App;
