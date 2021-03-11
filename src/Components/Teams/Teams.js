import React, { useContext, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { CategoryContext } from '../../App';
import bgBanner2 from '../images/bg.jpg';

const Teams = (props) => {
  const {strTeam,strCountry,idTeam,strTeamBadge} = props.teams;
  const {setBanner,setTitle,banner,title} = useContext(CategoryContext);
  const history = useHistory();
  //conditional banner showcase
  useEffect(()=>{
    if(banner !== bgBanner2 && title === ""){
      setBanner(bgBanner2);
      setTitle("ACTION CORE TEAMS");
    }
  },[banner,setBanner,title,setTitle])

  return (
    <div className="col-md-3 my-3 teamDiv">
        <Card>
            <Card.Img className="mt-3" variant="top" src={strTeamBadge} />
            <Card.Body>
                <div className="text-center">
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Country:{strCountry}</Card.Text>
                    <Button onClick={()=>{ history.push(`/team/${idTeam}`)
                  }}
                    variant="primary">Team Details</Button>
                </div>
            </Card.Body>
        </Card>
        </div>
  );
};

export default Teams;