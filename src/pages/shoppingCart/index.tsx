import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { Product } from "../../fake-store";
import { Cart } from "../../components/Cart";
import { toBRL } from "../../utils/toBRL";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Pay from "../../assets/pay.png";

function ShoppingCart() {
  const [itemCart, setItemCart] = useState<Product[]>([]);
  useEffect(() => {
    const itemLocalstorage = JSON.parse(
      localStorage.getItem("productId") || "[]"
    );
    setItemCart(itemLocalstorage);
  }, []);

  const sumItem = itemCart
    .map((item) => item.price)
    .reduce((acc, current) => acc + current, 0);

  function deleteItem(id: number) {
    const delItem = itemCart.filter((item) => item.id !== id);
    localStorage.setItem("productId", JSON.stringify(delItem));
    setItemCart(delItem);
  }

  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Box
          width="900px"
          height="100vh"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            {itemCart.map((item) => (
              <Cart
                title={item.title}
                description={item.description}
                image={item.image}
                id={item.id}
                price={item.price}
                deleteItemOfShoppingCart={deleteItem}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderLeft: "2px solid #0609af",
          }}
        >
          <Box
            sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: "40px" }}
          >
            RESUMO DO CARRINHO:
          </Box>
          <Box
            sx={{ fontSize: "20px", fontWeight: "bold", marginBottom: "5px" }}
          >
            Valor total da compra:
          </Box>
          <Box
            sx={{
              backgroundColor: "#0609af",
              width: "155px",
              height: "60px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "20px",
            }}
          >
            {toBRL(sumItem)}
          </Box>
          <Box>
            <Box
              sx={{
                width: "300px",
                height: "65px",
                backgroundColor: "#0609af",
                borderRadius: "8px",
                marginTop: "60px",
                color: "#ffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              <Box>FINALIZAR PEDIDO</Box>
              <Box>
                <ShoppingCartIcon />{" "}
              </Box>
            </Box>
            <Box sx={{ marginTop: "30px" }}>
              <Box
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Aceitamos Cartões:
              </Box>
              <Box sx={{ width: "300px", height: "180px" }}>
                <Box
                  component="img"
                  src={Pay}
                  sx={{ width: "100%", height: "100%" }}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default ShoppingCart;
