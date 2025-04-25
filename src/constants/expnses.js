import { Entertainment, food, Housing, Other, Shopping, Transportation } from "../assets";

export const expenseCategories = [
    {
      category: "Housing",
      total: "250.00",
      change: "15%",
      changeType: "down",
      icon: Housing,
      items: [
        { name: "House Rent", amount: "230.00", date: "17 May 2023" },
        { name: "Parking", amount: "20.00", date: "17 May 2023" },
      ],
    },
    {
      category: "Food",
      total: "350.00",
      change: "08%",
      changeType: "up",
      icon: food,
      items: [
        { name: "Grocery", amount: "230.00", date: "17 May 2023" },
        { name: "Restaurant bill", amount: "120.00", date: "17 May 2023" },
      ],
    },
    {
      category: "Transportation",
      total: "50.00",
      change: "12%",
      changeType: "up",
      icon: Transportation,
      items: [
        { name: "Taxi Fare", amount: "30.00", date: "17 May 2023" },
        { name: "Metro Card bill", amount: "20.00", date: "17 May 2023" },
      ],
    },
    {
      category: "Entertainment",
      total: "80.00",
      change: "15%",
      changeType: "down",
      icon: Entertainment,
      items: [
        { name: "Movie ticket", amount: "30.00", date: "17 May 2023" },
        { name: "iTunes", amount: "50.00", date: "17 May 2023" },
      ],
    },
    {
      category: "Shopping",
      total: "420.00",
      change: "25%",
      changeType: "up",
      icon: Shopping,
      items: [
        { name: "Shirt", amount: "230.00", date: "17 May 2023" },
        { name: "Jeans", amount: "190.00", date: "17 May 2023" },
      ],
    },
    {
      category: "Others",
      total: "50.00",
      change: "23%",
      changeType: "up",
      icon: Other,
      items: [
        { name: "Donation", amount: "30.00", date: "17 May 2023" },
        { name: "Gift", amount: "20.00", date: "17 May 2023" },
      ],
    },
  ];
  