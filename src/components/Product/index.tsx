import React from "react";
import { Box } from "@mui/system";
import { toBRL } from "../../utils/toBRL";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };

  handleShoppingCart: (id: number) => void;
};

export default function Product(props: ProductProps) {
  const { id, title, price, description, image, handleShoppingCart } =
    props;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          width: "230px",
          height: "310px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          border: "1px solid #ccc ",
          borderRadius: "8px",
          padding: "10px",
          boxShadow: " inset 29px -29px 58px #cccccc",
        }}
      >
        <Box
          sx={{
            maxWidth: "100px",
            maxHeight: "110px",
          }}
        >
          <Box
            sx={{ width: "100%", height: "100%", backgroundColor: "red" }}
            component="img"
            src={image}
          ></Box>
        </Box>

        <Box sx={{ fontSize: "18px", fontWeight: "bold" }}>{title}</Box>
        <Box
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "250px",
          }}
        >
          {description}
        </Box>
        <Box sx={{ fontSize: "23px" }}>{toBRL(price)}</Box>
        <Box>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#0609af", fontSize: "12px" }}
              onClick={() => handleShoppingCart(id)}
            >
              COMPRAR
            </Button>
          </Link>
        </Box>
        <Button
          variant="outlined"
          sx={{ fontSize: "12px" }}
          onClick={() => handleShoppingCart(id)}
        >
          Adicionar ao carrinho
        </Button>
      </Box>
    </Box>
  );
}
