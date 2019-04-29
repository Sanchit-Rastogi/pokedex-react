import React, {Component} from 'react';
import "./Pokecard.css"

class Pokecard extends Component {
    render(){
        var id = this.props.id;
        let num = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
        var myImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + num(id) + ".png";
        return (
            <div className="Pokecard">
                <h2>{this.props.name}</h2>
                <img className="Pokecard-img" src={myImg} alt="pokemon"></img>
                <p>Type : {this.props.type}</p>
                <h4>EXP : {this.props.exp}</h4>
            </div>
        );
    }
}

export default Pokecard;