"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  ToastNotify,
  handleKeyDown,
  handleWheel,
} from "@/components/SmallComponents/AppComponents";

const inputStyle = {
  mt: 1,
  background: "#CBE8FF",
  borderRadius: "12px",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "& fieldset": {
      border: "1px solid #9B9A9A",
    },
    "&:hover fieldset": {
      border: "1px solid #9B9A9A",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #9B9A9A",
    },
  },

  input: {
    color: "#747474",
    fontFamily: "Jost",
    fontWeight: "400",
  },
};
const labelStyle = {
  color: "#000000",
  fontFamily: "Jost",
  fontWeight: "400",
};

function Form() {
  const matches2 = useMediaQuery("(max-width:776px)");
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const [formInputData, setFormInputData] = useState({
    tripDetail: "",
    checkIn: "",
    checkOut: "",
    depart: "",
    return: "",
    travlers: "",
    class: "",
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !formInputData.tripDetail ||
      !formInputData.checkIn ||
      !formInputData.depart ||
      !formInputData.return ||
      !formInputData.travlers ||
      !formInputData.class
    ) {
      return showAlert("Please Fill Form");
    }
    const departDate = new Date(formInputData.depart);
    const returnDate = new Date(formInputData.return);
    const departUnixTimestamp = Math.floor(departDate.getTime() / 1000);
    const returnUnixTimestamp = Math.floor(returnDate.getTime() / 1000);
    formInputData.depart = departUnixTimestamp;
    formInputData.return = returnUnixTimestamp;
    setFormInputData({
      tripDetail: "",
      checkIn: "",
      checkOut: "",
      depart: "",
      return: "",
      travlers: "",
      class: "",
    });
  };
  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Box py={4} sx={{ backgroundColor: "#CBE8FF" }}>
        <Container>
          <Typography
            textAlign="center"
            sx={{
              marginBottom: "48px",
              fontSize: "30px",
              fontWeight: "400",
              fontFamily: "Lora",
            }}
          >
            Search{" "}
            <span
              style={{
                borderBottom: "5px solid #B43715",
                paddingBottom: "10px",
              }}
            >
              Cheap Flights
            </span>
          </Typography>
          <Box my={4}>
            <Grid
              container
              columnSpacing={{ xs: 4, sm: 9 }}
              component="form"
              justifyContent="center"
              onSubmit={handleSubmit}
            >
              <Grid item xs={12}>
                <Box mb={2}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="tripDetail"
                    value={formInputData.tripDetail}
                    onChange={handleFormChange}
                    sx={{
                      justifyContent: "center",
                      ".MuiFormControlLabel-label": {
                        fontFamily: "Jost",
                        fontWeight: "400",
                      },
                    }}
                  >
                    <FormControlLabel
                      value="oneWay"
                      control={<Radio />}
                      label="One Way"
                    />
                    <FormControlLabel
                      value="roundTrip"
                      control={<Radio />}
                      label="Round Trip"
                      sx={{
                        paddingLeft: {
                          xs: "0px !importatn",
                          sm: "50px !important",
                        },
                      }}
                    />
                    <FormControlLabel
                      value="multiTrip"
                      control={<Radio />}
                      label="Multi Trip"
                      sx={{
                        paddingLeft: {
                          xs: "0px !importatn",
                          sm: "50px !important",
                        },
                      }}
                    />
                  </RadioGroup>
                </Box>
              </Grid>
              <Grid item xs={12} sm={matches2 ? 12 : 6} md={5}>
                <Box my={2}>
                  {" "}
                  <FormLabel htmlFor="checkIn" sx={labelStyle}>
                    Check In
                  </FormLabel>
                  <TextField
                    id="checkIn"
                    name="checkIn"
                    fullWidth
                    variant="outlined"
                    value={formInputData.checkIn}
                    onChange={handleFormChange}
                    // onChange={(e) =>
                    //   setformInputData({ ...formInputData, firstName: e.target.value })
                    // }
                    sx={inputStyle}
                  />
                </Box>
                {matches2 ? (
                  <Box my={2}>
                    {" "}
                    <FormLabel htmlFor="checkOut" sx={labelStyle}>
                      Check Out
                    </FormLabel>
                    <TextField
                      id="checkOut"
                      name="checkOut"
                      fullWidth
                      variant="outlined"
                      value={formInputData.checkOut}
                      onChange={handleFormChange}
                      sx={inputStyle}
                    />
                  </Box>
                ) : (
                  <Box display="flex" justifyContent="space-between" my={2}>
                    <Box
                      sx={{
                        width: {
                          xs: "160px",
                          sm: "250px",
                          md: "180px",
                          lg: "200px",
                        },
                      }}
                    >
                      {" "}
                      <FormLabel htmlFor="depart" sx={labelStyle}>
                        Depart
                      </FormLabel>
                      <TextField
                        id="depart"
                        name="depart"
                        required
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={formInputData.depart}
                        onChange={handleFormChange}
                        sx={inputStyle}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: {
                          xs: "160px",
                          sm: "250px",
                          md: "180px",
                          lg: "200px",
                        },
                      }}
                    >
                      {" "}
                      <FormLabel htmlFor="return" sx={labelStyle}>
                        Return
                      </FormLabel>
                      <TextField
                        id="return"
                        name="return"
                        required
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={formInputData.return}
                        onChange={handleFormChange}
                        sx={inputStyle}
                      />
                    </Box>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} sm={matches2 ? 12 : 6} md={5}>
                {matches2 ? (
                  <Box display="flex" justifyContent="space-between" my={2}>
                    <Box
                      sx={{
                        width: {
                          xs: "160px",
                          sm: "250px",
                          md: "180px",
                          lg: "200px",
                        },
                      }}
                    >
                      {" "}
                      <FormLabel htmlFor="depart" sx={labelStyle}>
                        Depart
                      </FormLabel>
                      <TextField
                        id="depart"
                        name="depart"
                        required
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={formInputData.depart}
                        onChange={handleFormChange}
                        sx={inputStyle}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: {
                          xs: "160px",
                          sm: "250px",
                          md: "180px",
                          lg: "200px",
                        },
                      }}
                    >
                      {" "}
                      <FormLabel htmlFor="return" sx={labelStyle}>
                        Return
                      </FormLabel>
                      <TextField
                        id="return"
                        name="return"
                        required
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={formInputData.return}
                        onChange={handleFormChange}
                        sx={inputStyle}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box my={2}>
                    {" "}
                    <FormLabel htmlFor="checkOut" sx={labelStyle}>
                      Check Out
                    </FormLabel>
                    <TextField
                      id="checkOut"
                      name="checkOut"
                      fullWidth
                      variant="outlined"
                      value={formInputData.checkOut}
                      onChange={handleFormChange}
                      sx={inputStyle}
                    />
                  </Box>
                )}
                <Box display="flex" justifyContent="space-between" my={2}>
                  <Box
                    sx={{
                      width: {
                        xs: "160px",
                        sm: "250px",
                        md: "180px",
                        lg: "200px",
                      },
                    }}
                  >
                    {" "}
                    <FormLabel htmlFor="travlers" sx={labelStyle}>
                      Travlers
                    </FormLabel>
                    <TextField
                      id="travlers"
                      name="travlers"
                      required
                      type="Number"
                      placeholder="1"
                      onKeyDown={handleKeyDown}
                      onWheel={handleWheel}
                      fullWidth
                      variant="outlined"
                      value={formInputData.travlers}
                      onChange={handleFormChange}
                      sx={inputStyle}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xs: "160px",
                        sm: "250px",
                        md: "180px",
                        lg: "200px",
                      },
                    }}
                  >
                    {" "}
                    <FormLabel htmlFor="class" sx={labelStyle}>
                      Class
                    </FormLabel>
                    <TextField
                      id="class"
                      name="class"
                      required
                      type="text"
                      placeholder="Economy"
                      fullWidth
                      variant="outlined"
                      value={formInputData.class}
                      onChange={handleFormChange}
                      sx={inputStyle}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                    mt: 4,
                  }}
                >
                  <Button
                    type="submit"
                    sx={{
                      width: "180px",
                      borderRadius: "30px",
                      backgroundColor: "#B43715",
                      py: 1.5,
                      color: "#ffff",
                      textTransform: "none",
                      fontFamily: "Lora",
                      "&:hover": {
                        background: "#B43715",
                      },
                    }}
                    disableElevation
                  >
                    Search Flights
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Form;
