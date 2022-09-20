import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { NavLink } from "reactstrap";
import Movie from "./pages/Movie";

function App() {
  return (
    <>
      <Header />
      <Body />
      {/* <div>
        <Routes>
          <Route path="/" element={<Movie />}></Route>
        </Routes>
      </div> */}
    </>
  );
}

export default App;
