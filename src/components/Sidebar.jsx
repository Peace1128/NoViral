import React, { useEffect, useRef } from "react";
import "../css/Sidebar.css";

const Sidebar = ({ thumbnail, onProductSelect, selectedProductId }) => {
  const sidebarRef = useRef(null);
  const selectedItemRef = useRef(null);

  useEffect(() => {
    if (selectedItemRef.current && sidebarRef.current) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const itemRect = selectedItemRef.current.getBoundingClientRect();

      const isHorizontalLayout = window.innerWidth <= 640;

      if (isHorizontalLayout) {
        if (
          itemRect.left < sidebarRect.left ||
          itemRect.right > sidebarRect.right
        ) {
          const scrollLeft =
            selectedItemRef.current.offsetLeft - sidebarRef.current.offsetLeft;
          sidebarRef.current.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
          });
        }
      } else {
        if (
          itemRect.top < sidebarRect.top ||
          itemRect.bottom > sidebarRect.bottom
        ) {
          const scrollTop =
            selectedItemRef.current.offsetTop - sidebarRef.current.offsetTop;
          sidebarRef.current.scrollTo({
            top: scrollTop,
            behavior: "smooth",
          });
        }
      }
    }
  }, [selectedProductId]);

  return (
    <div className="sidebar" ref={sidebarRef}>
      <div className="thumbnail-container">
        {thumbnail && thumbnail.length > 0 ? (
          thumbnail.map((item) => (
            <div
              key={item.id}
              className={`thumbnail-item ${
                selectedProductId === item.id ? "selected" : ""
              }`}
              onClick={() => onProductSelect(item.id)}
              ref={selectedProductId === item.id ? selectedItemRef : null}
            >
              <img src={item.thumbnail} alt={`Product ${item.id}`} />
            </div>
          ))
        ) : (
          <p>Loading thumbnails...</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
