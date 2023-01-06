import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

class DrinkItems extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.drink.title}</h4>
                <p>{this.props.drink.price}</p>
                <img src={this.props.drink.imageURL} width="200" height="200"></img>
            </div>
        );
    }
}