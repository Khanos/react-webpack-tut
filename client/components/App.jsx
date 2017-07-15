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
            {props.cards.map((card) =>
                <div key={card.id}>
                    <Card
                        name={card.name}
                        company={card.company}
                        avatarUrl={card.avatarUrl}
                    />
                </div>
            )}
        </div>
    );
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = (event) => {
            event.preventDefault();
            console.log('Event: Form submit', this.userNameInput.value);
            console.log(this.userNameInput);
        };
    };
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Github username"
                    ref={(input) => this.userNameInput = input  }
                required/>
                <button type="submit">Add Card</button>
            </form>
        );
    }
}

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 1,
                    name: "Epilef Rodriguez",
                    company: "Free Will",
                    avatarUrl: "https://avatars3.githubusercontent.com/u/10603782?v=3"
                },
                {
                    id: 2,
                    name: "Angular",
                    company: "null",
                    avatarUrl: "https://avatars0.githubusercontent.com/u/139426?v=3"}
            ]
        };
    }
    render () {
        return (
            <div>
                <Form />
                <CardList  cards={this.state.cards}/>
            </div>
        );
    }
}

export default MainContainer;
