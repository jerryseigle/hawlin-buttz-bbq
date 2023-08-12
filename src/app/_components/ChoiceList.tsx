const ChoiceList = () => {
  const choices = [
    {
      id: 1,
      name: "Name of Side 1",
      imageUrl:
        "https://www.lovefromtheoven.com/wp-content/uploads/2023/04/one-pot-mac-cheese-17.jpg",
    },
    {
      id: 2,
      name: "Name of Side 2",
      imageUrl:
        "https://www.foodandwine.com/thmb/guEUQEjXSlxMaT4GCU9DBL3vrrA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/make-perfect-cheese-sauce-with-sodium-citrate-FT-BLOG1120-3d21b11fddf74de28d29474f6fe29352.jpg",
    },
    {
      id: 3,
      name: "Name of Side 3",
      imageUrl:
        "https://www.foodandwine.com/thmb/guEUQEjXSlxMaT4GCU9DBL3vrrA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/make-perfect-cheese-sauce-with-sodium-citrate-FT-BLOG1120-3d21b11fddf74de28d29474f6fe29352.jpg",
    },
    {
      id: 4,
      name: "Name of Side 4",
      imageUrl:
        "https://www.foodandwine.com/thmb/guEUQEjXSlxMaT4GCU9DBL3vrrA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/make-perfect-cheese-sauce-with-sodium-citrate-FT-BLOG1120-3d21b11fddf74de28d29474f6fe29352.jpg",
    },
    {
      id: 5,
      name: "Name of Side 5",
      imageUrl:
        "https://www.foodandwine.com/thmb/guEUQEjXSlxMaT4GCU9DBL3vrrA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/make-perfect-cheese-sauce-with-sodium-citrate-FT-BLOG1120-3d21b11fddf74de28d29474f6fe29352.jpg",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="text-white bg-red-900 p-2 rounded-t-lg">
        <h1 className="text-left pl-4">Choice Side</h1>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {choices.map((choice) => (
          <li
            key={choice.id}
            className="flex items-center bg-white rounded-b-lg"
          >
            <div className="w-16 h-16 bg-white rounded-l-lg overflow-hidden">
              <img
                src={choice.imageUrl}
                alt={choice.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-800 ml-2">{choice.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChoiceList;
