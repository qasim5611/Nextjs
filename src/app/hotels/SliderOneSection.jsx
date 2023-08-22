"use client";
import "./sliderone.css";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { carasolOne } from "@/components/SmallComponents/Images";
import Image from "next/image";

const images = [carasolOne, carasolOne, carasolOne, carasolOne, carasolOne];
function SliderOneSection() {
  const matches = useMediaQuery("(max-width:960px)");
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowDropright style={{ fill: "#B43715", fontSize: "35px" }} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowDropleft style={{ fill: "#B43715", fontSize: "35px" }} />
      </div>
    );
  };

  const [imgIndex, setImgIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: matches ? 1 : 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#D78646", py: 5 }}>
        <Container maxWidth="xl">
          <Typography
            sx={{
              fontFamily: "lora",
              fontWeight: "400",
              fontSize: "17px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Plan The
          </Typography>
          <Typography
            sx={{
              fontFamily: "lora",
              fontWeight: "400",
              fontSize: { xs: "22px", md: "42px" },
              color: "#fff",
              textAlign: "center",
            }}
          >
            Perfect Holiday
          </Typography>
          <Box my={10}>
            <Slider {...settings}>
              {images.map((img, idx) => (
                <div
                  key={img}
                  className={idx === imgIndex ? "slide activeSlide" : "slide"}
                >
                  <Image className="img" src={img} alt={idx} />
                </div>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default SliderOneSection;
