import axios from "axios";
import { useState } from "react";

function Fees() {
  const total = 50000;
  const [paid, setPaid] = useState(20000);
  const pending = total - paid;

  const payNow = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { amount: pending }
      );

      const options = {
        key: "rzp_test_xxxxx",
        amount: data.amount,
        currency: "INR",
        order_id: data.id,
        handler: function () {
          alert("Payment Successful");
          setPaid(total);
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch {
      alert("Payment Failed");
    }
  };

  return (
    <div className="container">
      <h2>Fee Details</h2>

      <div className="card">
        <p>Total: ₹{total}</p>
        <p>Paid: ₹{paid}</p>
        <p>Pending: ₹{pending}</p>

        {pending > 0 && (
          <button onClick={payNow}>Pay Now</button>
        )}
      </div>
    </div>
  );
}

export default Fees;