import { Box } from "@mui/system";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        backgroundColor: "#0609af",
        marginBottom: "5px",
        color: "#fff",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <ArrowBackIcon
          sx={{ fontSize: "30px", marginLeft: "50px", color: "#fff" }}
        />
      </Link>

      <Box
        sx={{
          fontSize: "35px",
          width: "151px",
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "80px",
        }}
      >
        IF STORE
      </Box>
      <Box>
        <Link to="/cart">
          <ShoppingCartCheckoutIcon
            sx={{ width: "200px", fontSize: "35px", color: "#fff" }}
          />
        </Link>
      </Box>
    </Box>
  );
}
