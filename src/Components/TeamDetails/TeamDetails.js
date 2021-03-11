import React, {useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView,faFlag,faFutbol,faMars} from '@fortawesome/free-solid-svg-icons'
import femaleImg from '../images/female.png'
import youtube from '../images/YouTube.png'
import facebook from '../images/Facebook.png'
import twitter from '../images/Twitter.png'
import { CategoryContext } from '../../App';
import './TeamDetails.css';

const TeamDetails = () => {
  const {setBanner,setTitle} = useContext(CategoryContext);
  const { id } = useParams();   
  const [team, setTeam] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setTeam(data.teams[0]))
 }, [id])
    const {strTeam,strCountry,strSport,strGender,strDescriptionEN,intFormedYear,strTeamFanart3,strTwitter,strYoutube,strWebsite,strTeamBanner} = team;

    //set new banner
    useEffect(()=>{
      setBanner(strTeamBanner);
      setTitle("");
    },[setBanner,setTitle,strTeamBanner])

    let badge;
  const facebookLink = `https://${strWebsite}`;
  const youtubeLink = `https://${strYoutube}`;
  const twitterLink = `https://${strTwitter}`;

  if(strGender === 'female'){
    badge = femaleImg;
  }
  else{
    badge = strTeamFanart3;
  }
  const styles = {
    backgroundColor:'#3A42FF',
    color:'#ffff'
  }
  return (
    <div>
        <Card className="mt-3 info" style={styles}>
            <Card.Body className='cardInfo'>
                <div className="col-md-7 ml-3">
                    <h2>{strTeam}</h2>
                    <p><FontAwesomeIcon icon={faStreetView}/> Founded: {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol}/> Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={faMars}/> Gender: {strGender}</p>
                </div>
                <div className="col-md-5">
                <Card.Img className="mt-2" style={{borderRadius:'10px'}} variant="bottom" src={badge} />    
                </div>
            </Card.Body>
        </Card>
        <div className="mt-3 d-flex justify-content-center info">
          <p className="" style={{color:'white'}}>{strDescriptionEN}</p>
        </div>
        <div className="d-flex justify-content-center mt-3 mb-3">
        <a href={facebookLink}><img src={facebook} alt="social" style={{width:'42px',height:'42px'}}/></a>
        <a href={youtubeLink}><img src={youtube} alt="social" style={{width:'42px',height:'42px'}}/></a>
        <a href={twitterLink} ><img src={twitter} alt="social" style={{width:'42px',height:'42px'}}/></a>
        </div>
    </div>
  );
};

export default TeamDetails;