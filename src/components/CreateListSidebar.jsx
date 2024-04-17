import { useDispatch } from "react-redux";
import { createListItem, setDrawerOpen } from "../feature/listSlice";
import Input from "./input/Input";
import ColorCircle from "./ColorCircle";
import AddButton from "./AddButton";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const CloseIcon = () => {
  const dispatch = useDispatch();
  const handleCloseDrawer = () => dispatch(setDrawerOpen(false));
  return (
    <div className="close-icon">
      <p className="title">Creative Creation</p>
      <svg
        onClick={handleCloseDrawer}
        width="25"
        height="25"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
        <path d="m15 9-6 6"></path>
        <path d="m9 9 6 6"></path>
      </svg>
    </div>
  );
};

function CreateListSidebar({ open, colors }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    backgroundColor: "",
  });

  //   handle change input
  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  //   handleSelectColor
  const handleSelectColor = (color) => {
    setFormData((prev) => {
      return {
        ...prev,
        backgroundColor: color,
      };
    });
  };

  const create = () => {
    if (formData?.title === "" || formData?.subtitle === "" || formData?.backgroundColor === "") {
      toast.error("All fields are mandatory!");
      return;
    }

    // create list
    dispatch(createListItem(formData));

    // reset feild
    setFormData({
        title: "",
        subtitle: "",
        backgroundColor: "",
      })
  };

  return (
    <div
      className="drawer"
      style={{ transform: `translate(${open ? "0px" : "100%"})` }}
    >
      <CloseIcon />
      <form className="create-form">
        <Input
          label="Title"
          name="title"
          placeholderText="Enter Title..."
          onChange={handleChange}
          isRequired={true}
          value={formData.title}
        />
        <Input
          label="Subtitle"
          name="subtitle"
          placeholderText="Enter Subtitle..."
          onChange={handleChange}
          isRequired={true}
          value={formData.subtitle}
        />
        <div className="select-background">
          <p>Backgounr Color</p>
          <div className="select-background-color-container">
            {colors.map((color) => (
              <ColorCircle
                key={color}
                colorHex={color}
                handleSelectColor={handleSelectColor}
              />
            ))}
          </div>
        </div>
        <button type="button" className="form-submit-button" onClick={create}>
          Done
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default CreateListSidebar;
