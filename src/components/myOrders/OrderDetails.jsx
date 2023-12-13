// Write all the code here
import React from "react";

const details={
    textAlign:"center",
    padding:"20px",
}

const OrderDetails=()=>{
    return (
        <div>
        <div style={details}>
            <h1>ORDER DETAILS</h1>
            <h2>SHIPPING</h2>
            <p>Address side: 12th Baker street</p>
            <h2>CONTACT</h2>
            <p>Name Stuart</p>
            <p>Phone 2889999</p>
            <h2>STATUS</h2>
            <p>Order status: Processing</p>
            <p>Placed at 10 December,2023</p>
            <p>Delivered at 12 December, 2023</p>
            <h2>Payment</h2>
            <p>Payment Method:COD</p>
            <p>Reference number #920200101</p>
            <p>Paid at 12:45:00</p>
            <h2>AMOUNT</h2>
            <p>Items Total: 2100 INR</p>
            <p>shipping charges:200 INR</p>
            <p>tax: 213 INR</p>
            <p> Total Amount:2413 </p>

        </div>
        <div style={{padding:"20px"}}>
          <h2>Ordered items</h2>
            <div style={{backgroundColor:"lightgrey", margin:"10px"}}> <p>Cheese Burger  &nbsp;  (12x320)</p></div>
            <div style={{backgroundColor:"lightgrey",margin:"10px" }} ><p> Burger Fries &nbsp; (3x400)</p></div>
            <div style={{backgroundColor:"lightgrey", margin:"10px"}} ><p>Veg Cheese Burger &nbsp; (10x200)</p></div>
            <div style={{backgroundColor:"darkgrey", margin:"10px"}} ><p> Sub Total &nbsp; (2132) </p></div>
        </div>
        </div>
    )
};

export default OrderDetails;