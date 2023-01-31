import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="all_pages">
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
