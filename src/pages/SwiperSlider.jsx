"use client";

import { Box, useMediaQuery } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";

function StyledSwiper({ children }) {
  const matches = useMediaQuery("(max-width:1290px)");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: matches ? "center" : "flex-start",
        }}
      >
        <ArrowForwardIosIcon
          className="swiper-button-prev"
          style={{
            background: "transparent",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #fff",
            color: "#fff",
            textAlign: "center",
            padding: "7px",
            cursor: "pointer",
            position: "absolute",
            bottom: matches ? 20 : 90,
            left: matches ? "40%" : 40,
            rotate: "180deg",
          }}
        />
        <ArrowForwardIosIcon
          className="swiper-button-next"
          style={{
            background: "transparent",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginLeft: "10px",
            border: "1px solid #fff",
            color: "#fff",
            cursor: "pointer",
            padding: "7px",
            position: "absolute",
            bottom: matches ? 20 : 90,
            left: matches ? "50%" : 80,
          }}
        />
      </Box>
      <Swiper
        slidesPerView={matches ? 1.2 : 3}
        spaceBetween={5}
        // slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 250,
          disableOnInteraction: false,
        }}
        // loopFillGroupWithBlank={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {children}
      </Swiper>
    </>
  );
}

export default StyledSwiper;
