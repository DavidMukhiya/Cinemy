import './App.css';
import MovieCardList from './components/MovieCardList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';

function App() {
  return ( 
      <>
        <Navbar/>
        <MovieCardList/>
      </>
   );
}

export default App;
