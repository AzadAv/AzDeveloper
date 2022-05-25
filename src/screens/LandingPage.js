import React from 'react';

import Header from '../components/Header';
import Content from '../components/Content';

function LandingPage(props) {
  return (<div>


      <Content language={props.lang} colors={props.colors}/>
   
 
  </div>);
}

export default LandingPage;
