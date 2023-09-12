import RestaurantList from "./RestaurantList";

const RestaurantMenuAccordian = (props) => {
  const { categories,showList,setControlIndex,setToggle } = props;
  const toggleList = (index) => {
    setControlIndex(index);
    setToggle();
  };
  return (
    <>
      {categories?.map((accordian, index) => {
        return (
          <div key={index}>
            <div
              onClick={toggleList}
              className="text-lg flex justify-between font-bold rounded-lg m-2 p-2 hover:border border-b-black cursor-pointer bg-gray-100"
            >
              {accordian.card.card.title}({accordian.card.card.title.length})
              <span className="mb-1 mx-1">⌄</span>
            </div>
           {showList &&  <div>
              {accordian.card.card.itemCards.map((item) => {
                return <RestaurantList key={item.card.info.id} item={item} />;
              })}
            </div>}
          </div>
        );
      })}
    </>
  );
};
export default RestaurantMenuAccordian;
