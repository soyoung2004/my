

    import React, { useState } from "react";
    import "./home.css"; 
    
    export function Home() {
      const [activeContentIndex, setActiveContentIndex] = useState(0);
      const expenseDate = new Date(2023, 9, 13);
      const expenseTitle = "";
      const expenseAmount = 1;
    
      return (
        <div>
          <h1 className="Title">채이야 맛있겠다!</h1>

          <div className="Ditle">{expenseTitle}</div>
          <div className="Price"> 수량 : {expenseAmount}</div>
    
          <div>
            <button
              className={`button1 ${activeContentIndex === 0 ? "active" : ""}`}
              onClick={() => setActiveContentIndex(0)}
            >
              부러워
            </button>

            <div className="Date">{expenseDate.toISOString()}</div>
          </div>
        </div>
      );
    }
    
    export default Home;
    