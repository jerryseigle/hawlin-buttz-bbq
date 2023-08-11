import React from "react";
import Typography from "@mui/material/Typography";

interface SectionDividerProps {
  title: string;
}

const SectionDivider = (props: SectionDividerProps) => {
  return (
    <Typography
      variant="h1"
      sx={{
        textAlign: "center",
        padding: 4,
        fontSize: { xs: 28, md: 40 },
        fontWeight: "bold",
      }}
      component="h1"
    >
      {props.title}
    </Typography>
  );
};

export default SectionDivider;
