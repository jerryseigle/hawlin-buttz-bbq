import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  return <div>This Blog post ID: {params.id}</div>;
}
