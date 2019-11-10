import React from 'react'
import Cards from './cards';
import Cart from './cart';

class Controller extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid m-2">
                    <div className="row">
                        <div className="col-md-7">
                            <Cards />
                        </div>
                        <div className="col-md-5 fixed-top ml-auto mt-4 pt-5 ">
                            <Cart />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Controller