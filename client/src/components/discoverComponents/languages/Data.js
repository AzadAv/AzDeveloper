import React,{useReducer,useState,useEffect} from "react";

const javaSyntax = (<div className="syntaxContainer">
    <span>public class Hello World {`{`}</span>
    <span style={{marginLeft:'4%'}}>public static void main{`(`}String[ ] args{`)`} {`{`}</span>
    <span style={{marginLeft:'7%'}}>String hello = "Hello Java Developer";</span>
    <span style={{marginLeft:'7%'}}>System.out.println(hello);</span>
    <span style={{marginLeft:'4%'}}>{`}`}</span>
    <span>{`}`}</span>
  </div>);
const pythonSyntax = (<div className="syntaxContainer">

<span>hello = "Hello Python Developer"</span> 
<span>print(hello)</span> 
</div>)
const jsSyntax = (<div className="syntaxContainer">
    <span>//using console log</span>
    <span>console.log{`(`}'Hello JavaScript Developer'{`)`};</span>
    <span>...</span>
    <span>//using alert</span>
    <span>alert("Hello JavaScript Developer");</span>
    <span>...</span>
    <span>//using document.write{`(`}{`)`}</span>
    <span>document.write{`(`}'Hello JavaScript Developer'{`)`};</span>

</div>)
const cSyntax = (<div className="syntaxContainer">
  <span>{"#include <stdio.h>"}</span>
  <span>int main{`(`}{`)`} {`{`}</span>
  <span style={{marginLeft:'7%'}}>//printf() displays the string inside quotation</span>
  <span style={{marginLeft:'7%'}}>printf("Hello C Developer");</span>
  <span style={{marginLeft:'7%'}}>return 0;</span>
  <span>{`}`}</span>
</div>)

const javaOutput = (<div>Hello Java Developer</div>)
const pythonOutput = (<div>Hello Python Developer</div>)
const jsOutput =(<div>Hello JavaScript Developer</div>)
const cOutput = (<div>Hello C Developer</div>)
 const data = {
    java: {
      syntax: javaSyntax,
      output: javaOutput,
      desc: "Java Content",

    },
    python : {
      syntax:pythonSyntax,
      output:pythonOutput,
      desc: "Python Content",
  },
    js : {
    syntax:jsSyntax,
    output:jsOutput,
    desc: "JavaScript Content",
},
    c : {
      syntax:cSyntax,
      output:cOutput,
      desc: "C Content",
}
 }
  export default data;



 

