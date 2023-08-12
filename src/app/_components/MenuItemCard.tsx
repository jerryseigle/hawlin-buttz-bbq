import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";

export default function MenuItemCard() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgb(242, 239, 234)" }}>
      <Link href="/menu-item-details/demo">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://thehappyfoodie.co.uk/wp-content/uploads/2021/08/tart-london-crispy-roast-chicken-c9d17bc8-70e6-4a70-a79c-6e5ecc3ec118_s900x0_c2145x1253_l0x504.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className="text-lg font-bold lg:text-2xl"
            >
              Lizard Smoother Chicken Bowl
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Starting at $11.99
              {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}
