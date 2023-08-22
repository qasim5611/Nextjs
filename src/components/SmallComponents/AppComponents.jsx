import { Alert, Box, Select, Snackbar, Tab, Icon } from "@mui/material";
import { Button } from "@mui/material";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
      key={"top center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#ffffff",
          background:
            "radial-gradient(145.24% 943.2% at 7.91% 50%, #1c85fe91 0%, #be4bc870 40%)",
          fontSize: "18px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textTransform: "capitalize",
          //   fontFamily: "Josefin Sans",
          borderRadius: "12px",
          width: props.width,
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background:
              "radial-gradient(145.24% 943.2% at 7.91% 50%, #be4bc870 0%, #1c85fe91 40%)",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}

export function StyledText({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "16px",
          fontFamily: "Jost",
          fontWeight: "400",
          cursor: "pointer",
          mr: props.mr,
          "&:hover": {
            color: "#B43715",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTabText({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#ffff",
          fontSize: "16px",
          fontFamily: "Jost",
          fontWeight: "400",
          cursor: "pointer",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTitle({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "40px",
          //   fontFamily: "Josefin Sans",
          fontWeight: "700",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTab({ children, ...props }) {
  return (
    <>
      <Tab
        {...props}
        sx={{
          color: "#fff",
          fontSize: "16px",
          fontFamily: "Jost",
          fontWeight: "400",
          width: props.width,
          textTransform: "none",
          "&.Mui-selected": {
            color: "#B43715",
            background: "#FFFFFF",
            borderRadius: "50px",
            filter: "none",
          },
        }}
        label={children}
      />
    </>
  );
}

export function StyledSelect({ children, ...props }) {
  return (
    <>
      <Select
        {...props}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#B43715",
              // marginTop: "10px",
              borderRadius: "10px",
              "& .MuiMenuItem-root": {
                // padding: "8px 16px",
                color: "#FF6D6D",
                fontFamily: "Jost",
                fontWeight: "400",
                forntSize: "20px",
              },
            },
          },
        }}
        sx={{
          background: "#B43715",
          color: "#FF6D6D",
          borderRadius: "8px",
          border: "1.21px solid #FFA1A1",
          height: "40px",
          // width: "100%",
          fontFamily: "Jost",
          fontWeight: "400",
          forntSize: "20px",
          padding: "25px 0",
          ".MuiSvgIcon-root ": {
            fill: "white !important",
            // fontSize: "30px",
            // paddingTop: "2px",
            // paddingRight: "20px",
          },
          ".MuiSelect-select": {
            display: "flex",
            alignItems: "center",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        {children}
      </Select>
    </>
  );
}

/// handle number field

export const handleKeyDown = (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
  }
};
export const handleWheel = (e) => {
  e.target.blur();
};
