import React, { PropTypes } from 'react'

class QuizGame extends React.Component {
    static initialState() {
        return {
            date: new Date().toString(),
            counter: 0
        }
    }
    constructor(props, state) {
        super(props);
        this.state = QuizGame.initialState();
        this.resetGame = this.resetGame.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState(prevState => {
                    if(prevState.counter < 10){
                        console.log(prevState.counter);
                        prevState.counter++;
                        this.tick();
                    } else {
                        this.componentWillUnmount();
                    }
                });
            },
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState(prevState => {
            prevState.date = new Date().toString();
        });
    }
    resetGame() {
        this.setState(QuizGame.initialState());
        console.log('reset');
    }
    render () {
        return (
            <div>
                {this.state.counter < 10 ?
                    <p>Date: <strong>{this.state.date}</strong></p> :
                    <p>The counter end at {this.state.counter}</p>
                }
                <hr />
                <button onClick={this.resetGame}><i className="fa fa-refresh"></i></button>
            </div>
        );
    }
}

export default QuizGame;
