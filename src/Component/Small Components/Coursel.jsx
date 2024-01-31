import React, { useRef } from "react";

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

  const handleScroll = (event) => {
    // Get the current scroll position
    const scrollLeft = event.target.scrollLeft;

    // Check if the scroll direction is towards the right
    if (scrollLeft > boxRef.current.scrollLeft) {
      btnPressNext();
    } else {
      btnPressPrev();
    }
  };

  return (
    <div className="product-carousel">
      <div className="product-container" ref={boxRef} onScroll={handleScroll}>
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
