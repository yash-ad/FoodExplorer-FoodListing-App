import { useDispatch } from "react-redux";
import { IMG_URL } from "../utilities/config";
import { addItem } from "../utilities/cartSlice";


const ItemsList = (props) => {
  const { items } = props;

  const dispatch = useDispatch();

  // Maintain a separate count for each item
  // const [itemCounts, setItemCounts] = useState({});

  const handleAddItem = (item) => {
    // const updatedCounts = { ...itemCounts };
    // updatedCounts[item.card.info.id] = (updatedCounts[item.card.info.id] || 0) + 1;
    // setItemCounts(updatedCounts);

    dispatch(addItem(item));
  };

  // const handleRemoveItem = (item) => {
  //   if (itemCounts[item.card.info.id] === 0 || !itemCounts[item.card.info.id]) {
  //     return;
  //   }

  //   const updatedCounts = { ...itemCounts };
  //   updatedCounts[item.card.info.id] = updatedCounts[item.card.info.id] - 1;
  //   setItemCounts(updatedCounts);

  //   dispatch(removeItem(item));
  // };

  return (
    <div>
      {items?.map((item) => (
        <div key={item.card.info.id} className="menu-card">
          <div className="menu-left">
            <h3 className="font-bold text-lg">{item.card.info.name}</h3>
            <p className="font-semibold">₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</p>
            <p>{item.card.info.description}</p>
          </div>
          <div className="menu-right">
            <img src={IMG_URL + item.card.info.imageId} alt="Item" />
            <div>
              {/* <button onClick={() => handleRemoveItem(item)}>-</button> */}
              {/* {itemCounts[item.card.info.id] === 0 ? "ADD" : itemCounts[item.card.info.id]} */}
              <button onClick={() => handleAddItem(item)} id="addBtn">Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
