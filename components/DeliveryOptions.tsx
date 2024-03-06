import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { COLORS } from "@/styles/colors";

const DeliveryOptions = () => {
  const options = [
    { name: "Tomorrow morning", price: "$2.99" },
    { name: "Tomorrow afternoon", price: "FREE One Day Delivery" },
    { name: "Friday", price: "FREE Amazon Day Delivery" },
  ];
  return (
    <Box>
      <Typography sx={{ fontWeight: 700 }}>
        Choose your Prime delivery option:
      </Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {options.map((option) => {
          return (
            <React.Fragment key={option.name}>
              <FormControlLabel
                value={option.name}
                control={<Radio />}
                label={option.name}
                sx={{ color: COLORS.green }}
              />
              <Typography
                sx={{
                  marginLeft: "2rem",
                  lineHeight: 0.25,
                  marginBottom: "0.25rem",
                  textWrap: "nowrap",
                }}
              >
                {option.price}
              </Typography>
            </React.Fragment>
          );
        })}
      </RadioGroup>
    </Box>
  );
};

export default DeliveryOptions;
