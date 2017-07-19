import React, { PropTypes } from 'react'

const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img width="75" src={props.avatar_url} />
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
                        avatar_url={card.avatar_url}
                    />
                </div>
            )}
        </div>
    );
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
        this.handleSubmit = (event) => {
            event.preventDefault();
            console.log('Event: Form submit', this.state.userName);
            axios.get(`https://api.github.com/users/${this.state.userName}`)
                .then(resp => {
                    this.props.onSubmit(resp.data)
                    this.setState({userName: ''});
                });
        };
    };
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Github username"
                    value={this.state.userName}
                    onChange={(event) => this.setState({ userName: event.target.value})}
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
            cards: []
        };
        this.addNewCard = (cardInfo) => {
            console.log(cardInfo);
            this.setState(prevState => ({
                cards: prevState.cards.concat(cardInfo)
            }));
        };
    }
    render () {
        return (
            <div>
                <Form onSubmit={this.addNewCard} />
                <CardList  cards={this.state.cards}/>
            </div>
        );
    }
}

export default MainContainer;
