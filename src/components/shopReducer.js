var initialState = {
    totalQty: 0,
    totalPrice: 0,
    cart: {
        cartContentStatus: false,
        cartContent: {}
    }
}

function changeState(state = initialState, action) {
    const name = action.name;

    switch (action.type) {
        case "INCREMENT":
            var stateCopy1 = Object.assign({}, state);
            stateCopy1.totalQty = stateCopy1.totalQty + action.qty;
            stateCopy1.totalPrice = stateCopy1.totalPrice + Number(action.price);

            if (stateCopy1.cart.cartContent[name] !== undefined) {
                stateCopy1.cart.cartContent[name] = stateCopy1.cart.cartContent[name] + 1
            }
            else {
                stateCopy1.cart.cartContent[name] = 1;
            }

            stateCopy1.cart.cartContentStatus = true;

            return (stateCopy1);

        case "DECREMENT":
            // console.log("Action in reducer is ", action)
            var stateCopy2 = Object.assign({}, state);

            if (stateCopy2.cart.cartContent[name] !== 0 && stateCopy2.cart.cartContent[name] !== undefined) {

                stateCopy2.totalQty = stateCopy2.totalQty - action.qty;
                stateCopy2.totalPrice = stateCopy2.totalPrice - Number(action.price);

                // console.log("The product name is ", name)

                if (stateCopy2.cart.cartContent[name] !== undefined) {
                    stateCopy2.cart.cartContent[name] = stateCopy2.cart.cartContent[name] - 1
                    if (stateCopy2.cart.cartContent[name] === 0) {
                        delete stateCopy2.cart.cartContent[name];
                    }
                }
                else {
                    stateCopy2.cart.cartContent[name] = 0;

                }
            }
            if (stateCopy2.totalQty === 0) {
                stateCopy2.cart.cartContentStatus = false;
            }

            return (stateCopy2);
        default:
            return (state);
    }
}

export default changeState;