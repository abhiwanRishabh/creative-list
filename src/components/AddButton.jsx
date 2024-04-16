import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

function AddButton({ title, open = false, handleClick }) {

  return (
    <button
      style={{
        opacity: open ? ".5" : "1",
        pointerEvents: open ? "none" : "auto",
      }}
      onClick={handleClick}
      className="create-button"
    >
      <span>
        <svg
          width="18"
          height="18"
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"></path>
        </svg>
      </span>
      <span> {title}</span>
    </button>
  );
}

AddButton.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  setDrawerOpen: PropTypes.func,
};

export default AddButton;
