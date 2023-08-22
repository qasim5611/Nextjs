"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { box, lady } from "@/components/SmallComponents/Images";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { SwiperSlide } from "swiper/react";

const imageData = [lady, lady];
function SliderTwoSection() {
  return (
    <>
      <Box sx={{ backgroundColor: "#CBE8FF", py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} display="flex" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "400",
                  fontSize: "35px",
                }}
                // eslint-disable-next-line react/no-unescaped-entities
              >
                As a former managing director in a global consulting firm, I
                have traveled a lot.
              </Typography>
              <Box display="flex" alignItems="center" mt={3}>
                <Image
                  src={box}
                  style={{ width: "100px", height: "40px" }}
                  alt=""
                />
                <Typography
                  sx={{
                    ml: 2,
                    fontFamily: "Jost",
                    fontWeight: "400",
                    fontSize: "24px",
                  }}
                  // eslint-disable-next-line react/no-unescaped-entities
                >
                  Sherri Cronin
                </Typography>
              </Box>
              <Box
                mt={6}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <ArrowBackIosNewRoundedIcon
                  className="swiper-button-next"
                  sx={{
                    color: "#3f83ba",
                    background: "transparent",
                    borderRadius: "50%",
                    border: "2px solid #3f83ba",
                    padding: "15px",
                    fontSize: "50px",
                    marginLeft: "15px",
                    "&:hover": {
                      border: "none",
                      background: "#3f83ba",
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                />
                <ArrowForwardIosRoundedIcon
                  className="swiper-button-prev"
                  sx={{
                    color: "#3f83ba",
                    background: "transparent",
                    borderRadius: "50%",
                    border: "2px solid #3f83ba",
                    padding: "15px",
                    fontSize: "50px",
                    marginLeft: "15px",
                    "&:hover": {
                      border: "none",
                      background: "#3f83ba",
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Swiper
                slidesPerView={1}
                // spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
                // className="mySwiper"
              >
                {imageData.map((item, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={item}
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "#CBE8FF",
                      }}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default SliderTwoSection;
