import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Box p={4}>
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        cart.map((item) => (
          <Box key={item._id} p={2} borderBottom="1px solid gray">
            <Text>{item.name} - ${item.price}</Text>
            <Button colorScheme="red" onClick={() => dispatch(removeFromCart(item._id))}>
              Remove
            </Button>
          </Box>
        ))
      )}
      <Button as={Link} to="/checkout" mt={4} colorScheme="green">
        Proceed to Checkout
      </Button>
    </Box>
  );
}

export default CartPage;
