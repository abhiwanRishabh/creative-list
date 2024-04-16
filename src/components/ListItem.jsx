
import { PropTypes } from "prop-types";

function ListItem({title,subTitle,backgroundColor}) {
  return (
    <div className="list-card" style={{backgroundColor : backgroundColor}}> 
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subTitle}</h3>
    </div>
  )
}

ListItem.propTypes = {
title : PropTypes.string,
subTitle : PropTypes.string
}

export default ListItem