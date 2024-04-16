import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import AddButton from "./AddButton";
import { setDrawerOpen } from "../feature/listSlice";
import ColorCircle from "./ColorCircle";
import Box from "./Box";
import CreativeProgress from "./CreativeProgress";


function FilterContainer({ colors,filterByColor, filterByText }) {
  const { open, progressWidth, progressCount } = useSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setDrawerOpen(true));

  return (
    <div className="filter-container">
      <h1>Filter By</h1>
      <div className="filter-wrapper">
        <Box className="filter-by-color box">
          <>
            <p>Color</p>
            <div className="wrapper">
              {colors.map((color) => (
                <ColorCircle
                  key={color}
                  colorHex={color}
                  handleSelectColor={filterByColor}
                />
              ))}
            </div>
          </>
        </Box>
        <Box className="filter-by-input box">
          <>
            <p>Title/SubTitle</p>
            <input
              type="text"
              placeholder="search across title and subtitle"
              onChange={(e) => filterByText(e.target.value)}
            />
          </>
        </Box>
      </div>
      <div className="filter-wrapper-bottom">
        <CreativeProgress
          progressCount={progressCount}
          progressWidth={progressWidth}
        />
        <AddButton
          title="Add Creatives"
          open={open}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

FilterContainer.propTypes = {
  colors: PropTypes.array,
};

ColorCircle.propTypes = {
  colorHex: PropTypes.string,
};

export default FilterContainer;
