import "./App.css";
import Massage from "./components/massage/Massage";
import MassageProvider from "./context/massage-context";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <MassageProvider>
       < Home/>
      </MassageProvider>
    </div>
  );
}

export default App;
