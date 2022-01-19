import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./AdaugaNote.css";

const userSelector = (state) => state.user.user;

const AdaugaNote = () => {
  const [isHidden, setIsHidden] = useState(true);

  const user = useSelector(userSelector, shallowEqual);

  useEffect(() => {
    if (user.id !== 0) {
      setIsHidden(!isHidden);
    }
  }, [user]);

  return (
    <div className="containerAdaugaNote">
      {!isHidden ? <h2>Practic aici ar trebui sa vada alte proiecte...nu?</h2> : <span></span>}
    </div>
  );
};

export default AdaugaNote;