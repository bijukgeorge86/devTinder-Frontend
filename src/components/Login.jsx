import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginForm, setIsLoginForm] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginSubmit = async () => {
        try {
            const res = await axios.post(
                BASE_URL + "/login",
                {
                    emailId,
                    password,
                },
                { withCredentials: true }
            );
            dispatch(addUser(res?.data));
            return navigate("/");
        } catch (error) {
            setError(error?.response?.data || "Something went Wrong..!!!");
        }
    };

    const handleSignUpSubmit = async () => {
        try {
            const res = await axios.post(
                BASE_URL + "/signup",
                { firstName, lastName, age, gender, emailId, password },
                { withCredentials: true }
            );
            dispatch(addUser(res?.data?.data));
            return navigate("/profile");
        } catch (error) {
            setError(error?.response?.data || "Something went Wrong..!!!");
        }
    };

    return (
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-6 justify-center">
                        {isLoginForm ? "Login" : "Sign Up"}
                    </h2>
                    <div>
                        {!isLoginForm && (
                            <>
                                {" "}
                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">
                                            First Name
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Please enter your first name"
                                        value={firstName}
                                        className="input input-bordered w-full max-w-xs"
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                    />
                                </label>
                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">
                                            Last Name
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Please enter your last name"
                                        value={lastName}
                                        className="input input-bordered w-full max-w-xs"
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    />
                                </label>
                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">
                                            Gender
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Please enter your gender"
                                        value={gender}
                                        className="input input-bordered w-full max-w-xs"
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                </label>
                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">Age</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Please enter your age"
                                        value={age}
                                        className="input input-bordered w-full max-w-xs"
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </label>{" "}
                            </>
                        )}
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Please enter your email"
                                value={emailId}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setEmailId(e.target.value)}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input
                                type="password"
                                placeholder="Please enter your password"
                                value={password}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center mt-6">
                        <button
                            className="btn btn-primary"
                            onClick={
                                isLoginForm
                                    ? handleLoginSubmit
                                    : handleSignUpSubmit
                            }
                        >
                            {isLoginForm ? "Login" : "Sign Up"}
                        </button>
                    </div>
                    <p
                        className="text-blue-500 m-auto cursor-pointer py-2"
                        onClick={() => setIsLoginForm((value) => !value)}
                    >
                        {isLoginForm
                            ? "New User? Signup here"
                            : "Existing User? Login here"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
