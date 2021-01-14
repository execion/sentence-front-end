import React from 'react'
import { useForm } from 'react-hook-form';
import './css/Signup.css';

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
            <div className="container-signup">
                <form className="form-signup" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="username" placeholder="username" ref={register}/>
                    <input type="password" name="password" placeholder="password" ref={register}/>
                    <input type="password" name="repeatpassword" placeholder="repeat password" ref={register}/>
                    <input type="text" name="email" placeholder="e-mail" ref={register}/>
                    <button className="button-signup-form">Send</button>
                </form>
            </div>
        </>
    );
}

export default SignUp;