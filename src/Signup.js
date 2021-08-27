import React from 'react';
import './style/index.css'
import { useForm } from 'react-hook-form';
import { addUserSagaAC} from './Redux/ActionCreators'
import { useDispatch } from 'react-redux';

function Signup(props) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const addUser = (event) => {
    const login = event.login;
    const password = event.password;
    const email = event.email;
    dispatch(addUserSagaAC(login, password, email,));
    
  };
  return (
    <div>
       <div className="signin animate__animated animate__flipInY">
      <form className='signForm' onSubmit={handleSubmit(addUser)}>
        <div className="row mb-2">
          <label className="col-sm-2 col-form-label">Login</label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input
              {...register("login")}
              minLength='4'
              required
              name="login"
              type="string"
              className="form-control"
              id="inputLogin"
            />
          </div>
        </div>
        <div className="row mb-2">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              {...register("password")}
              minLength='6'
              required
              name="password"
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>
        <div className="row mb-2">
          <label className="col-sm-2 col-form-label">email</label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input
              {...register("email")}
              required
              name="email"
              type="email"
              className="form-control"
              id="inputEmail"
            />
          </div>
        </div>
        <button className="btn btn-primary animate__animated animate__lightSpeedInRight">
          регистрация
        </button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
