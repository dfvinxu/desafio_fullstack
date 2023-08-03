import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IntermediatePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 300); //timeout
    return () => clearTimeout(timeout);
  }, [navigate]);

  return <div className="intermediate-page">{/* No content */}</div>;
};

export default IntermediatePage;
