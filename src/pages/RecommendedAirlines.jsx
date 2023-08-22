"use client";
import React from "react";

import { Box, Container, Typography } from "@mui/material";

import piaairlines from "../images/pia_airlines_logo.png";
import oman_airlines from "../images/oman_airlines_logo.png";
import mahan_airlines from "../images/mahan-airlines.png";
import alitalia_airlines from "../images/alitalia-airlines.png";
import british_airlines from "../images/british-airlines.png";
import brussels_airlines from "../images/brussels-airlines.png";
import emirates_airlines_logo from "../images/emirates_airlines_logo.png";

import Image from "next/image";

import Marquee from "react-fast-marquee";

const RecommendedAirlines = () => {
  return (
    <Box
      sx={{
        background: "#D9D9D9",
      }}
    >
      <Container maxWidth="xl">
        <Box>
          <Typography
            sx={{
              fontFamily: "Palatino Linotype",
              fontSize: { xs: "22px", md: "42px" },
              fontWeight: 400,
              textAlign: "center",
              py: 4,
            }}
          >
            Recommended Air lines
          </Typography>

          <Marquee>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
                p: 2,
              }}
            >
              <Image src={piaairlines} alt="piaairlines" />
              <Image src={oman_airlines} alt="oman_airlines" />
              <Image src={mahan_airlines} alt="mahan_airlines" />
              <Image src={alitalia_airlines} alt="alitalia_airlines" />
              <Image src={british_airlines} alt="british_airlines" />
              <Image src={brussels_airlines} alt="brussels_airlines" />
              <Image
                src={emirates_airlines_logo}
                alt="emirates_airlines_logo"
              />
            </Box>
          </Marquee>
        </Box>
      </Container>
    </Box>
  );
};

export default RecommendedAirlines;
