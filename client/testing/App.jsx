var React = require('react');
var image = 'client/Assets/shopping.png'

const RemoveButton = (props) => {
    return (
        <div>
            <button className="btn btn-danger btn-sm" onClick={props.removeItem}>X</button>
        </div>
    )
}

class Testing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            buyItems: ['milk', 'bread', 'banana']
        }
    }
    addItem(){
        this.setState(prevState => ({
            buyItems: prevState.buyItems.push(prevState.item),
            item: ''
        }))
    }
    handleChange(e){
        this.setState({item: e.target.value});
    }
    removeItem(item){
        console.log('test');
        console.log(item);
    }
    render() {
        const {item, buyItems} = this.state
        return (
            <div>
                <header>
                    <img src={image} width="200px"/>
                    <h1>Shopping List</h1>
                    <div className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                            <input type="text" value={item} onChange={this.handleChange} placeholder="Ex: Bread" className="form-control" id="newItemInput" />
                        </div>
                        <button className="btn btn-primary" onClick={this.addItem}>Add</button>
                    </div>
                </header>
                <div className="content">
                    <table className="table">
                        <caption>Shopping List</caption>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyItems.map(item => {
                                    return (
                                        <tr key={item}>
                                            <td scope="row">1</td>
                                            <td>{item}</td>
                                            <td>
                                                <RemoveButton removeItem={this.removeItem}  item={item}/>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Testing
