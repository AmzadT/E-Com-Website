import { Button, Box } from "@chakra-ui/react";
import axios from "axios";

const Checkout = () => {
  const handlePayment = async () => {
    const res = await axios.post("http://localhost:3005/api/payment");
    window.location.href = res.data.url;
  };

  return (
    <Box p={5}>
      <Button colorScheme="green" onClick={handlePayment}>Pay Now</Button>
    </Box>
  );
};

export default Checkout;
