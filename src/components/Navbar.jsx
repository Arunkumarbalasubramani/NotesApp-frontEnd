import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
const Navigationbar = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <>
      <div className="nav-container">
        <h1 className="logo">NotoSphere</h1>
        <div className="additonal-actions">
          <div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
          <Tooltip title="Logout">
            <IconButton>
              <AccountCircle sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
          <Tooltip title={`Enable ${theme} Mode`}>
            <IconButton onClick={handleThemeToggle}>
              {theme === "light" ? (
                <DarkModeIcon sx={{ fontSize: 40 }} />
              ) : (
                <LightModeIcon sx={{ fontSize: 40 }} />
              )}
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Navigationbar;
