import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface SectionDividerProps {
  divId: string;
  title: string;
}

const SectionDivider = (props: SectionDividerProps) => {
  return (
    <Box id={props.divId} component={"div"} sx={{ padding: 4 }}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: { xs: 28, md: 40 },
          fontWeight: "bold",
        }}
        component="h1"
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export default SectionDivider;
