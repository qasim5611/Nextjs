"use client";
import Image from "next/image";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { email, logo, phone } from "@/components/SmallComponents/Images";
import React from "react";

function MainHeader() {
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <Box bgcolor="#ffffff">
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pt={1.5}
        >
          <Image
            style={{
              width: matches ? "100px" : "220px",
              height: matches ? "40px" : "70px",
            }}
            src={logo}
            alt=""
          />
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center" mr={{ xs: 1, sm: 5 }}>
              <Image
                style={{
                  width: matches ? "20px" : "40px",
                  height: matches ? "20px" : "40px",
                }}
                src={phone}
                alt=""
              />
              <Box ml={1}>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: "700",
                    color: "#000000",
                    fontSize: matches ? "12px" : "16px",
                  }}
                >
                  PHONE
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: "400",
                    color: "#DD5471",
                    fontSize: matches ? "12px" : "16px",
                  }}
                >
                  03248720361
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Image
                style={{
                  width: matches ? "20px" : "40px",
                  height: matches ? "20px" : "40px",
                }}
                src={email}
                alt=""
              />
              <Box ml={1}>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: "700",
                    color: "#000000",
                    fontSize: matches ? "12px" : "16px",
                  }}
                >
                  EMAIL
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: "400",
                    color: "#DD5471",
                    fontSize: matches ? "12px" : "16px",
                  }}
                >
                  major@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default MainHeader;
