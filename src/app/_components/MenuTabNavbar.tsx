import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "next/link";

export default function ScrollableTabsButtonAuto() {
  const menuCategories = [
    "Legendary BBQ & Combos",
    "Side",
    "Deserts",
    "Drinks",
    "Bulk",
    "Lunch",
    "Salads",
    "BBQ",
    "Chicken",
    "Drinks Copy",
    "Bulk Copy",
    "Lunch Copy",
    "Salads Copy",
    "BBQ Copy",
    "Chicken Copy",
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
  };

  return (
    <Box sx={{ position: "sticky", bgcolor: "rgb(242, 239, 234)" }}>
      <Tabs
        // value={value}
        // onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: { sm: 64, lg: 80 },
        }}
      >
        {menuCategories.map((item) => (
          <>
            <Link href="/#tab1" passHref legacyBehavior scroll={false}>
              <Tab
                label={item}
                wrapped
                sx={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 208,
                  maxWidth: 208,
                  fontSize: { sm: 15, md: 18, lg: 18 },
                  textTransform: "uppercase",
                }}
              />
            </Link>

            <Divider variant="middle" orientation="vertical" flexItem />
          </>
        ))}
      </Tabs>
    </Box>
  );
}
