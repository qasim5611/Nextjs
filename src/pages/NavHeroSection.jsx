"use client";
import React, { ReactFragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Paper,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { logo } from "@/components/SmallComponents/Images";
import { StyledText } from "@/components/SmallComponents/AppComponents";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#ffffff !important",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

const navArray = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "FLIGHTS",
    link: "/flights",
  },
  {
    name: "HOTELS & HOLIDAYS",
    link: "/hotels",
  },
  {
    name: "HAJJ UMRAH",
    link: "/hajj-umrah",
  },
  {
    name: "Visa",
    link: "/visa",
  },
  {
    name: "INTERNATIONAL TOP UP",
    link: "/",
  },
];

export default function NavHeroSection() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const matches = useMediaQuery("(max-width:960px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="center" my={3}>
        <Image
          style={{
            width: "150px",
            height: "50px",
          }}
          src={logo}
          alt=""
        />
      </Box>
      <List>
        {navArray.map(({ name, link }, index) => (
          <ListItem
            button
            style={{
              justifyContent: "center",
            }}
            key={name}
          >
            <Link href={link}>
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#000",
                }}
                primary={name}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: 1,
            backgroundImage: 'url("/herobg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: { xs: "50px", md: "70px" },
            borderTopRightRadius: { xs: "50px", md: "70px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: matches ? "end" : "center",
          }}
        >
          <Box
            display="flex"
            justifyContent={matches ? "flex-end" : "center"}
            mt={3}
          >
            <Hidden mdDown>
              {navArray.map(({ name, link }, i) => (
                <React.Fragment key={name}>
                  <Link href={link}>
                    <StyledText mr={i === navArray.length - 1 ? 0 : 6}>
                      {name}
                    </StyledText>
                  </Link>
                </React.Fragment>
              ))}
            </Hidden>

            <Hidden mdUp>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    onClick={toggleDrawer(anchor, true)}
                    style={{ zIndex: 1 }}
                  >
                    <MenuIcon
                      style={{
                        fontSize: "38px",
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    ></MenuIcon>
                  </Button>
                  <Paper>
                    <SwipeableDrawer
                      classes={{ paper: classes.paper }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </Paper>
                </React.Fragment>
              ))}
            </Hidden>
          </Box>

          <Box mt={8} mb={25}>
            <Typography
              sx={{
                fontFamily: "lora",
                fontWeight: "400",
                fontSize: { xs: "30px", md: "65px" },
                color: "#B43715",
                textAlign: "center",
              }}
            >
              WELCOME TO
            </Typography>
            <Typography
              sx={{
                fontFamily: "lora",
                fontWeight: "500",
                fontSize: { xs: "50px", md: "100px" },
                color: "#B43715",
                textAlign: "center",
                lineHeight: { xs: "50px", md: "90px" },
              }}
            >
              Farina Travel & Tours
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
