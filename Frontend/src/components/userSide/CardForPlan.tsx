import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { fetchActivePlan } from "../../services/userServices";

const CardForPlan = ({ setIsSubscribeClicked }) => {
  const [activePlan, setActivePlan] = useState<any>(null);

  const getActivePlan = async () => {
    try {
      const response = await fetchActivePlan();
      console.log(response);

      // Fix the typo: use `statusCode` instead of `statusCose`
      if (response.status === 200) {
        setActivePlan(response.data.data);
      } else {
        toast.error("Failed to fetch active plan.");
      }
    } catch (error) {
      console.log("Error fetching active plan:", error);
      toast.error("An error occurred while fetching the plan.");
    }
  };

  useEffect(() => {
    getActivePlan();
  }, []);

  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          {/* Optional chaining to display fallback content */}
          <div className="title">Membership</div>
          <div className="price">
            {"\u20B9 "}
            {activePlan?.price || "N/A"}
          </div>
          <div className="description">
            Get access to exclusive discount offers on your bookings and more.
          </div>
        </div>
        <button onClick={() => setIsSubscribeClicked(true)}>
          SUBSCRIBE NOW
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 260px;
    padding: 20px 1px;
    margin: 10px 0;
    text-align: center;
    position: relative;
    cursor: pointer;
    box-shadow: 0 10px 15px -3px rgba(33, 150, 243, 0.4),
      0 4px 6px -4px rgba(33, 150, 243, 0.4);
    border-radius: 10px;
    background-color: #6b6ecc;
    background: linear-gradient(45deg, #04051dea 0%, #2b566e 100%);
  }

  .content {
    padding: 20px;
  }

  .content .price {
    color: white;
    font-weight: 800;
    font-size: 50px;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
  }

  .content .description {
    color: rgba(255, 255, 255, 0.6);
    margin-top: 10px;
    font-size: 14px;
  }

  .content .title {
    font-weight: 800;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.64);
    margin-top: 10px;
    font-size: 25px;
    letter-spacing: 1px;
  }

  button {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: none;
    outline: none;
    color: rgb(255 255 255);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    padding: 0.75rem 1.5rem;
    background-color: rgb(33 150 243);
    border-radius: 0.5rem;
    width: 90%;
    text-shadow: 0px 4px 18px #2c3442;
  }
`;

export default CardForPlan;
