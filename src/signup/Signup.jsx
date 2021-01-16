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

const Button = styled.button`
    display: inline-block;
    width: 8rem;
    padding: .5rem 0;
    background-color: rgb(47, 114, 202);
    border: none;
    color: white;
    border-radius: .3rem;
`;

const SignUp = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        const response = await fetch("http://localhost:8000/login/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const answer = await response.json();
        console.log(answer);
    }

    return (
        <>
            <ContainerSignUp>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" name="username" placeholder="username" ref={register}/>
                    <Input type="password" name="password" placeholder="password" ref={register}/>
                    <Input type="password" name="repeatpassword" placeholder="repeat password" ref={register}/>
                    <Input type="text" name="email" placeholder="e-mail" ref={register}/>
                    <Button>Send</Button>
                </Form>
            </ContainerSignUp>
        </>
    );
}

export default SignUp;