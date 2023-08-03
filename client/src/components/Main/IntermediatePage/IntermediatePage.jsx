import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IntermediatePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 500); //timeout
    return () => clearTimeout(timeout);
  }, [navigate]);

  return <section className="intermediate-page"></section>;
};

export default IntermediatePage;
