import React, { useState } from "react";
import images from "../../constants/images";
import styles from "../../styles/tailwind";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRecover = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please, provide your email");
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
          Password Recovery
        </h1>
        <div>
          {error && (
            <p className="text-center text-red-600 text-[13px] mt-2 mb-1">
              {error}
            </p>
          )}
        </div>
        <p className="text-center mt-[20px] mb-2">
          Input your email address to reset password
        </p>
        <form onSubmit={handleRecover}>
          <input
            type="email"
            className={`${styles.inputOne}`}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="my-2">
            <button disabled={loading} className={`${styles.buttonOne}`}>
              {loading ? "Loading..." : "Recover Password"}
            </button>
          </div>
          <div className="mt-3 text-center">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
