import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
function App() {
  //  get current location

  console.log();

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/game/:id" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
