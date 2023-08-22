"use client";

import React from "react";

import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

import guidetree from "../images/guidetree.png";
import guide1 from "../images/guide1.png";
import guide2 from "../images/guide2.png";
import guide3 from "../images/guide3.png";
import guide4 from "../images/guide4.png";

import Image from "next/image";

const DataforMd = [
  {
    title: "Plan your Travels",
    description:
      "From your doorstep to the hotel reception - plan each aspect of your journey with expert advice",
  },
  {
    title: "Plan your Travels",
    description:
      "With live fares from over 150 airlines 400,000 hotels and 3000 car service providers you can be sure to find your perfect trip",
  },
  {
    title: "Plan your Travels",
    description:
      "Book yourself some peace of mind for every step of your journey",
  },
  {
    title: "Plan your Travels",
    description:
      "Hold your flights and holidays with a deposit for flexible payment terms and travel management",
  },
];
const DataforXs = [
  {
    icon: guide1,
    title: "Plan your Travels",
    description:
      "From your doorstep to the hotel reception - plan each aspect of your journey with expert advice",
  },
  {
    icon: guide2,
    title: "Plan your Travels",
    description:
      "With live fares from over 150 airlines 400,000 hotels and 3000 car service providers you can be sure to find your perfect trip",
  },
  {
    icon: guide3,
    title: "Plan your Travels",
    description:
      "Book yourself some peace of mind for every step of your journey",
  },
  {
    icon: guide4,
    title: "Plan your Travels",
    description:
      "Hold your flights and holidays with a deposit for flexible payment terms and travel management",
  },
];

const TravelGuideandTips = () => {
  const matches = useMediaQuery("(max-width:960px)");
  const matches2 = useMediaQuery("(max-width:1100px)");

  return (
    <Box
      sx={{
        background: "#D78646",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <Typography
            sx={{
              fontFamily: "Palatino Linotype",
              fontSize: { xs: "22px", md: "42px" },
              fontWeight: 400,
              textAlign: "center",
              mb: 3,
            }}
          >
            Travel Guide and Tips
          </Typography>

          {/* Icon tree section */}

          <Box>
            {matches ? (
              <Grid container spacing={15}>
                {DataforXs.map(({ title, description, icon }, i) => {
                  return (
                    <Grid item xs={12} sm={6} key={i}>
                      <Box>
                        <Box textAlign="center">
                          <Image
                            src={icon}
                            alt="icon"
                            style={{
                              width: "100px",
                              height: "100px",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "Palatino Linotype",
                            fontSize: "24px",
                            fontWeight: 400,
                            textAlign: "center",
                            mb: 2,
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Jost",
                            fontSize: "18px",
                            fontWeight: 400,
                            textAlign: "center",
                            color: "#464646",
                          }}
                        >
                          {description}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              <>
                <Box textAlign="center">
                  <Image
                    src={guidetree}
                    alt="guidetree"
                    style={{
                      width: "93%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Grid container columnSpacing={matches2 ? 9 : 15}>
                  {DataforMd.map(({ title, description }, i) => {
                    return (
                      <Grid item md={3} key={i}>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "Palatino Linotype",
                              fontSize: "24px",
                              fontWeight: 400,
                              textAlign: "center",
                              mb: 2,
                            }}
                          >
                            {title}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Jost",
                              fontSize: "18px",
                              fontWeight: 400,
                              textAlign: "center",
                              color: "#464646",
                            }}
                          >
                            {description}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TravelGuideandTips;
