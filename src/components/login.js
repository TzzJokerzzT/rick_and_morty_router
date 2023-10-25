import React from 'react';
import styles from './login.module.css';

const initialState = {
  user: 'admin@admin.com',
  password: 'admin',
};

const LoginPage = ({ email, setEmail, password, setPassword, setIsAut }) => {
  //userData
  const { user: userEmail, password: userPassword } = initialState;
  //handlerEvent
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.prevent.default;
  };
  const handlerClick = () => {
    userEmail === email && password === userPassword
      ? setIsAut(true)
      : alert('Incorrect Information');
  };
  return (
    <div className={styles.general_styles}>
      <main className={styles.login_container}>
        <section>
          <div>
            <h1 className={styles.main_text}>Login Page</h1>
          </div>
          <form className={styles.form_container} onSubmit={handlerSubmit}>
            <label>Email</label>
            <input
              className={styles.input_styles}
              type="email"
              required
              placeholder="Your email"
              onChange={handlerEmail}
            />
            <label>Password</label>
            <input
              className={styles.input_styles}
              type="password"
              required
              placeholder="Your password"
              onChange={handlerPassword}
            />
            <button onClick={handlerClick}>Login</button>
          </form>
        </section>
        <section>
          <div>
            <h2 className={styles.main_text}>User Information:</h2>
          </div>
          <div>
            <ul className={styles.list_style}>
              <li>Email: admin@admin.com</li>
              <li>Password: admin</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
