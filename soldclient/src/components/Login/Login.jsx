import "./Login.css";
const Login = (props) => {
  return (
    <>
      <div className="formUI">
        <form method="post" action="/login">
          <label for="floatingInput">Email address: </label>
          <div className="form__input email">
            <input name="email" type="email" placeholder="email@example.com" />
          </div>
          <label for="floatingInput">password</label>

          <div className="form__input password">
            <input name="password" type="password" placeholder="password" />
          </div>
        </form>
        {/* Dont have an account, signup forgot password */}
      </div>
    </>
  );
};
export default Login;
