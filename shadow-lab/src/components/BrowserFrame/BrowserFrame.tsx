import { FiX, FiMinus, FiSquare } from "react-icons/fi";
import PreviewBox from "../PreviewBox";
import { ContainerMain, HeaderControls, WindowButtons, WindowButton, ControlButton } from "./BrowserFrame.styles";
import Star from "../../assets/web.png";
import StarPink from "../../assets/web-pink.png";
import { useShadow } from "../../contexts/ShadowContext/ShadowContext";
import CopyCSSButton from "../CopyCSSButton";

const BrowserFrame = () => {
  const { shadowConfig } = useShadow();

  return (
    <ContainerMain>
      <HeaderControls>
        <WindowButtons>
          <WindowButton color="#FF7A9A"><FiX /></WindowButton>   
          <WindowButton color="#FFB70B"><FiMinus /></WindowButton>  
          <WindowButton color="#9AE888"><FiSquare /></WindowButton> 
          <p>p r e v i e w</p>
        </WindowButtons>
        <img src={Star} alt="Star Icon" className="star" width={30} height={30}/>
        <img src={StarPink} alt="Star Icon" className="star-pink" width={35} height={35}/>
      </HeaderControls>
      <PreviewBox shadowConfig={shadowConfig} />
      <ControlButton>
        <CopyCSSButton />
        </ControlButton>
    </ContainerMain>
  );
};

export default BrowserFrame;