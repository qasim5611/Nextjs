"use client";
import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { flogo } from "@/components/SmallComponents/Images";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import ChatbotWidget from "./ChatbotWidget";

export default function Footer() {
  const [amount, setamount] = useState();

  return (
    <>
      <Box
        sx={{
          background: "#3f83ba",
          pt: 10,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={3}
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Box>
                <Image
                  src={flogo}
                  style={{ width: "250px", height: "80px" }}
                  alt=""
                />
                <Box
                  display="flex"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  mt={5}
                >
                  <LinkedInIcon
                    style={{
                      color: "#fff",
                      fontSize: "30px",
                      marginRight: "20px",
                      marginLeft: "20px",
                    }}
                  />
                  <FacebookIcon
                    style={{
                      color: "#fff",
                      fontSize: "30px",
                      marginRight: "20px",
                    }}
                  />
                  <TwitterIcon style={{ color: "#fff", fontSize: "30px" }} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "22px",
                    fontWeight: "500",
                    color: "#fff",
                  }}
                >
                  COMPANY
                </Typography>
                <Typography
                  mt={2}
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  mt={1}
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Terms & Conditions
                </Typography>
                <Typography
                  mt={1}
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Data Privacy{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "22px",
                    fontWeight: "500",
                    color: "#fff",
                  }}
                >
                  MORE LINKS
                </Typography>
                <Typography
                  mt={2}
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Flights
                </Typography>
                <Typography
                  mt={1}
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Hotels & holidays
                </Typography>
                <Typography
                  mt={1}
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Hajj Umrah
                </Typography>
                <Typography
                  mt={1}
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Internationol Top Up
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontSize: "22px",
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                Subscribe
              </Typography>
              <Box
                mt={1}
                sx={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "6px",
                  background: "#fff",
                  display: "flex",
                  pl: 2,
                  justifyContent: "space-between",
                }}
              >
                <input
                  value={amount}
                  onChange={(e) => setamount(e.target.value)}
                  type="text"
                  placeholder={"Get Updates"}
                  spellCheck="false"
                  style={{
                    backgroundColor: "transparent",
                    outline: "none",
                    border: "none",
                    fontSize: "15px",
                    fontFamily: "Jost",
                    fontWight: 700,
                    width: "100%",
                    color: "#000",
                    flexBasis: "100%",
                  }}
                />
                <Box
                  sx={{
                    background: "#B43715",
                    width: "60px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopRightRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <ArrowForwardIcon
                    style={{ color: "#fff", fontSize: "30px" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Typography
          pt={9}
          pb={1}
          sx={{
            fontFamily: "Jost",
            fontSize: "16px",
            fontWeight: "400",
            color: "#fff",
            textAlign: "center",
          }}
        >
          © 2020 Farina Travel & Tours. All rights reserved
        </Typography>
        <ChatbotWidget />
      </Box>
    </>
  );
}
