import "./App.css";
import { useEffect, useState } from "react";
import CreateListSidebar from "./components/CreateListSidebar";
import FilterContainer from "./components/FilterContainer";
import ListItems from "./components/ListItems";
import { useSelector, useDispatch } from "react-redux";
import { getColorsService } from "./feature/api/colorService";
import { debounce } from "./utills/debounce";

function App() {
  const { lists, colors, open } = useSelector((state) => state.todo);
  const [filteredList, setFilteredList] = useState([]);
  const dispatch = useDispatch();

  // set lists
  useEffect(() => {
    setFilteredList(lists);
  }, [lists]);

  // fetch all colors
  useEffect(() => {
    dispatch(getColorsService());
  }, [dispatch]);

  // handle filter color by bg
  const filterByColor = (color) => {
    setFilteredList(lists.filter((list) => list.backgroundColor === color));
  };


 
  const textDebounce = debounce((text) => {
    setFilteredList(
      lists.filter((list) => {
        const regex = new RegExp(`^${text}`, "gi");
        return list.title.match(regex) || list.subtitle.match(regex);
      })
    );
  }, 1000);

  // handle filter color by bg
  const filterByText = (text) => textDebounce(text);



  return (
    <>
      <main>
        <div className="main-container">
          <FilterContainer
            colors={colors}
            filterByColor={filterByColor}
            filterByText={filterByText}
          />
          <ListItems items={filteredList} />
        </div>
        <CreateListSidebar open={open} colors={colors} />
      </main>
    </>
  );
}

export default App;
