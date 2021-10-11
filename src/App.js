import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Houses from './Components/Houses'
import AddHouse from './Components/AddHouse'
import MainPage from './Components/MainPage'
import OneHouse from './Components/OneHouse';
import NavBar from './Components/NavBar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  const [dataHouse, setDataHouses] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [oneChoosenId, setOneChoosenId] = useState(null)

  useEffect(() => {
    if(!isLoaded){
      getData();
      setIsLoaded(true)
    }
    

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("http://mobile-reality-backend.sadek.usermd.net/houses/all");
      const data = await response.json();
      console.log(data.results)
      // store the data into our books variable
      setDataHouses(data.results) ;
    }
  }, []);

  const deleteElementHouse = (id) => {
    let filteredData = dataHouse.filter((el,index)=>{
      if(!(el._id === id)){
        return el
      }
    })
    
    setDataHouses(filteredData)
  }

  const setChoosenIdfunc = (id) =>{
    console.log(id)
    setOneChoosenId(id)
  }

  const updateHouseList = (newformData) =>{
    setDataHouses([...dataHouse, newformData])

  }

  console.log(dataHouse)
  return (
    <Router>
    <div className="App">
      <Route exact path="/">
            <MainPage />
          </Route>
      <Route path="/houses">
           { isLoaded ?(<Houses setChoosenIdfunc={setChoosenIdfunc} dataHouse= {dataHouse} deleteElementHouse={deleteElementHouse}/>) :"Loading..."}
           <NavBar/>
          </Route>
          <Route path="/oneHouse">
          
          { isLoaded ?( oneChoosenId ?
          <OneHouse dataHouse= {dataHouse} oneChoosenId={oneChoosenId} deleteElementHouse={deleteElementHouse}/>:"Nie wybrano domu" )
           :"Loading..."}
          <NavBar/>
          </Route>
          <Route path="/addhouse">
            <AddHouse updateHouseList={updateHouseList}/>
            <NavBar/>
          </Route>



    </div>
    </Router>
  );
}

export default App;
