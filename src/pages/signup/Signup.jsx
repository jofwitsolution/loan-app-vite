import { useState } from "react";
import apiClient from "../../services/api-client";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/tailwind";
import amico from "../../assets/images/amico.png";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await apiClient.post("/auth/signup", formData);
      toast.success(data.msg);
      navigate("/login");
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.msg) {
        setError(error.response.data.msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center md:items-stretch md:flex-row md:h-[700px] md:w-[1000px] mx-auto my-[80px] md:shadow-md">
      <div className="w-[90%] md:w-[45%] bg-color-secondary relative">
        <img src={amico} alt="amico" className="mt-[100px]" />
        <div className="z-[2] absolute text-[25px] top-[30px] left-[30px] text-white font-bold">
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="w-[98%] md:w-[55%] px-[50px] py-[20px]">
        <h1 className="text-center mb-[40px] text-[28px] font-bold">Sign Up</h1>
        <div>
          {error && (
            <p className="text-center text-red-600 text-[13px] mb-4">{error}</p>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="inline-block mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Adetula"
              id="firstName"
              className={`${styles.inputOne}`}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="inline-block mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Adewale"
              id="lastName"
              className={`${styles.inputOne}`}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="inline-block mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="08098765678"
              id="phone"
              className={`${styles.inputOne}`}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="inline-block mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="adetula@gmail.com"
              id="email"
              className={`${styles.inputOne}`}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="inline-block mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="123456"
              id="password"
              className={`${styles.inputOne}`}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="mt-4">
            <button disabled={loading} className={`${styles.buttonOne}`}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
          <div className="mt-3 text-center">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
