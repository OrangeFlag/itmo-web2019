import React from 'react'
import {Button} from "../Button/Button";
import Input from "../Input/Input";
import Container from "../Container/Container.style";

export class Favorites extends React.Component {

    constructor(props) {
        super(props);
        this.state = {inputTown: ""};
    }


    handleInputChange = e => {
        this.setState({inputTown: e.target.value})
    };

    handleBtnClick = e => {
        this.props.addFavoriteTown(this.state.inputTown)
    };

    render() {
        return (<Container>
            <p>Избранное</p>
            <Input id="new_town" type="text" name="favorite" placeholder="Добавить новый город" maxLength="100"
                   handleChange={this.handleInputChange}/>
            <Button action={this.handleBtnClick}>+</Button>
        </Container>)
    }
}