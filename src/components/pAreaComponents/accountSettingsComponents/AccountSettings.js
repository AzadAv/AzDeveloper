import React from 'react'
import './AccountSettings.css'

import Profile from './Profile';
import Photo from './Photo';
import Security from './Security';
import Privacy from './Privacy';
import { NavLink } from 'react-router-dom';
function AccountSettings(props) {

    const data = {
        en: {
          navbar: ["Profile", "Photo", "Security", "Privacy"],
        },
        az: {
          navbar: ["Profil", "Şəkil", "Güvənlik", "Gizlilik"],
        },
      };

      const navbar = props.lang ?
        data.en.navbar.map((item) => <div className={"acNavbarBtn"+props.colors}>{item}</div>)
        : data.az.navbar.map((item) => <div className={"acNavbarBtn"+props.colors}>{item}</div>)
    
    
  return (
    <div className={'acContainer'+props.colors}>
        
        <div className={'acNavbar'+props.colors}>
        <div className="img"></div>
           <div style={{marginTop:"10%"}}>{navbar}</div> 
       </div>
        <span className='layout'>
            <div className={'acHeader'+props.colors}>Header</div>
            <div className='acMain'>
          <Profile colors={props.colors}/>
          <Photo />
          <Security />
          <Privacy />
            </div>
        </span>
        </div>
  )
}

export default AccountSettings