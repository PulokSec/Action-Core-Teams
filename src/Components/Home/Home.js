import React, { useContext } from 'react';
import Teams from '../Teams/Teams';
import { CategoryContext } from '../../App';

const Home = () => {
    const {teams} = useContext(CategoryContext);
  return (
    <div className="container mt-5">
      <div className="row">
      {
        teams && teams.map(team => <Teams key={team.idTeam} teams={team}></Teams>)
      }
      </div>
    </div>
  );
};

export default Home;