import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 8rem;
    height: 3rem;
    border-radius: .5rem;
`;

const Login = styled(Button)`
    border: 1px solid rgba(19, 93, 212, 0.836);
    color:  rgba(19, 93, 212, 0.836);
`;

const Signup = styled(Button)`
    color:  rgba(19, 93, 212, 0.836);
    border: none;
`;

const NoLogined = () => {
    return (
        <>
            <Login as={Link} to="/">Login</Login>
            <Signup as={Link} to="/signup">Sign-up</Signup>
        </>
    );
}

export default NoLogined;