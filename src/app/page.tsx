import Image from "next/image";
import MenuTabNavbar from "./_components/MenuTabNavbar";
import SectionDivider from "./_components/MenuSectionTitle";
import MenuItemCard from "./_components/MenuItemCard";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between">
      <MenuTabNavbar />
      <SectionDivider title="Appetizers" />;
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
      </div>
    </main>
  );
}
