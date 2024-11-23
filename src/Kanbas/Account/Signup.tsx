import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Signup() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signup = async () => {
        const currentUser = await client.signup(credentials);
        dispatch(setCurrentUser(currentUser));
        navigate("/Kanbas/Account/Profile");
    };

    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input
                defaultValue={credentials.username}
                onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                }
                className="form-control mb-2"
                placeholder="username"
                id="wd-username"
            />
            <input
                defaultValue={credentials.password}
                onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                }
                className="form-control mb-2"
                placeholder="password"
                type="password"
                id="wd-password"
            /><br />
           <button
        onClick={signup}
        id="wd-signin-btn"
        className="btn btn-primary w-100"
      >
        {" "}
        Sign up{" "}
      </button><br />
            <Link id="wd-signin-link" to="/Kanbas/Account/Signin" >Sign in</Link>
        </div>
    );
}