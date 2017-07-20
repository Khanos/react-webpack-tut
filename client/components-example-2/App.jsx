import React, { PropTypes } from 'react'
import _ from 'lodash'

const Stars = (props) => {
    // const numberOfStars = 1 + Math.floor(Math.random()*9);
    // let stars = [];
    // for (var i = 0; i < numberOfStars; i++) {
    //     stars.push(<i key={i} className="fa fa-star"></i>);
    // }
    return (
        <div className="col-sm-5">
            {_.range(props.numberOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>
            )}
        </div>
    )
}
const Button = (props) => {
    return (
        <div className="col-sm-2" style={{height: '96px', display: 'flex', alignItems: 'center'}}>
            <button className="btn btn-info" disabled={props.selectedNumbers.length === 0}>=</button>
        </div>
    )
}
const Answer = (props) => {
    return (
        <div className="col-sm-5">
            {props.selectedNumbers.map((number, i) =>
                <span className="btn btn-success" key={i} onClick={() => props.unselectNumber(number)}>{number}</span>
            )}
        </div>
    )
}
const Numbers = (props) => {
    // const arrayOfNumbers = _.range(1,10);
    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }
    return (
        <div className="card text-center" style={{width: 'auto', height: '50px', border: '#ddd solid 0.1em'}}>
            <div className="card-block">
                {Numbers.list.map((number, i) =>
                    <span
                        key={i}
                        className={numberClassName(number), "btn btn-primary"}
                        onClick={() => props.selectNumber(number)}
                    >
                        {number}
                    </span>
                )}
            </div>
        </div>
    )
}

Numbers.list = _.range(1,10);

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            selectedNumbers: [],
            numberOfStars: 1 + Math.floor(Math.random()*9)
        };
        this.selectNumber = (clickedNumber) => {
            this.setState(prevState => {
                // Solution number One:
                // if (prevState.selectedNumbers.indexOf(clickedNumber) == -1) {
                //     prevState.selectedNumbers.push(clickedNumber);
                // }
                // Solution number two:
                if (prevState.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
                prevState.selectedNumbers.push(clickedNumber);
            });
        };
        this.unselectNumber = (clickedNumber) => {
            this.setState(prevState => ({
                selectedNumbers: prevState.selectedNumbers.filter((number) => number !== clickedNumber)
            }));
        };
    }
    render () {
        const { selectedNumbers, numberOfStars} = this.state;
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={numberOfStars}/>
                    <Button selectedNumbers={selectedNumbers}/>
                    <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
                </div>
                <br />
                <Numbers
                    selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}
                />
            </div>
        );
    }
}

export default Game;
