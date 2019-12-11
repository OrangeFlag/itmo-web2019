import React from 'react';
import PropTypes from "prop-types";
import RoundButtonWrapper from "./RoundButtonWrapper";

export const RoundButton = (props) => {
    return (
        <RoundButtonWrapper onClick={props.action} type={props.type || "button"}>
            {props.children}
        </RoundButtonWrapper>

    );
};

RoundButton.propTypes = {
    action: PropTypes.func,
    type: PropTypes.string
};