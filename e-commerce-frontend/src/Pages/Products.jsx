import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "../utils/api";
import ProductCard from "../Components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Grid>
  );
}

export default Products;
