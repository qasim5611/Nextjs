"use client";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function Hajj() {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <>
      <Box
        sx={{
          mt: matches ? -25 : -45,
          pt: matches ? 30 : 63,
          pb: 10,
          backgroundImage: matches
            ? 'url("/hotelmbg.png")'
            : 'url("/hajjbg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          height: "100%",
          width: "100vw",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            sx={{
              fontFamily: "lora",
              fontWeight: "400",
              fontSize: { xs: "32px", md: "58px" },
              color: "#fff",
              textAlign: "center",
              mt: 17.6,
            }}
          >
            CONGRATULATIONS TO ALL OF YOU!
          </Typography>
          <Typography
            px={matches ? 0 : 6}
            py={4}
            sx={{
              fontFamily: "Jost",
              fontWeight: "400",
              fontSize: { xs: "18px", md: "20px" },
              color: "#fff",
              textAlign: "center",
              mb: 10,
            }}
          >
            For the ease and comfort of our valued clients we have created a
            separate page which brings cheapest packages for your Umrah & Hajj
            Travel. It makes happen to fulfill the requirements and wishes of
            all customers. We BT-Tours.com is a company touching the altitude of
            success and achievements just because of our aimed to be the BRAND.
            We are on the way to create most beneficial and affordable deals for
            Umrah & Hajj of our customers just to keep their blind trust on us.
            We not only brings on deals even we guide you all with helpful and
            informative articles for the support during your Umrah & Hajj
            Travel. We provide you online booking for your Umrah & Hajj by
            calling us, E-mail or via face-book 24/7. You can reserve your
            flights and seats before time which called advance reservation (it
            becomes a modern era trend), this opportunity help you in money and
            time saving. Yes, it’s true! The earlier you reserve your packages
            you will get cheapest fare. We provide you air tickets in economical
            fares, hotel stay, cab services and much more facilities while you
            on Umrah & Hajj Travel. We bring an exclusive page along trained
            staff members with the help of them you can choose the one of best
            package as per your budget and need. You can have leverages among
            the abundance of packages we offer, already mentioned on our pages,
            best Umrah deals in town, discounted packages, and our promotional
            stuff. We don’t focus only business class customer, our preference
            for both economy and elite class because we care for you as family.
            For more information please like our face book page and gets alerts
            for all new promotions or packages. Our sincerity and your trust is
            the key to mark us the best online travel company. You may contact
            us by using below mentioned numbers.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Hajj;
