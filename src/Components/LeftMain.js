import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputSubmit } from "../Slices/LoginSlice";

const LeftMain = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (target) => {
    setUser({ ...user, [target.target.name]: target.target.value });
  };

  const userState = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  return (
    <>
      <h4>Login Form</h4>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                onChange={(e) => handleChange(e)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(inputSubmit(user))}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LeftMain;
