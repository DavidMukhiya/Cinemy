import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { NavLink } from "reactstrap";
import Movie from "./pages/Movie";
import MovieDirectoryPage from "./components/MovieDirectoryPage";
import Tvseries from "./pages/TVseries";
import MovieCardList from "./components/MovieCardList";

function App() {
  return (
    <>
      <Header />
      {/* <Body />
      <MovieDirectoryPage/> */}
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/movies" element={<MovieCardList/>}></Route>
          <Route path="/tvseries" element={<Tvseries/>} ></Route>
        </Routes>
      
    </>
  );
}

export default App;
