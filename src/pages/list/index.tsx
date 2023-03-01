import { Grid, Box, Alert } from "@mui/material";
import Product from "../../components/Product";
import { Header } from "../../components/Header";
import { products } from "../../fake-store";
import { useState } from "react";

function List() {
  const [productList, setProductList] = useState(products);

  function addShoppingCart(id: number) {
    const getItem = localStorage.getItem("productId");
    let array = [];
    if (getItem !== null) {
      array = JSON.parse(getItem);
    }
    const cart = productList.find((item) => item.id === id);
    localStorage.setItem("productId", JSON.stringify([...array, cart]));
  }
  return (
    <Box>
      <Header />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid sx={{ width: "1035px" }} container gap={1}>
          {productList.map((item) => (
            <Grid key={item.id} item>
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                description={item.description}
                handleShoppingCart={addShoppingCart}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
export default List;
