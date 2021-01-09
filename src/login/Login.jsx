import React from 'react'
import { connect } from 'react-redux';
import './css/Login.css';
import {getPassport} from './actions';
import { useForm } from 'react-hook-form';

const Login = ({getPassport}) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        getPassport(data.username, data.password);
    }

    return (
        <div className="login-container">
            <form className="login" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="User" name="username" ref={register}/>
                <input type="password" placeholder="Password" name="password" ref={register}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


export default connect(undefined, {getPassport})(Login);