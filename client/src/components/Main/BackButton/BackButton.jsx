import GoBack from "../../../../public/figma_svg/go-back.svg";
import { useNavigate } from "react-router-dom";

const BackButton = ({ link, icon=<GoBack/> }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(link);
  };

  return (
    <>
      <button className="back-button" onClick={handleGoBack}>
        {icon}
      </button>
    </>
  );
};

export default BackButton;
