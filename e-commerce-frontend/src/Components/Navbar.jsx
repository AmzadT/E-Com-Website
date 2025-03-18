import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex align="center">
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
          E-Shop
        </Link>
        <Spacer />
        <Flex gap={4}>
          <Link as={RouterLink} to="/products">Products</Link>
          <Link as={RouterLink} to="/cart">Cart</Link>
          <Button colorScheme="teal">Login</Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
