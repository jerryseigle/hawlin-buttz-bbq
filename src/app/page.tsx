import Image from "next/image";
import MenuTabNavbar from "./_components/MenuTabNavbar";
import SectionDivider from "./_components/MenuSectionTitle";
import MenuItemCard from "./_components/MenuItemCard";

export default function Home() {
  return (
    <div>
      <MenuTabNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <SectionDivider divId="Appetizers" title="Appetizers" />;
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-2">
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
        </div>
        <SectionDivider divId="Appetizerss" title="Appetizers" />;
      </main>
    </div>
  );
}

// TODO: data structure example for this page
const data = [
  {
    sectionTitle: "",
    sectionId: "",
    id: "",
    title: "",
    startingPrice: "",
    imageUrl: "",
  },
];
