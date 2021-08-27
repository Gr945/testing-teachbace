import React  from "react";
import './style/index.css'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {enterUserSagaAC} from './Redux/ActionCreators'

function Signin(props) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  

  const intranceUser = (event) => {
    const login = event.login;
    const password = event.password;

    dispatch(enterUserSagaAC(login, password));
    
  };
  return (
    <div className="signin animate__animated animate__flipInY">
      <form className='signForm'  onSubmit={handleSubmit(intranceUser)}>
        <div className="row mb-2">
          <label className="col-sm-2 col-form-label">Login</label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input
              {...register("login")}
              required
              name="login"
              type="string"
              className="form-control"
              id="inputLogin3"
            />
          </div>
        </div>
        <div className="row mb-2">
          <label className="col-sm-2 col-form-label">Password</label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input
              {...register("password")}
              required
              name="password"
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <button className="btn btn-primary animate__animated animate__lightSpeedInRight">
          вход
        </button>
      </form>
    </div>
  );
}

export default Signin;
