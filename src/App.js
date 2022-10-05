import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AddUserComponent from "./components/AddUserComponent";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import TVSeries from "./pages/TVSeries";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Header />
      {/* <Body />
      <MovieDirectoryPage/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<Movie/>}></Route>
        <Route path="/tvseries" element={<TVSeries />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/editMovie/:movieId" element={<Admin/>}></Route>
        <Route path="/users" element={<AddUserComponent />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
