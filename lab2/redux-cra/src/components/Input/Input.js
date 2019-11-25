import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: ___CSS_0___;
  border: 1px solid ___CSS_1___;
  border-radius: 4px;
  padding: 12px 15px;
  margin: 8px 0;
  outline: none;
  font-size: '1rem';
  transition: ___CSS_2___;

  &:focus {
    border: 1px solid ___CSS_3___;
    transition: ___CSS_4___;
  }
`;


class Input extends React.Component {

    state = {
        value: ""
    };

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    render() {
        this.handleChange = this.props.handleChange || this.handleChange;
        this.handleSubmit = this.props.handleSubmit;

        return (
            <StyledInput
                id={this.props.id}
                type={this.props.type}
                name={this.props.name}
                defaultValue={this.state.value}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                required={this.props.required}
                pattern={this.props.pattern}
                placeholder={this.props.placeholder}
            />
        );
    }
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
    required: PropTypes.bool,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func
};


export default Input