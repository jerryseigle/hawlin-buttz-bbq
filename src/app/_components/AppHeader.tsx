import React from "react";
import Image from "next/image";
import { ShoppingBasket } from "lucide-react";

const AppHeader: React.FC = () => {
  return (
    <header className="bg-[#212529] border-b border-white sm:h-[77px] lg:h-[91px]">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex items-center">
          <Image
            src="/path-to-your-logo.png"
            alt="Logo"
            width={190}
            height={57}
            className="sm:w-[166px] sm:h-[50px] lg:w-[190px] lg:h-[57px]"
          />
        </div>
        <div className="sm:hidden md:flex items-center space-x-4">
          <div className="flex flex-col font-medium text-white font-montserrat">
            <span style={{ fontSize: "12px" }}>1503 Kelly's.</span>
            <span style={{ fontSize: "12px" }}>Clove SC 78620</span>
            <span style={{ fontSize: "12px" }}>(704) 777-7777</span>
            <span style={{ fontSize: "12px" }}>2131@gmail.com</span>
          </div>
          <div className="border-l h-[48px]"></div>
          <ShoppingBasket className="text-white h-8 w-8" />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
