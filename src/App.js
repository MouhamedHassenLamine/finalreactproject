import './App.css';
import Portfolio from './compoent/Portfolio';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Profile from './compoent/Projects/Jsxp/Profile';
import Propsproject from './compoent/Projects/Propsp/Propsproject';
import Card from './compoent/Projects/StateP/Card';
import Task from './compoent/Projects/Redux/Task'
import UserList from './compoent/Projects/Apip/UserList';
import MovieCard from './compoent/Projects/Hooks&Router/MovieCard';
import ShowMoreZone from './compoent/Projects/Hooks&Router/ShowMoreZone'
import { useState } from 'react';
import Backbutton from './compoent/Backbutton';
function App() {
  const [td,setTd]=useState(0)
  const [direction, setDirection] = useState([ 0,/*up down */300/*left right*/])
  return (
    <div className="App">
      <BrowserRouter>
      <Backbutton></Backbutton>
      <Routes>
        <Route exact path='/' element={<Portfolio direction={direction} setDirection={setDirection}></Portfolio>} ></Route>
        <Route exact path='/Jsx_Project' element={<Profile></Profile>}></Route>
        <Route exact path='/Props_Project' element={<Propsproject></Propsproject>}></Route>
        <Route exact path='/State_Project' element={<Card></Card>}></Route>
        <Route exact path='/Redux_Project' element={<Task></Task>}></Route>
        <Route exact path='/Api_Project' element={<UserList></UserList>}></Route>
        <Route exact path='/Hooks&Router_Project' element={<MovieCard setTd={setTd}/>}/>
        <Route exact path='/smz' element={<ShowMoreZone td={td}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
