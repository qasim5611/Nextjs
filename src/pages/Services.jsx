"use client";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

export default function Services() {
  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:560px)");
  const serveData = [
    {
      topimage: matches1 ? 'url("/mworld.png")' : 'url("/world.png")',
      title: "TRAVEL SERVICES",
      description:
        "Worldwide flights - Airline Promotions - Business class travelers - Corporate travel.",
    },
    {
      topimage: matches1 ? 'url("/mtel.png")' : 'url("/tel.png")',
      title: "TOURS & HOLIDAYS",
      description:
        "Worldwide hotels, Individual Packages (FITs), Group Movement (GITs), Sports tours, Adventure tours, Safari tours, Medical tours, Education tours and Train journeys.",
    },
    {
      topimage: matches1 ? 'url("/mmoon.png")' : 'url("/moon.png")',
      title: "HAJJ & UMRAH",
      description:
        "Budget Packages, Economy Packages, Executive Packages, Umrah Visa Procedures, Places of Interest (Ziyarat)",
    },
    {
      topimage: matches1 ? 'url("/mamazon.png")' : 'url("/amazon.png")',
      title: "VISA SERVICES",
      description: "Electronic Visa (E-Visa), Normal Visa",
    },
    {
      topimage: matches1 ? 'url("/mcar.png")' : 'url("/car.png")',
      title: "CAR RENTAL SERVICES",
      description: " Huge Fleet, Chauffer Services, Car Tracking",
    },
    {
      topimage: matches1 ? 'url("/mradio.png")' : 'url("/radio.png")',
      title: "MICE(EVENT MANAGEMENT)",
      description: "Meetings, Incentives, Conferences, Exhibitions",
    },
  ];

  return (
    <>
      <Box
        sx={{
          background: "#3f83ba",
          py: 10,
          px: matches ? 0 : 10,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {serveData.map(({ topimage, title, description }, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  sx={{
                    background: topimage,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "100%",
                    height: "300px",
                    px: 2,
                  }}
                >
                  <Typography
                    pt={15}
                    sx={{
                      color: "#fff",
                      fontSize: "22px",
                      fontWeight: "400",
                      fontFamily: "Jost",
                      textAlign: "center",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    mt={2}
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Jost",
                      textAlign: "center",
                    }}
                  >
                    {description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
