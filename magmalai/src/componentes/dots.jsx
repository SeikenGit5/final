import React from "react";

function Dots({ activeIndex, onClick, Slider }) {
    return <div className="all-dots">
        {Slider.map((slide, index) => (
            <span key={index} className= {`${activeIndex === index ? "dot active-dot" : "dot"}`}
            onClick={() => onClick(index)}
            ></span>
    ))}
    </div>;
}
export default Dots;