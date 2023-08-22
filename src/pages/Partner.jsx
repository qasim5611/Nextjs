import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
} from "@/components/SmallComponents/Images";
import { Box, Container } from "@mui/material";

export default function Partner() {
  return (
    <>
      <Box
        sx={{
          background: "#d9d9d9",
          py: 5,
        }}
      >
        <Marquee pauseOnHover={true}>
          <Image
            src={partner1}
            style={{ width: "200px", height: "55px", marginRight: "90px" }}
            alt=""
          />
          <Image
            src={partner2}
            style={{ width: "200px", height: "55px", marginRight: "110px" }}
            alt=""
          />
          <Image
            src={partner3}
            style={{ width: "88px", height: "55px", marginRight: "110px" }}
            alt=""
          />
          <Image
            src={partner4}
            style={{ width: "139px", height: "55px", marginRight: "110px" }}
            alt=""
          />
          <Image
            src={partner5}
            style={{ width: "194px", height: "49px", marginRight: "110px" }}
            alt=""
          />
        </Marquee>
      </Box>
    </>
  );
}
