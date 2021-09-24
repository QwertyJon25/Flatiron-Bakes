import {useState} from 'react'
import Header from "./Header"
import CakeCard from "./CakeCard";
import SearchBar from "./SearchBar";
import cakes from './data';
import CakeDetail from './CakeDetail'


function App() {
  const [selectedCake, setSelectedCake] = useState(null)
  const [visible, setVisible] = useState(false)
  const [cakeList, setCakes] = useState(cakes)

  
  return (
    <>
      <Header />
      {visible?<SearchBar />:null}
      <button onClick={() => setVisible(!visible)}>{visible?'x':'Form'}</button>
      <br/>
        {selectedCake? <CakeDetail cake={selectedCake}/>:null}

      {cakes.map(cake => <CakeCard cake={cake} setSelectedCake={setSelectedCake}/>)}
    </>
  );
}

export default App;