import React, { PropTypes } from 'react'
import _ from 'lodash'

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);
    // let stars = [];
    // for (var i = 0; i < numberOfStars; i++) {
    //     stars.push(<i key={i} className="fa fa-star"></i>);
    // }
    return (
        <div className="col-sm-5">
            {_.range(numberOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>
            )}
        </div>
    )
}
const Button = (props) => {
    return (
        <div className="col-sm-2">
            <button>=</button>
        </div>
    )
}
const Answer = (props) => {
    return (
        <div className="col-sm-5">
            <span>1</span>
        </div>
    )
}
const Numbers = (props) => {
    // const arrayOfNumbers = _.range(1,10);
    return (
        <div className="card text-center" style={{width: 'auto', border: '#ddd solid 0.1em'}}>
            <div className="card-block">
                {Numbers.list.map((number, i) =>
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    )
}

Numbers.list = _.range(1,10);

class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <br />
                <Numbers />
            </div>
        );
    }
}

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

export default MainContainer;
