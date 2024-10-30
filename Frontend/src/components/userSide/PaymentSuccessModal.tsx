import React, { useEffect } from "react";
import { Modal, Button, Typography, Box, SvgIcon } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { Spacer } from "@nextui-org/react";
import {
  getAvailableSeats,
  getSingleWorkspace,
} from "../../services/userServices";
import { ISeat } from "../../@types/seat";
import { useNavigate } from "react-router-dom";

interface PaymentSuccessModalProps {
  visible: boolean;
  onClose: () => void;
  bookingDetails: {
    seatId: string;
    workspaceId: string;
    date: string;
    amount: number;
  };
  onSuccess: () => void;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({
  visible,
  onClose,
  bookingDetails,
}) => {
  const [seat, setSeat] = React.useState<ISeat>();
  const [workspace, setWorkspace] = React.useState<string>("");
  const navigate = useNavigate();

  const { seatId, workspaceId, date, amount } = bookingDetails;

  const fetchSeat = async () => {
    try {
      const response = await getAvailableSeats(workspaceId);

      const seats = response.data.data;

      const seatData = seats.filter((seat) => seat._id === seatId)[0];

      if (response.status === 200) {
        setSeat(seatData);
        ;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getWorkspace = async () => {
    try {
      const response = await getSingleWorkspace(workspaceId);
      setWorkspace(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };


const timeout = () => {
  setTimeout(() => {
   navigate("/user/home");
  }, 5000);

};

  useEffect(() => {
    fetchSeat();
    getWorkspace();
    timeout();
  }, []);

  return (
    <Modal
      open={visible}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          p: 4,
          background: "linear-gradient(135deg, #fcefe7 0%, #f3e7e1 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <SvgIcon
            component={FaCheckCircle}
            inheritViewBox
            fontSize="large"
            sx={{ color: "#28a745", fontSize: "3rem" }}
          />
          <Typography
            id="modal-title"
            variant="h5"
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            Booking Successful
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body1" sx={{ color: "#555" }}>
            Your booking for seat{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              {`Seat : ${seat?.seatNumber} - Table : ${seat?.tableNumber}`}
            </Typography>{" "}
            at workspace{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              {workspace?.buildingName}
            </Typography>{" "}
            on{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              {bookingDetails.date}
            </Typography>{" "}
            has been successful.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ff6f00", fontWeight: "bold" }}
          >
            Amount Paid: ₹ {bookingDetails.amount.toFixed(2)}
          </Typography>
        </Box>

        <Spacer />

        <p className="text-center text-red-500  text-sm mt-5">
          You will be redirected to the dashboard shortly.
        </p>

        <p className="text-center text-slate-500  text-xs mt-1">
          Check your email for more details or visit profile page
        </p>
      </Box>
    </Modal>
  );
};

export default PaymentSuccessModal;
