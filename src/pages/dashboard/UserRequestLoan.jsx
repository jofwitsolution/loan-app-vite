import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import styles from "../../styles/tailwind";
import apiClient from "../../services/api-client";
import { toast } from "react-toastify";
import FullPageLoader from "../../components/loaders/FullPageLoader";
import { useNavigate } from "react-router-dom";

const UserRequestLoan = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    amount: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.amount) {
      setError("Amount must be specified");
      return;
    }

    setLoading(true);
    try {
      const { data } = await apiClient.post("/users/request-loan", formData, {
        withCredentials: true,
      });
      toast.success(`Your request has been submitted`);
      navigate("/user/dashboard");
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
    <Dashboard>
      <div className="bg-white rounded shadow-md p-6 ">
        <h1 className="font-[700] text-[18px] md:text-[22px] text-center mb-4">
          Request for a Loan
        </h1>
        <form onSubmit={handleSend} className="max-w-[300px] mx-auto">
          <div className="text-center">
            {error && <p className="text-red-500 text-[12px] my-4">{error}</p>}
          </div>
          <div className="mb-2 no-spinners">
            <input
              type="number"
              placeholder="Amount"
              name="amount"
              id="amount"
              maxLength={10}
              className={`${styles.inputOne}`}
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              disabled={false}
              type="submit"
              className={`${styles.buttonOne}`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {loading && <FullPageLoader />}
    </Dashboard>
  );
};

export default UserRequestLoan;
