import React from 'react';
import axios from 'axios';

class Addbook extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            price: null,
            desc: '',
            nameErr: '',
            priceErr: '',
            descErr: '',
            formValidName: false,
            formValidPrice: false,
            formValidDesc: false,
            successMessage: '',
            successMsg: '',
            error: ''
        }
    }
    displayName = (event) => {
        console.log(event.target.value)
        const name = event.target.value
        if (/^[A-Z]$/.test(name)) {
            this.setState({ name: name, nameErr: <p className="text-success">Name is valid</p>, formValidName: true })
        } else {
            this.setState({ name: name, nameErr: <p className="text-danger">Name must be a single capital letter!</p>, formValidName: false })
        }
    }
    displayPrice = (event) => {
        console.log(event.target.value)
        const price = event.target.value
        if (/^[0-9]+$/.test(price)) {
            this.setState({ price: price, priceErr: <p className="text-success">Price is valid</p>, formValidPrice: true })

        } else {
            this.setState({ price: price, priceErr: <p className="text-danger">Price must be >= 1</p>, formValidPrice: false })
        }
    }

    displayDesc = (event) => {
        console.log(event.target.value)
        const desc = event.target.value
        if (desc.length >= 0) {
            this.setState({ desc: desc, descErr: <p className="text-success">Description is valid</p>, formValidDesc: true })

        } else {
            this.setState({ desc: desc, descErr: <p className="text-danger">Description is in-valid</p>, formValidDesc: false })
        }
    }


    addProd = () => {
        var formJSON = {
            name: this.state.name,
            price: this.state.price,
            desc: this.state.desc
        };
        console.log(formJSON)
        axios
            .post("http://localhost:4000/prod/", formJSON)
            .then(response => {
                this.setState({ successMessage: "Data Inserted in DB", error: "" });
            })
            .catch(error => {
                this.setState({ error: "Data Insertion Failed!" });
            });

    };

    loginSuccess = (event) => {
        event.preventDefault();
        this.addProd()
        this.setState({ successMsg: "Inserted Successfully!" })
    }

    disabler() {
        if (this.state.formValidName && this.state.formValidPrice && this.state.formValidDesc) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row m-5 ">
                    <div className="col-md-7 shadow-lg border ">
                        <h4 className="title  text-center text-secondary">Edit DB Form</h4>
                        <form onSubmit={this.loginSuccess}>
                            <div className="form-group">
                                Alphabet Name: <input type="text" value={this.state.name} onChange={this.displayName} className="form-control" />
                                <div>
                                    {this.state.nameErr}
                                </div>
                            </div>
                            <div className="form-group">
                                Price: <input type="number" onChange={this.displayPrice} className="form-control" />
                                <div>
                                    {this.state.priceErr}
                                </div>
                            </div>

                            <div className="form-group">
                                Alphabet Description: <input onChange={this.displayDesc} className="form-control" />
                                <div>
                                    {this.state.descErr}
                                </div>
                            </div>

                            <div>
                                <button type="submit" disabled={!this.disabler()} className="btn btn-primary mt-2 form-group">Insert</button>
                            </div>
                            <div>
                                <p className="text-success form-group">{this.state.successMessage}<br />{this.state.successMsg}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addbook;