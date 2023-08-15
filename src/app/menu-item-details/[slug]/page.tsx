import BreadcrumbsNav from "@/app/_components/BreadCrumbsNav";
import MenuItemDetailsCard from "@/app/_components/MenuItemDetailsCard";
import SideOptions from "@/app/_components/SideOptions";
import { client } from "@/app/_lib/sanity";
import { MenuApiResponse, MenuItemType } from "@/app/_types/menuApiResponse";

// Used because we are export project as static page fetch data here
export function generateStaticParams() {
  return [{ slug: "demo" }];
}

async function getMenuItem(slug: string) {
  const query = `*[_type == "menuItem" && slug.current == "${slug}"][0]`;

  const data: MenuItemType = await client.fetch(query);
  return data;
}

async function getSideOptions() {
  const query = `*[_type == "category" && title == "Sides"]{
    _id,
    title,
    "menuItems": *[_type == "menuItem" && category._id == ^.categories._ref]
    }`;

  const data: MenuApiResponse[] = await client.fetch(query);
  return data;
}

interface MenuItemPageProps {
  params: { slug: string };
}

export default async function MenuItemPage({ params }: MenuItemPageProps) {
  const { slug } = params;

  const menuItem = await getMenuItem(slug);
  const sideOptions = await getSideOptions();

  return (
    <main className="flex min-h-screen flex-col ">
      <div>
        <BreadcrumbsNav breadCrumb={menuItem.title} />
        <MenuItemDetailsCard data={menuItem} />
        <div className="m-10">
          {sideOptions.map((category) => {
            if (category.title.toLowerCase() === "sides") {
              return <SideOptions data={category.menuItems} />;
            }
          })}
        </div>
      </div>
    </main>
  );
}
