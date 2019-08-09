// document.getElementById('app').innerHTML = "webpack works";
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component/hello/hello'


ReactDOM.render(
    <Hello/>, document.getElementById('app'));


// var func = str =>{
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在使用babel');