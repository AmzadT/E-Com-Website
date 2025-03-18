import { useEffect, useState } from "react";
import { Grid, Box, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice.js";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3005/api/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} p={5}>
      {products.map((product) => (
        <Box key={product._id} p={4} borderWidth="1px">
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
          <Button colorScheme="blue" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        </Box>
      ))}
    </Grid>
  );
};

export default Products;
