import RestaurantList, { isInstock } from "./RestaurantList";

const RestaurantMenuAccordian = (props) => {
  const IsInstock=isInstock(RestaurantList);
  const { categories, showList, setControlIndex, setToggle } = props;
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
              <span className="mb-1 mx-1">{showList ? "⌄" : "͕"}</span>
            </div>
            {showList && (
              <div>
                {accordian.card.card.itemCards.map((item) => {
                  return  <div key={item.card.info.id}>{ item.card.info.inStock >=1 ? <IsInstock key={item.card.info.id} item={item}/> : <RestaurantList key={item.card.info.id} item={item}/>}</div>
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
export default RestaurantMenuAccordian;
