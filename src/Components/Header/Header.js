import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { CategoryContext } from '../../App';
import './Header.css';

const Header = () => {
    const {banner,title} = useContext(CategoryContext);
  return (
    <Container className='headerDiv' style={{backgroundImage: `url(${banner})`}}>
        <a href="/home"><h3 className="text-center pt-5">{title}</h3></a>
      </Container>
  )
};

export default Header;