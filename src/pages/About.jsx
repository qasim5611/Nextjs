"use client";

import React from "react";

import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

import aboutimg from "../images/aboutimg.png";

import Image from "next/image";

const About = () => {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <Box
      sx={{
        mt: matches ? -25 : -45,
        pt: matches ? 18 : 63,
        backgroundImage: matches
          ? 'url("/mobilebg.png")'
          : 'url("/hajjbg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        // height: "1800px",
        height: "100%",
        width: "100vw",
      }}
    >
      <Container maxWidth="lg">
        <Box py={10}>
          <Typography
            sx={{
              fontFamily: "Palatino Linotype",
              fontSize: { xs: "22px", md: "59px" },
              fontWeight: 400,
              textAlign: "center",
              mb: { md: 10, xs: 5 },
              mt: { md: 0, xs: 10 },
              color: "#Fff",
            }}
          >
            {" "}
            <span
              style={{
                borderBottom: "5px solid #fff",
                paddingBottom: "10px",
              }}
            >
              About
            </span>{" "}
            Us
          </Typography>
          <Grid container spacing={5} display="flex" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontSize: { xs: "22px", md: "42px" },
                  fontWeight: 500,
                  textAlign: { md: "left", xs: "center" },
                  color: "white",
                  mb: 4,
                }}
              >
                Welcome Farina Travel & Tours
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "25px",
                  color: "white",
                  textAlign: { md: "left", xs: "center" },

                  mb: 4,
                }}
              >
                In 2008, primary the entity Buraq Travel and Tours was founded
                by Mr.Moazam Arshad and Muhammad Naeem. The flourishing Business
                progression and requirements turned this entity into a limited
                company with the name B.T. & TOURSSRL in 2018. It’s an
                accessible travel company, a Universal travel root spot where
                individuals are inspired and book flight which is flexible &
                with convenient travel options at the economic prices.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontSize: "20px",
                  fontWeight: 400,
                  textAlign: { md: "left", xs: "center" },
                  lineHeight: "25px",
                  color: "white",
                  mb: 4,
                }}
              >
                The flourishing Business progression and requirements turned
                this entity into a limited company with the name B.T. & TOURSSRL
                in 2018. It’s an accessible travel company, a Universal travel
                root spot where individuals are inspired and book flight which
                is flexible & with convenient travel options at the economic
                prices.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Image
                  src={aboutimg}
                  alt="aboutimg"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
