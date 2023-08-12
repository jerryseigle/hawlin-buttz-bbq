import BreadcrumbsNav from "@/app/_components/BreadCrumbsNav";
import ChoiceList from "@/app/_components/ChoiceList";
import MenuItemDetailsCard from "@/app/_components/MenuItemDetailsCard";
import Image from "next/image";

export default function MenuItemDetails() {
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

// TODO: Create a data structure for the data you will need for this component
