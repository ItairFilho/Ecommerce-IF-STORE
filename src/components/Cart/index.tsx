import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { toBRL } from "../../utils/toBRL";

type ShoppingcartProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;

  deleteItemOfShoppingCart: (id: number) => void;
};

export function Cart(props: ShoppingcartProps) {
  const { id, title, description, price, image, deleteItemOfShoppingCart } =
    props;
  return (
    <Box
      sx={{
        width: "800px",
        height: "120px",
        border: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-around",
        borderRadius: "6px",
        padding: "10px",
        alignItems: "center",
        marginBottom: "5px",
        gap: "5px",
        boxShadow: "-16px 6px 30px #cecece",
      }}
    >
      <Box
        sx={{
          width: "100px",
          height: "95 px",
          maxHeight: "80px",
          maxWidth: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={image}
          sx={{ width: "100%", height: "100%" }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "30px",
        }}
      >
        <Box sx={{ fontSize: "21px", fontWeight: "bold" }}>{title}</Box>
        <Typography
          sx={{
            fontSize: "12px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "400px",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "120px",
          paddingLeft: "20px",
          color: "#0632f7",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        {toBRL(price)}
      </Box>
      <DeleteIcon
        onClick={() => deleteItemOfShoppingCart(id)}
        sx={{ paddingLeft: "20px", cursor: "pointer" }}
      />
    </Box>
  );
}
