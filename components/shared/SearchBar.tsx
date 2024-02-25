"use client";
import React, { FormEvent, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { COLORS } from "@/styles/colors";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const searchProducts = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${query}/`);
  };
  return (
    <Paper
      component="form"
      sx={{ display: "flex", alignItems: "center", width: "80vw" }}
      onSubmit={searchProducts}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Amazon"
        inputProps={{ "aria-label": "search amazon" }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "0.625rem",
          backgroundColor: COLORS.paleOrange,
          borderRadius: "0 0.25rem 0.25rem 0",

          "&:hover": {
            backgroundColor: COLORS.orange,
          },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
