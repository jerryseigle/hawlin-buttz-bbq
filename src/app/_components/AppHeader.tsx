import { ShoppingBasket } from "lucide-react";
import React from "react";

const AppHeader: React.FC = () => {
  return (
    <header className="sticky bg-[#212529] border-b border-white sm:h-[77px] lg:h-[91px]">
      <div className="container mx-auto px-10 flex justify-center items-center h-full lg:justify-between max-w-none">
        <div className="flex items-center">
          <img
            src="https://placehold.co/190x57"
            alt="Logo"
            className="sm:w-[166px] sm:h-[50px] lg:w-[190px] lg:h-[57px]"
          />
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex flex-col font-medium text-white font-montserrat">
            <span style={{ fontSize: "12px" }}>1503 Kelly's Landing Dr.</span>
            <span style={{ fontSize: "12px" }}>Mount Holly NC 28120</span>
            <span style={{ fontSize: "12px" }}>(704) 622-1772</span>
            <span style={{ fontSize: "12px" }}>LMatthews2131@gmail.com</span>
          </div>
          <div className="border-l h-[48px]"></div>
          <ShoppingBasket className="text-white h-8 w-8" />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
