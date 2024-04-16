import { PropTypes } from "prop-types";
import ListItem from "./ListItem";

function ListItems({ items }) {
  // render list items with error handling
  const renderList = () => {
    if (items.length === 0) return <h3>There is no list item present</h3>;
    //  eturn list item
    return items.map((item) => {
      return (
        <ListItem
          key={item.color}
          title={item.title}
          subTitle={item.subtitle}
          backgroundColor={item.backgroundColor}
        />
      );
    });
  };

  return <div className="list-items-container">{renderList()}</div>;
}

ListItems.propTypes = {
  items: PropTypes.array,
};

export default ListItems;
