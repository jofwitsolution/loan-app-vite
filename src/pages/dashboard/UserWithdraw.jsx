import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import styles from "../../styles/tailwind";
import apiClient from "../../services/api-client";
import { toast } from "react-toastify";
import FullPageLoader from "../../components/loaders/FullPageLoader";

const UserWithdraw = () => {
  const [formData, setFormData] = useState({
    withdrawalType: "",
    bank: "",
    accountNumber: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "accountNumber" && e.target.value.length > 10) {
      setFormData((prev) => ({
        ...prev,
        accountNumber: formData.accountNumber,
      }));
      return;
    }

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
      const { data } = await apiClient.post("/users/withdraw", formData, {
        withCredentials: true,
      });
      toast.success(`Withdrawal successful`);
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
      <div className="shadow-md p-6 ">
        <h1 className="font-[700] text-[18px] md:text-[22px] mb-4">
          Withdraw Fund
        </h1>
        <form onSubmit={handleSend} className="max-w-[300px]">
          <div className="text-center">
            {error && <p className="text-red-500 text-[12px] my-4">{error}</p>}
          </div>
          <div className="mb-2">
            <label
              htmlFor="withdrawalType"
              className="inline-block mb-1 font-[500]"
            >
              Withdraw to
            </label>{" "}
            <br />
            <select
              name="withdrawalType"
              id="withdrawalType"
              className={`${styles.inputOne}`}
              onChange={handleChange}
            >
              <option>Select type</option>
              <option value="yawoo">Yawoo</option>
              <option value="bank">Bank</option>
            </select>
          </div>
          <div className="mb-2">
            <select
              name="bank"
              id="bank"
              className={`${styles.inputOne}`}
              onChange={handleChange}
            >
              <option>Select bank</option>
              <option value="firstbank">First Bank NG</option>
              <option value="uba">United Bank for Africa</option>
              <option value="kuda">Kuda</option>
            </select>
          </div>
          <div className="mb-2 no-spinners">
            <input
              type="number"
              placeholder="Account number"
              name="accountNumber"
              id="accountNumber"
              maxLength={10}
              className={`${styles.inputOne}`}
              value={formData.accountNumber}
              onChange={handleChange}
            />
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
              Send
            </button>
          </div>
        </form>
      </div>
      {loading && <FullPageLoader />}
    </Dashboard>
  );
};

export default UserWithdraw;
