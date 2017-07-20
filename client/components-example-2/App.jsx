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
    let button;
    switch (props.answerCorrect) {
        case true:
            button =
                <button className="btn btn-success btn-lg" onClick={props.acceptAnswer}>
                    <i className="fa fa-check"></i>
                </button>
            break;
        case false:
            button =
                <button className="btn btn-danger btn-lg">
                    <i className="fa fa-times"></i>
                </button>
            break;
        default:
            button =
                <button
                    className="btn btn-warning btn-lg"
                    disabled={props.selectedNumbers.length === 0}
                    onClick={props.checkAnswer}
                >=</button>
    }
    return (
        <div className="col-sm-2 btn-panel">
            {button}
            <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={props.redraws === 0}>
                <i className="fa fa-refresh"></i> {props.redraws}
            </button>
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
            return 'btn-info';
        };
        if (props.usedNumbers.indexOf(number) >= 0) {
            return 'btn-danger';
        };
    };
    return (
        <div className="card text-center" style={{width: 'auto', height: '50px', border: '#ddd solid 0.1em'}}>
            <div className="card-block">
                {Numbers.list.map((number, i) =>
                    <span
                        key={i}
                        className={"btn "+ (numberClassName(number) || "btn-primary")}
                        onClick={() => props.selectNumber(number)}
                        disabled={props.usedNumbers.indexOf(number) != -1}
                    >{number}</span>
                )}
            </div>
        </div>
    )
}

Numbers.list = _.range(1,10);

class Game extends React.Component {
    static randomNumber() {
        return 1 + Math.floor(Math.random()*9)
    };
    constructor(props) {
        super(props);
        this.state =  {
            selectedNumbers: [],
            numberOfStars: Game.randomNumber(),
            answerCorrect: null,
            usedNumbers: [],
            redraws: 5
        };
        this.selectNumber = (clickedNumber) => {
            this.setState(prevState => {
                // Solution number One:
                // if (prevState.selectedNumbers.indexOf(clickedNumber) == -1) {
                //     prevState.selectedNumbers.push(clickedNumber);
                // }
                // Solution number two:
                prevState.answerCorrect = null;
                if (prevState.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
                prevState.selectedNumbers.push(clickedNumber);
            });
        };
        this.unselectNumber = (clickedNumber) => {
            this.setState(prevState => ({
                answerCorrect: null,
                selectedNumbers: prevState.selectedNumbers.filter((number) => number !== clickedNumber)
            }));
        };
        this.checkAnswer = () => {
            this.setState(prevState => ({
                answerCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((prevValue, nextValue) => prevValue + nextValue, 0)
            }))};
        this.acceptAnswer = () => {
            this.setState(prevState => ({
                usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
                selectedNumbers: [],
                answerCorrect: null,
                numberOfStars: Game.randomNumber()
            }));
        };
        this.redraw = () => {
            if (this.state.redraws === 0) {return;}
            this.setState(prevState => ({
                numberOfStars: Game.randomNumber(),
                answerCorrect: null,
                selectedNumbers: [],
                redraws: prevState.redraws - 1
            }));
        };
    }
    render () {
        const { selectedNumbers, numberOfStars, answerCorrect, usedNumbers, redraws} = this.state;
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Play Nine</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <Stars numberOfStars={numberOfStars}/>
                            <Button
                                selectedNumbers={selectedNumbers}
                                checkAnswer={this.checkAnswer}
                                answerCorrect={answerCorrect}
                                acceptAnswer={this.acceptAnswer}
                                redraw={this.redraw}
                                redraws={redraws}
                            />
                            <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
                        </div>
                        <br />
                        <Numbers
                            selectedNumbers={selectedNumbers}
                            selectNumber={this.selectNumber}
                            usedNumbers={usedNumbers}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
