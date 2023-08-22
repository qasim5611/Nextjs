"use client";
import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import {
  flight1,
  flight2,
  flight3,
  flight4,
  flight5,
  flight6,
  flight7,
  flight8,
  flight9,
  flight10,
  flight11,
  flight12,
} from "@/components/SmallComponents/Images";
import Image from "next/image";
import Partner from "../../pages/Partner";
import Footer from "@/pages/Footer";

const flightData = [
  {
    img: flight1,
    name: "PIA",
  },
  {
    img: flight2,
    name: "SkywAy",
  },
  {
    img: flight3,
    name: "Emirates Airline",
  },
  {
    img: flight4,
    name: "Air Blue",
  },
  {
    img: flight5,
    name: "AirBlue",
  },
  {
    img: flight6,
    name: "ETIHAD Airline",
  },
  {
    img: flight7,
    name: "JAWAN Air",
  },
  {
    img: flight8,
    name: "Mahan Air",
  },
  {
    img: flight9,
    name: "British Airways",
  },
  {
    img: flight10,
    name: "Alltala",
  },
  {
    img: flight11,
    name: "Turkish Airways",
  },
  {
    img: flight12,
    name: "Sudi Airways",
  },
];
function Flights() {
  const matches = useMediaQuery("(max-width:960px)");
  return (
    <>
      <Box
        sx={{
          mt: matches ? -25 : -45,
          pt: matches ? 10 : 40,
          backgroundImage: matches
            ? 'url("/mobilebg.png")'
            : 'url("/flightbg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          height: matches ? "1150px" : "100%",
          width: "100vw",
        }}
      >
        <Typography
          sx={{
            fontFamily: "lora",
            fontWeight: "400",
            fontSize: { xs: "22px", md: "42px" },
            color: "#fff",
            textAlign: "center",
            pt: 25,
          }}
        >
          AIR TICKETS TO ANYWHERE
        </Typography>
        <Box
          sx={{
            background: "#B43715",
          }}
        >
          <Container maxWidth="xl">
            <Grid container py={6}>
              {flightData.map(({ img, name }, i) => (
                <Grid
                  item
                  xs={12}
                  md={3}
                  key={i}
                  px={1}
                  mt={2}
                  sx={{
                    "&:hover": {
                      px: 0,
                      background: "#fff",
                      borderRadius: "20px",
                      transition: "2s",
                    },
                  }}
                >
                  <Image
                    style={{
                      width: matches ? "100%" : "100%",
                      height: "360px",
                    }}
                    src={img}
                    alt=""
                  />
                  <Typography
                    my={1}
                    sx={{
                      fontFamily: "lora",
                      fontWeight: "400",
                      fontSize: "32px",
                      color: "#B43715",
                      textAlign: "center",
                    }}
                  >
                    {name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Partner />
        <Footer />
      </Box>
    </>
  );
}

export default Flights;
