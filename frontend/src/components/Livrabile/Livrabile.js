import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./Livrabile.css";

const userSelector = (state) => state.user.user;

const Livrabile = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [livrabil, setLivrabil] = useState("");
  const user = useSelector(userSelector, shallowEqual);

  useEffect(() => {
    if (user.id !== 0) {
      setIsHidden(!isHidden);
    }
  }, [user]);

  return (
    <div className="containerLivrabile">
      <div className="Link">
      <input
          className="LivrabileClass"
          placeholder="Link Livrabil"
          value={livrabil}
          onChange={(e) => {
            setLivrabil(e.target.value);
          }}

        />
      </div>
      
        <div className="btn">
        <button >Adauga</button>
        </div>
    </div>
  );
};

export default Livrabile;