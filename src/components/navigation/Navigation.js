import React, { useState } from "react";

const Navigation = () => {
  const [state, setstate] = useState();

  return (
    <div>
      <span>Home</span>
      <span>Movie</span>
    </div>
  );
};

export { Navigation };
