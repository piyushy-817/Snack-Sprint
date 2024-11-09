import { imageCdnLink } from "../../utilities/constants";

const MenuItemList = ({ itemData }) => {
  return (
    <div>
      {itemData.map((e) => {
       return <div className="text-left shadow-md rounded-lg shadow-gray-200 p-4 m-4  border-b-2 border-gray-300" key={e.card.info.id}>
          <span className="text-lg text-gray-800">{e.card.info.name}</span>
          <span className="p-4">- ₹{(e.card.info.defaultPrice ?? e.card.info.price) / 100}</span>
          <div className="text-xs">{e.card.info.description}</div>
          <img className="w-12" src={imageCdnLink + e.card.info.imageId} alt="Menu item" />
        </div>
      })}
    </div>
  );
};

export default MenuItemList;
