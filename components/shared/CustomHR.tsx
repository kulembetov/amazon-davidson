import React from "react";
import Divider from "@mui/material/Divider";
import { COLORS } from "@/styles/colors";

const CustomHr = () => {
  return (
    <Divider
      sx={{ color: COLORS.lightGray, width: "100%", margin: "0.5rem 0" }}
    ></Divider>
  );
};

export default CustomHr;
