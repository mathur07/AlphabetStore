import React from 'react'
import store from './shopStore';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            totalQty: 0,
            totalPrice: 0,
            cart: {
                cartContentStatus: false,
                cartContent: {}
            }

        }
    }

    objIterate = () => {

        for (var property in this.state.cart) {
            if (property === "cartContent") {
                console.log(this.state.cart[property])

                return (this.state.cart[property]);
            }


        }
    }

    cartData = () => {
        if (!this.state.cart.cartContentStatus) {
            return <p className="card-text m-2 p-1 text-center text-secondary display-4">Cart Empty!</p>;
        } else {

            const cartItems = this.objIterate();

            const petList = Object.entries(cartItems).map(([key, value]) => {
                return (

                    <div key={Math.floor(Math.random() * 10000) + 1} className="m-2 p-2  text-primary text-center"><h3>{key} : {value.toString()}</h3></div>
                );

            })
            return petList
        }
    }


    render() {

        store.subscribe(() => this.setState({ totalQty: store.getState().totalQty, totalPrice: store.getState().totalPrice, cart: store.getState().cart }));
        // console.log(this.state.cart.cartContent)

        return (
            <React.Fragment>
                <div className="card m-2 ">
                    <div className="card-body shadow-lg  bg-white rounded">
                        <h5 className="card-title">Welcome! User</h5><hr />

                        <div>{this.cartData()}</div>


                        <div className="card-footer m-2 p-1 ">
                            <span className="text-info">Total Quantity: {this.state.totalQty}</span><br />
                            <span className="text-success">Total Amount: {this.state.totalPrice}</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Cart;