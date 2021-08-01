import React from "react";

const RestroomInfo = (props) => {
  const { restroom } = props;
  return (
    <div>
      <h3>{restroom.name}</h3>
      <h4>{`${restroom.street}, ${restroom.city}, ${restroom.state}`}</h4>
    </div>
  );
};

export default RestroomInfo;
