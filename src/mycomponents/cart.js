import React , {Component} from 'react';
import { Drinks } from './drinks';

export class Cart extends React.Component {
        state = {
            drinks: [
                        {
                          "title": "Guinness",
                          "price": 5.50,
                          "imageURL": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Guinness-original-logo.svg/640px-Guinness-original-logo.svg.png",
                          "drinks": []
                        },
                        {
                           "title": "Smithwicks",
                           "price": 5.50,
                           "imageURL": "https://www.digitize.ie/wp-content/uploads/2021/01/Smithwicks.png",
                           "drinks": []
                        },
                        {
                            "title": "Heineken",
                            "price": 5.80,
                            "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Heineken_logo.svg/2560px-Heineken_logo.svg.png",
                            "drinks": []
                        }
                        ]
                };
                render() {
                    return (
                        <div className="App">
                            <h1>Cart</h1>
                            <Drinks drinks={this.state.drinks}></Drinks>
                        </div>
                    );
                }
        }