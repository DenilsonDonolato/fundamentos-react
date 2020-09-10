import React from "react";

export default (props) => {
  let { min, max } = props;
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  const random = Math.floor(Math.random() * (max - min)) + min;
  return (
    <div>
      <p>
        Valor aleatório entre {props.min} e {props.max} é {random}
      </p>
    </div>
  );
};
