import React from "react";
import Header from '../header/header';
import Login from '../login/login';

const SignIn = () => {
  return (
    <React.Fragment>
      <div className="page page--gray page--login">
        <Header />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <Login />
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

SignIn.propTypes = {
};

export default SignIn;
