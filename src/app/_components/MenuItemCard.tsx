"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";

interface MenuItemCardProps {
  slug: string;
  title: string;
  price: number;
  image: string;
}

export default function MenuItemCard(props: MenuItemCardProps) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgb(242, 239, 234)" }}>
      <Link href={`/menu-item-details/${props.slug}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            // image="https://thehappyfoodie.co.uk/wp-content/uploads/2021/08/tart-london-crispy-roast-chicken-c9d17bc8-70e6-4a70-a79c-6e5ecc3ec118_s900x0_c2145x1253_l0x504.jpg"
            image={props.image}
            alt={props.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className="text-lg font-bold lg:text-2xl"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Starting at $${props.price}`}
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
