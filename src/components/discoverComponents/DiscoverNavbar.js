import React from 'react'
import './DiscoverNavbar.css'
import {useSelector, connect, useDispatch} from 'react-redux';

function discoverNavbar(props) {

  // const styleColor = useSelector((state) =>state.style.color);

  const langDB = {
    languages:["Java","Python","React","C","C++"]
  };

  const navbarItems= langDB.languages.map((item)=>(
    <span className={'discoverNavbarItem'+props.color}>{item}</span>
  ))

  return (
    <div className={'discoverNavbar'+props.color}>
    <header>{props.header}</header>  
    <main> 
    {navbarItems}
    </main>  
    </div>
  )
}

export default discoverNavbar