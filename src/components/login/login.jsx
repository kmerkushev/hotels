import React, { useRef } from "react";
import { loginAsync } from "../../redux/auth/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(loginAsync({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <React.Fragment>
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input
              className="login__input form__input"
              autoComplete="on"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              ref={loginRef}
              data-testid="login"
            />
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input
              className="login__input form__input"
              type="password"
              autoComplete="on"
              name="password"
              placeholder="Password"
              required=""
              ref={passwordRef}
              data-testid="password"
            />
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Login;
