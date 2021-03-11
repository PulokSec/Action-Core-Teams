import React, { createContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import bgBanner from '../src/Components/images/bg.jpg';

export const CategoryContext = createContext();

  function App() {
  const [teams,setTeams] = useState([]);// teams change state
  const [banner,setBanner] = useState(bgBanner);// banner change
  const [title,setTitle] = useState("ACTION CORE TEAMS"); // title change

  useEffect(()=>{
    const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      const newData = data.teams.slice(0,10)
         setTeams(newData)
    })},[])
  return (
   <CategoryContext.Provider value={{teams,setTeams,banner,setBanner,title,setTitle}}>
     <div style={{
    backgroundColor: 'brown',
  }}>
     <Header/>
      <Router>
      <Switch>
        <Route exact path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/team/:id/">
          <TeamDetails/>
        </Route>
        <Route path="*">
          <h1 className="text-center my-5"style={{color:'white'}}>404 - Not Found!</h1>
        </Route>
      </Switch>
      <Footer/>
    </Router>
     </div>
   </CategoryContext.Provider>
  );
}

export default App;
