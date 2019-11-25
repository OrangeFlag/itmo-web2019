import styled from 'styled-components';

const RoundButtonWrapper = styled.button`
    border: 0;
    padding: 13px 16px;
    // height: 50px;
    // line-height: 50px;
    // border-radius: ___CSS_0___;
    // box-shadow: ___CSS_1___;
    outline: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    border-radius: 4px;

    &:hover {
        text-decoration: none;
        background: #cccccc;
        color: ___CSS_3___;
    }
   

    &:focus {
        text-decoration: none;
        outline: none;
    }
`;

export default RoundButtonWrapper