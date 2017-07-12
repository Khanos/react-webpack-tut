/*
    ./client/components/App.jsx
*/
// import React from 'react';
//
// export default class App extends React.Component {
//   render() {
//     return (
//      <div style={{textAlign: 'center'}}>
//         <h1>Hello World!</h1>
//       </div>);
//   }
// }
import React, { PropTypes } from 'react'

const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img width="75" src={props.avatarUrl} />
            <div className="info">
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
                    {props.name}
                </div>
                <div>
                    {props.company}
                </div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
};

export default CardList;
