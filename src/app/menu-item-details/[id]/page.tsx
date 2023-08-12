import BreadcrumbsNav from "@/app/_components/BreadCrumbsNav";
import ChoiceList from "@/app/_components/ChoiceList";
import MenuItemDetailsCard from "@/app/_components/MenuItemDetailsCard";
import Image from "next/image";

export default async function MenuItemDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <main className="flex min-h-screen flex-col ">
      <div>
        <BreadcrumbsNav breadCrumb="Demo here" />
        <MenuItemDetailsCard />
        <div className="m-10">
          <ChoiceList />
        </div>
      </div>
    </main>
  );
}

// Used because we are export project as static page fetch data here
export function generateStaticParams() {
  return [{ id: "demo" }];
}

// TODO: Create a data structure for the data you will need for this component
