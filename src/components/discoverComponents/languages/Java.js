import React from 'react'
import './Java.css'

function Java(props) {

   const data = {
//     JavaLang :"Public class `{
//    Public static void main(String[] args)`{}
//     System.out.println("Hello World"); 
//    }'
//    }'",
                    helloo: "'{{}}'"}

    const syntaxContent =data.helloo;
 
  return (
    <div className={'javaMainContainer'+props.color}>
        <div className='halfBox'>
            <span className={'javaContainer'+props.color}>
                <header>Syntax</header>
            <main>{syntaxContent}</main>
            </span>
            <span className={'javaContainer'+props.color}>
            <header>What is Java ?</header>
                <main></main>
            </span>
        </div>
        <div className='halfBox'>
            <span className={'javaContainer'+props.color}>
                <header>Why to use ${ } ?</header>
                <main></main>
            </span>
            <span className={'javaContainer'+props.color}>
                <header>Popular frameworks and libraries</header>
                <main></main>
            </span>
            <span className={'javaContainer'+props.color}>
                <header>4. ${ } statistics</header>
                <main></main>
            </span>
        </div>
    </div>
  )
}

export default Java