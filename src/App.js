import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import MovieCardList from "./components/MovieCardList";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import Tvseries from "./components/Tvseries";
import AddUserComponent from "./components/AddUserComponent";

function App() {
  return (
    <>
      <Header />
      {/* <Body />
      <MovieDirectoryPage/> */}
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/movies" element={<MovieCardList />}></Route>
        <Route path="/tvseries" element={<Tvseries />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/editMovie/:movieId" element={<Admin />}></Route>
        <Route path="/users" element={<AddUserComponent />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
