import React from 'react'
import store from './shopStore';

class Creator extends React.Component {

    increase = () => {
        const action = {
            type: "INCREMENT",
            qty: 1,
            name:this.props.prod.name,
            price: this.props.prod.price
        }
        store.dispatch(action);
    }
    decrease = () => {
        const action = {
            type: "DECREMENT",
            qty: 1,
            name:this.props.prod.name,
            price: this.props.prod.price
        }
        store.dispatch(action);
    }

    render() {
        return (
            <React.Fragment>
                <div className="card m-2">
                    <div className="card-body shadow-lg  bg-white rounded">
                        <h5 className="card-title">{this.props.prod.name}</h5>
                        <p className="card-text m-2 p-1">
                            <span className="text-info">Price: {this.props.prod.price}</span><br />
                            <span className="text-secondary">Description: {this.props.prod.desc}</span>
                        </p>
                        <button type="button" onClick={this.increase} className="btn btn-warning m-2">Add to Cart</button>
                        <button type="button" onClick={this.decrease} className="btn btn-danger m-2">Remove from Cart</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Creator;