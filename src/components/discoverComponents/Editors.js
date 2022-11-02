import React from 'react'
import './Editors.css'
import { CommunitiesItem } from './communities/Communities';
import DiscoverNavbar from './DiscoverNavbar';
function EditorsItem(){

  return(
  <div className="editorsItem">
    <span className="name">Editor name</span>
    <span className="features">
    Main Features.Gonna put here content about programming editors and
    other stuff
    </span>
  <span className="numDataCont">
    <span className="numData">Number of topics</span>
    <span className="numData">Number of users</span>
  </span>
  <span className="button">Read more</span>
</div>)
}
function Editors(props) {

  const en = 'Editors';
      const az = "Editorlar";

  var navbarHeader = props.lang ? en : az;
  return (
    <div className={'editorsContainer'+props.color}>
      <span className='header'>Editors</span>
        {/* <DiscoverNavbar header={navbarHeader}  color={props.color}/> */}
      <span style={{display:'flex',flexDirection:'row'}}>
        <EditorsItem />
        <EditorsItem />
        <EditorsItem />
      </span>  
        
    </div>
  )
}

export default Editors