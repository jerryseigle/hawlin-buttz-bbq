import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  return <div>This Blog post ID: {params.id}</div>;
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
