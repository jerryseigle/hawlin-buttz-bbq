import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  return <div>This My Blog post ID: {params.id}</div>;
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
