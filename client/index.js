/*
    ./client/index.js
    which is the webpack entry file
*/
/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

let data = [
    {   name: "Epilef Rodriguez",
        company: "Free Will",
        avatarUrl: "https://avatars3.githubusercontent.com/u/10603782?v=3"
    },
    {   name: "Angular",
        company: "null",
        avatarUrl: "https://avatars0.githubusercontent.com/u/139426?v=3"}
];

ReactDOM.render(<App cards={data}/>, document.getElementById('root'));
