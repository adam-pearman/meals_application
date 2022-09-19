import './App.css';
import Search from "./Components/Search";
import Favourites from "./Components/Favourites";
import Meals from "./Components/Meals";
import Modal from "./Components/Modal";
import {useGlobalContext} from "./context";


function App() {
    const {showModal, favourites} = useGlobalContext()
  return (
      <main>
          <Search/>
          {favourites.length > 0 && <Favourites/>}
          <Meals/>
          {showModal && <Modal/>}
      </main>
  )
}

export default App;
