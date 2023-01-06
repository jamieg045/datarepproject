import React from "react";
import DrinkItems from "./DrinkItems";

export class Drinks extends React.Component {
    render() {
        return this.props.drinks.map((drink) => {
            return <DrinkItems drink ={drink} key={drink.name}></DrinkItems>
        });
    }
}