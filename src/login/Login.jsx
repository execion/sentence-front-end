import React from 'react'
import { connect } from 'react-redux';
import {getPassport} from './actions';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    line-height: 0;
`;

const Input = styled.input`
    ::placeholder {
        color: rgba(10,10,10,.9);
        text-indent: .2rem;
    }
`;

const Button = styled.button`
    display: inline-block;
    background-color: rgba(40,40,40,.9);
    border: none;
    width: 8rem;
    height: 2rem;
    color: rgba(240,240,240,.9);
    font-weight: 500;
    border-radius: .4rem;
`;

const Login = ({getPassport}) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        getPassport(data.username, data.password);
    }

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" placeholder="User" name="username" ref={register}/>
                <Input type="password" placeholder="Password" name="password" ref={register}/>
                <Button type="submit">Login</Button>
            </LoginForm>
        </LoginContainer>
    );
}


export default connect(undefined, {getPassport})(Login);