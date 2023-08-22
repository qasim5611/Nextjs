"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { StyledTab } from "@/components/SmallComponents/AppComponents";
import Image from "next/image";
import {
  karachi,
  multan,
  islamabad,
  lahore,
} from "@/components/SmallComponents/Images";
import SliderTwoSection from "./SliderTwoSection";

const flightData = [
  {
    img: karachi,
    name: "Karachi",
  },
  {
    img: multan,
    name: "Multan",
  },
  {
    img: islamabad,
    name: "Islamabad",
  },
  {
    img: lahore,
    name: "Lahore",
  },
];
function Hotels() {
  const matches = useMediaQuery("(max-width:960px)");
  const [value, setValue] = useState(0);
  const handleChange = (e, newVal) => {
    setValue(newVal);
  };

  return (
    <>
      <Box
        sx={{
          mt: matches ? -30 : -45,
          pt: matches ? 25 : 58,
          pb: 16,
          backgroundImage: matches
            ? 'url("/hotelmbg.png")'
            : 'url("/hajjbg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          // height: "1800px",
          height: "100%",
          width: "100vw",
        }}
      >
        <Container>
          <Typography
            sx={{
              fontFamily: "lora",
              fontWeight: "400",
              fontSize: { xs: "22px", md: "42px" },
              color: "#fff",
              textAlign: "center",
              mt: 20,
            }}
          >
            HOTEL OFFERS
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <Tabs
              variant="scrollable"
              scrollButtons={false}
              value={value}
              onChange={handleChange}
              sx={{
                backgroundColor: "#D95835",
                borderRadius: "50px",
                width: "fit-content",
                border: "1px solid #EF8787",
                px: 1,
              }}
              TabIndicatorProps={{
                style: { backgroundColor: "inherit" },
              }}
            >
              {["Pakistan", "India", "Saudia", "London", "Italy"].map(
                (info) => (
                  <StyledTab bg="" width="140px" key={info}>
                    {info}
                  </StyledTab>
                )
              )}
            </Tabs>
          </Box>
          <Grid container py={6} pb={5}>
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
                    borderRadius: "25px",
                    transition: "2s",
                  },
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "250px",
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
    </>
  );
}

export default Hotels;
