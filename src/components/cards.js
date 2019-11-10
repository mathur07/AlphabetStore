import React from 'react';
import Creator from './cardsmaker';
import axios from 'axios';


class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            prodList: null,
            error: ''
        }
        // this.fetchprod = this.fetchprod.bind(this);
    }

    componentDidMount() {
        this.fetchprod();
    }

    fetchprod() {
        axios
            .get("http://localhost:4000/prod")
            .then(response => {
                this.setState({
                    prodList: response.data,
                    error: ""
                });
            })
            .catch(error => {
                if (error.response) {
                    this.setState({ error: error.response.data.message });
                } else {
                    this.setState({ error: error.message });
                }
            });
    }

    render() {

        return (
            <React.Fragment>

                {this.state.prodList ? this.state.prodList.map((prod) => <Creator key={prod.id} prod={prod} />) : null}

            </React.Fragment>
        )
    }
}

export default Cards;