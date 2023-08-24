import React, { useState } from "react";
import images from "../../constants/images";
import styles from "../../styles/tailwind";
import { Link, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("token"));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("Password fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
  };
  return (
    <div className="flex justify-center px-[20px]">
      <div className="sm:w-[400px] mt-[50px] md:mt-[80px]">
        <div className="w-full flex justify-center">
          <img src={images.yawoo} alt="Yawoo logo" />
        </div>
        <h1 className="text-center mt-[50px] text-[25px] md:text-[30px] font-bold">
          Password Reset
        </h1>
        <div>
          {error && (
            <p className="text-center text-red-600 text-[13px] mt-2 mb-1">
              {error}
            </p>
          )}
        </div>
        <p className="text-center mt-[20px] mb-2">Input your new password</p>
        <form onSubmit={handleReset}>
          <div className="mb-3">
            <input
              type="password"
              className={`${styles.inputOne}`}
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="">
            <input
              type="password"
              className={`${styles.inputOne}`}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="my-2">
            <button disabled={loading} className={`${styles.buttonOne}`}>
              {loading ? "Loading..." : "Reset Password"}
            </button>
          </div>
          <div className="mt-3 text-center">
            Reset link expired?{" "}
            <Link to="/user/forgot-password" className="underline">
              Get new link
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
