import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = ({ link }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(link);
  };

  return (
    <>
      <button className="back-button" onClick={handleGoBack}>
        <IoIosArrowBack />
      </button>
    </>
  );
};

export default BackButton;
