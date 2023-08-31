import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import styles from "../../styles/tailwind";

const UserWithdraw = () => {
  const [formData, setFormData] = useState({
    withdrawalType: "",
    bank: "",
    accountNumber: "",
    amount: "",
  });

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
  return (
    <Dashboard>
      <div className="shadow-md p-6 ">
        <h1 className="font-[700] text-[18px] mb-4">Withdraw Fund</h1>
        <form className="max-w-[300px]">
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
            >
              <option value="yawoo">Yawoo</option>
              <option value="bank">Bank</option>
            </select>
          </div>
          <div className="mb-2">
            <select name="bank" id="bank" className={`${styles.inputOne}`}>
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
              value={formData.accountNumber}
              className={`${styles.inputOne}`}
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
    </Dashboard>
  );
};

export default UserWithdraw;
