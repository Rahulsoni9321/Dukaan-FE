
import "./App.css";
import Sidebar from "./components/Sidebar";
import DashArea from "./components/DashArea";

function App() {

  return (
    <div className="w-full h-screen flex">
      <Sidebar></Sidebar>
      <DashArea></DashArea>
    </div>
  );
}

export default App;
