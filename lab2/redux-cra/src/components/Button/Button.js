import React  from 'react';
import ButtonWrapper from './ButtonWrapper.style';
import PropTypes from "prop-types";

export const Button = (props) => {
    return (
        <ButtonWrapper onClick={props.action}>
            {props.children}
        </ButtonWrapper>

    );
};

Button.propTypes = {
    action: PropTypes.func
};