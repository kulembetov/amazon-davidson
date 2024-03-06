import React from "react";
import CustomButton from "@/components/shared/CustomButton";
import CustomBox from "@/components/shared/CustomBox";
import Typography from "@mui/material/Typography";
import CustomHR from "@/components/shared/CustomHR";
import ProductLinkText from "@/components/shared/ProductLinkText";
import Box from "@mui/material/Box";
import OrderTotal from "@/components/shared/OrderTotal";
import { COLORS } from "@/styles/colors";

const OrderSummary = ({
  subtotal,
  tax,
  shipping,
  total,
}: {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}) => {
  const summaryValues = [
    { title: `Subtotal (1 items)`, value: `$${subtotal.toFixed(2)}` },
    { title: `Shipping & handling`, value: `$${shipping.toFixed(2)}` },
    { title: `Total before tax`, value: `$${subtotal.toFixed(2)}` },
    {
      title: `Estimated tax to be collected`,
      value: `$${tax.toFixed(2)}`,
    },
  ];

  const renderFreeDeliveryText = () => {
    if (subtotal > 100) {
      return (
        <Typography sx={{ color: "green", textAlign: "center" }}>
          You got a free delivery!
        </Typography>
      );
    }
  };

  return (
    <CustomBox sx={{ width: "17vw", marginLeft: "2rem", height: "80.5vh" }}>
      <CustomButton onClick={() => console.log("clicked")}>
        Place Your Order
      </CustomButton>
      <Typography sx={{ textAlign: "center" }}>
        By placing order, you agree to Amazon&apos;s{" "}
        <ProductLinkText>privacy notice</ProductLinkText> and
        <ProductLinkText> conditions of use</ProductLinkText>.
      </Typography>
      <CustomHR />
      <Typography variant="h3" sx={{ margin: "1rem 0" }}>
        Order summary
      </Typography>
      {summaryValues.map((item) => {
        return (
          <React.Fragment key={item.title}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>{item.title}</Typography>
                {item.title === summaryValues[2].title &&
                  renderFreeDeliveryText()}
              </Box>
              <Typography>{item.value}</Typography>
            </Box>
            {item.title === summaryValues[1].title && <CustomHR />}
          </React.Fragment>
        );
      })}
      <CustomHR />
      <OrderTotal totalPrice={total} />
      <CustomHR />
      <Box
        sx={{
          backgroundColor: COLORS.lightGray,
          padding: "1rem",
          borderRadius: "3px",
        }}
      >
        <ProductLinkText>How are shipping costs calculated?</ProductLinkText>
        <Typography sx={{ marginTop: "1rem" }}>
          Prime shipping benefits have been applied to your order.
        </Typography>
      </Box>
    </CustomBox>
  );
};

export default OrderSummary;
