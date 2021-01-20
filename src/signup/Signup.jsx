import { Button } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const ContainerSignUp = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 12rem;
`;

const Input = styled.input`
    height: 1.5rem;
    width: 16rem;
    border: 1px solid rgb(63, 62, 62);

    ::placeholder {
        text-indent: .5rem;
    }
`;

const SignUp = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        await fetch("http://192.168.0.190:8000/login/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <>
            <ContainerSignUp>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" name="username" placeholder="username" ref={register}/>
                    <Input type="password" name="password" placeholder="password" ref={register}/>
                    <Input type="password" name="repeatpassword" placeholder="repeat password" ref={register}/>
                    <Input type="text" name="email" placeholder="e-mail" ref={register}/>
                    <Button variant="contained" color="primary" type="submit">Send</Button>
                </Form>
            </ContainerSignUp>
        </>
    );
}

export default SignUp;