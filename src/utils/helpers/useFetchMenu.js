import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";
const useFetchMenu = (restaurant_id) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + restaurant_id);
    const jsonData = await data.json();
    setMenu(jsonData?.data?.cards);
  };
  return menu;
};
export default useFetchMenu;
