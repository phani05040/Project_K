import axios from "axios";
import { useState } from "react";
import {
  FaMoneyBillWave,
  FaCheckCircle,
  FaWallet,
  FaCreditCard,
} from "react-icons/fa";
import "../App.css";

function Fees() {
  const total = 50000;
  const [paid, setPaid] = useState(20000);

  const pending = total - paid;

  const payNow = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        {
          amount: pending,
        }
      );

      const options = {
        key: "rzp_test_xxxxx",
        amount: data.amount,
        currency: "INR",
        order_id: data.id,

        handler: function () {
          alert("Payment Successful");
          setPaid(total);
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error(error);
      alert("Payment Failed");
    }
  };


  return (
    <div className="container">

      <div className="page-header">
        <h2>💳 Fee Payment</h2>
        <p>Check your hostel fee details and complete payment.</p>
      </div>


      {/* Fee Cards */}
      <div className="stats">

        <div className="stat-box">
          <FaMoneyBillWave className="fee-icon" />
          <h2>₹{total}</h2>
          <p>Total Fee</p>
        </div>


        <div className="stat-box">
          <FaCheckCircle className="fee-icon paid" />
          <h2>₹{paid}</h2>
          <p>Paid Amount</p>
        </div>


        <div className="stat-box">
          <FaWallet className="fee-icon due" />
          <h2>₹{pending}</h2>
          <p>Pending Amount</p>
        </div>

      </div>


      {/* Payment Section */}
      <div className="fee-card">

        <div className="payment-icon">
          <FaCreditCard />
        </div>


        <h3>Payment Status</h3>


        <div className="payment-details">

          <p>
            <span>Total Hostel Fee</span>
            <b>₹{total}</b>
          </p>


          <p>
            <span>Paid Amount</span>
            <b className="green">
              ₹{paid}
            </b>
          </p>


          <p>
            <span>Remaining Amount</span>
            <b className="red">
              ₹{pending}
            </b>
          </p>

        </div>


        {pending > 0 ? (
          <button
            className="btn pay-btn"
            onClick={payNow}
          >
            💳 Pay ₹{pending} Now
          </button>
        ) : (
          <div className="success-payment">
            ✅ All Fees Paid
          </div>
        )}

      </div>

    </div>
  );
}

export default Fees;