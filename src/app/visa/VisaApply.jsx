"use client";
import {
  Box,
  useMediaQuery,
  Container,
  Typography,
  Grid,
  MenuItem,
  FormLabel,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  StyledSelect,
  ToastNotify,
} from "@/components/SmallComponents/AppComponents";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const labelStyle = {
  color: "#ffffff",
  fontFamily: "Jost",
  fontWeight: "400",
  forntSize: "20px",
};

const MyIcon = (isOpen) => {
  return <>{isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</>;
};

const inputStyle = {
  mt: 1,
  background: "#B43715",
  borderRadius: "8px",

  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",

    "& fieldset": {
      border: "1.21px solid #FFA1A1",
    },
    "&:hover fieldset": {
      border: "1.21px solid #FFA1A1",
    },
    "&.Mui-focused fieldset": {
      border: "1.21px solid #FFA1A1",
    },
  },

  input: {
    "&::placeholder": { color: "#FF6D6D" },
    color: "#FF6D6D",
    fontFamily: "Jost",
    fontWeight: "400",
    padding: "14px",
  },
};
export default function VisaApply() {
  const matches = useMediaQuery("(max-width:960px)");
  const matchesTwo = useMediaQuery("(max-width:998px)");
  const matchesThree = useMediaQuery("(max-width:851px)");

  const [iconStateOne, setIconStateOne] = useState(false);
  const [iconStateTwo, setIconStateTwo] = useState(false);
  const [openContactForm, setContactForm] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  const [formInputData, setFormInputData] = useState({
    country: "",
    destination: "",
    fullName: "",
    mobileNo: "",
    email: "",
    visaType: "",
  });

  const showAlert = (message, severity = "error") => {
    setAlertState({
      open: true,
      message,
      severity,
    });
  };
  const handleFormChange = (e) => {
    setFormInputData({ ...formInputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e, status) => {
    try {
      e.preventDefault();
      if (!status) {
        if (!formInputData.country || !formInputData.destination) {
          return showAlert("Please Fill Form");
        }
        return setContactForm(true);
      }
      if (
        !formInputData.fullName ||
        !formInputData.mobileNo ||
        !formInputData.email ||
        !formInputData.visaType
      ) {
        return showAlert("Please Fill Form");
      }
      setAlertState({
        open: true,
        message: "Data Submit",
        severity: "success",
      });
      setFormInputData({
        country: "",
        destination: "",
        fullName: "",
        mobileNo: "",
        email: "",
        visaType: "",
      });
      setContactForm(false);
    } catch (error) {
      conosle.log(error);
    }
  };

  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Box
        sx={{
          mt: matches ? -25 : -45,
          pt: matches ? 10 : 63,
          pb: 28,
          backgroundImage: matches
            ? 'url("/hotelmbg.png")'
            : 'url("/visabg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          height: matchesThree && openContactForm ? "" : "100%",
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
              mt: 15,
            }}
          >
            Apply for UAE Visa
          </Typography>
          <Box my={5}>
            <Grid
              container
              columnSpacing={{ xs: 0, sm: 0, md: 3 }}
              rowSpacing={{ xs: 2, sm: 3, md: 0 }}
              my={2}
              component="form"
              sx={{ background: "#DA6646", py: 4 }}
              justifyContent="center"
              onSubmit={(e) => handleSubmit(e, openContactForm)}
            >
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: "600",
                    fontSize: "25px",
                    lineHeight: "36px",
                    color: "#fff",
                    textAlign: "center",
                    mb: { xs: 2, md: 4 },
                    px: 2,
                  }}
                >
                  {openContactForm
                    ? "Contact Details"
                    : " Simplify your Visa application!"}
                </Typography>
              </Grid>
              {openContactForm ? (
                <>
                  <Grid item xs={10} sm={7} md={2.2}>
                    <FormLabel htmlFor="fullName" sx={labelStyle}>
                      Full Name
                    </FormLabel>
                    <TextField
                      id="fullName"
                      name="fullName"
                      fullWidth
                      variant="outlined"
                      value={formInputData.fullName}
                      placeholder="Enter Name"
                      onChange={handleFormChange}
                      sx={inputStyle}
                    />
                  </Grid>
                  <Grid item xs={10} sm={7} md={2.2}>
                    <FormLabel htmlFor="mobileNo" sx={labelStyle}>
                      Mobile Number
                    </FormLabel>
                    <TextField
                      id="mobileNo"
                      name="mobileNo"
                      fullWidth
                      variant="outlined"
                      value={formInputData.mobileNo}
                      placeholder="Enter Mobile Number"
                      onChange={handleFormChange}
                      sx={inputStyle}
                    />
                  </Grid>
                  <Grid item xs={10} sm={7} md={2.2}>
                    <FormLabel htmlFor="email" sx={labelStyle}>
                      Email
                    </FormLabel>
                    <TextField
                      id="email"
                      name="email"
                      fullWidth
                      variant="outlined"
                      value={formInputData.email}
                      placeholder="Enter Email"
                      onChange={handleFormChange}
                      sx={inputStyle}
                    />
                  </Grid>
                  <Grid item xs={10} sm={7} md={2.2}>
                    <FormLabel htmlFor="visaType" sx={labelStyle}>
                      Visa Type
                    </FormLabel>
                    <Box mt={1}>
                      <StyledSelect
                        id="visaType"
                        name="visaType"
                        displayEmpty
                        fullWidth
                        value={formInputData.visaType}
                        IconComponent={() => MyIcon(iconStateOne)}
                        onOpen={() => setIconStateOne(true)}
                        onClose={() => setIconStateOne(false)}
                        onChange={handleFormChange}
                      >
                        <MenuItem value="" disabled sx={{ display: "none" }}>
                          Select Visa Type
                        </MenuItem>
                        {["Business", "Tourist visa", "Work permit"].map(
                          (name) => (
                            <MenuItem value={name.toLowerCase()} key={name}>
                              {name}
                            </MenuItem>
                          )
                        )}
                      </StyledSelect>
                    </Box>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={10} sm={7} md={4}>
                    <Box>
                      <FormLabel htmlFor="country" sx={labelStyle}>
                        Country
                      </FormLabel>
                      <Box mt={1}>
                        <StyledSelect
                          id="country"
                          name="country"
                          displayEmpty
                          fullWidth
                          value={formInputData.country}
                          IconComponent={() => MyIcon(iconStateOne)}
                          onOpen={() => setIconStateOne(true)}
                          onClose={() => setIconStateOne(false)}
                          onChange={handleFormChange}
                        >
                          <MenuItem value="" disabled sx={{ display: "none" }}>
                            Select Country
                          </MenuItem>
                          {["Pakistan", "London", "Bangkok"].map((name) => (
                            <MenuItem value={name.toLowerCase()} key={name}>
                              {name}
                            </MenuItem>
                          ))}
                        </StyledSelect>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={7} md={4}>
                    <FormLabel htmlFor="destination" sx={labelStyle}>
                      Destination
                    </FormLabel>
                    <Box mt={1}>
                      <StyledSelect
                        id="destination"
                        name="destination"
                        displayEmpty
                        fullWidth
                        value={formInputData.destination}
                        IconComponent={() => MyIcon(iconStateTwo)}
                        onOpen={() => setIconStateTwo(true)}
                        onClose={() => setIconStateTwo(false)}
                        onChange={handleFormChange}
                      >
                        <MenuItem value="" disabled sx={{ display: "none" }}>
                          Enter your Destination
                        </MenuItem>
                        {["Pakistan", "London", "Bangkok"].map((name) => (
                          <MenuItem value={name.toLowerCase()} key={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </StyledSelect>
                    </Box>
                  </Grid>
                </>
              )}
              <Grid
                item
                xs={12}
                sm={12}
                md={matchesTwo && openContactForm ? 12 : 2}
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", md: "flex-end" },
                  justifyContent: { xs: "center", md: "" },
                  my: matchesTwo && openContactForm ? 3 : 0.3,
                }}
              >
                <Button
                  type="submit"
                  sx={{
                    width: "201px",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    padding: "12.7px 0",
                    color: "#000000",
                    textTransform: "none",
                    fontFamily: "jost",
                    fontSize: "16px",
                    lineHeight: "23px",
                    "&:hover": {
                      background: "#FFFFFF",
                    },
                  }}
                  disableElevation
                >
                  {openContactForm ? "Talk our visa Expert" : "Search Flights"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
