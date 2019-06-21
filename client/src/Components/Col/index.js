import React from "react";

// Col allows us to be able to set a column's "size" prop instead of using its className

const Col = props => {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return (
    <div className={size}>
      {props.children}
    </div>
  );
}

export default Col;