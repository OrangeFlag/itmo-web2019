import React from 'react'
import {Button} from "../Button/Button";
import Input from "../Input/Input";
import Container from "../Container/Container.style";
import PropTypes from "prop-types";

export class Favorites extends React.Component {

    constructor(props) {
        super(props);
        this.state = {inputTown: ""};
    }


    handleInputChange = e => {
        this.setState({inputTown: e.target.value})
    };

    handleSubmit = e => {
        if (this.state.inputTown !== "mainTown"){
            this.props.addFavoriteTown(this.state.inputTown.toLowerCase());
        }
        e.preventDefault();
    };

    render() {
        return (<Container>
            <p>Избранное</p>
            <form onSubmit={this.handleSubmit}>
                <Input id="new_town" type="text" name="favorite" placeholder="Добавить новый город" maxLength="100"
                       handleChange={this.handleInputChange}/>
                <Button type={"submit"}>+</Button>
            </form>
        </Container>)
    }
}

Favorites.propTypes = {
    addFavoriteTown: PropTypes.func,
};