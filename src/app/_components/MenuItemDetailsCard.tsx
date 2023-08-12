import React from "react";

const MenuItemDetailsCard = () => {
  return (
    <div className="bg-gray-100 w-full lg:flex">
      {/* Left Side: Image */}
      <div
        className="w-full lg:w-1/2 max-h-[372px] md:order-1 overflow-hidden lg:max-h-[388px]"
        style={{ backgroundColor: "rgb(242, 239, 234)" }}
      >
        <img
          className="w-full h-auto md:h-full object-cover object-center"
          src="https://thehappyfoodie.co.uk/wp-content/uploads/2021/08/tart-london-crispy-roast-chicken-c9d17bc8-70e6-4a70-a79c-6e5ecc3ec118_s900x0_c2145x1253_l0x504.jpg"
          alt="Product Image"
        />
      </div>

      {/* Right Side: Product Details */}
      <div
        className="p-10 md:order-2 lg:w-1/2"
        style={{ backgroundColor: "rgb(242, 239, 234)" }}
      >
        <h1 className="text-2xl font-bold mb-2">Product Title</h1>
        <p className="text-gray-600 mb-6">Starting price $11.99</p>
        <p className="text-gray-800">
          Down here we will add all of our product details of what is being
          sold. You can add any information here. Any information that you want
          to include about this food item can be place here Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed euismod nisl vel eleifend
          varius.
        </p>
      </div>
    </div>
  );
};

export default MenuItemDetailsCard;
