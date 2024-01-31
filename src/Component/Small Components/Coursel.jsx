import React, { Children, useRef } from "react";

const Carousel = ({ children }) => {
  const boxRef = useRef(null);

  const btnPressPrev = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width / 2;
    }
  };

  const btnPressNext = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width / 2;
    }
  };

  return (
    <div className="product-carousel">
      <div className="product-container" ref={boxRef}>
        {children}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          onClick={btnPressPrev}
          style={{
            padding: "0",
            margin: "0 10px",
            fontSize: "20px",
            color: "white",
          }}
        >
          <i class="fa fa-toggle-left"></i>
        </div>
        <div
          onClick={btnPressNext}
          style={{
            padding: "0",
            margin: "0 10px",
            fontSize: "20px",
            color: "white",
          }}
        >
          <i class="fa fa-toggle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
