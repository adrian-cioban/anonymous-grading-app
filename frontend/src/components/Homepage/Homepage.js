import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./Homepage.css";

const userSelector = (state) => state.user.user;

const Homepage = () => {
  const [isHidden, setIsHidden] = useState(true);

  const user = useSelector(userSelector, shallowEqual);

  useEffect(() => {
    if (user.id !== 0) {
      setIsHidden(!isHidden);
    }
  }, [user]);

  return (
    <div className="containerHomepage">
      {!isHidden ? <h2>Salutare {user.prenume}!</h2> : <span></span>}
    </div>
  );
};

export default Homepage;
