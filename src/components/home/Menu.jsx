
import React, { useState } from "react";
import Popup from "reactjs-popup";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = ({ isOpen }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const addToCartHandler = (item) => {
    setSelectedItem(item);
  };

  const handlePopupClose = () => {
    setSelectedItem(null);
  };
 
  
  const menuStyle = {
    display: isOpen ? "flex" : "none",
    justifyContent: "space-around",
    alignItems: "center",
    padding:"20px",
  };

  return (
   
    <div style={menuStyle}>
      <MenuCard
        itemNum={1}
        burgerSrc={burger1}
        price={200}
        title="Cheese Burger"
        delay={0.1}
        onClick={() => addToCartHandler({ title: "Cheese Burger", price: 200 })}
      />
      <MenuCard
        itemNum={2}
        burgerSrc={burger2}
        price={250}
        title="Double Cheese Burger"
        delay={0.2}
        onClick={() => addToCartHandler({ title: "Double Cheese Burger", price: 250 })}
      />
      <MenuCard
        itemNum={3}
        burgerSrc={burger3}
        price={180}
        title="Veggie Burger"
        delay={0.3}
        onClick={() => addToCartHandler({ title: "Veggie Burger", price: 180 })}
      />

      {/* Pop-up message */}
      <Popup open={!!selectedItem} onClose={handlePopupClose}>
        <div style={{ color: "green", padding: "10px", textAlign: "center" }}>
          {selectedItem ? `${selectedItem.title} Added to Cart!` : ""}
        </div>
      </Popup>
    </div>
  );
};

export default Menu;

