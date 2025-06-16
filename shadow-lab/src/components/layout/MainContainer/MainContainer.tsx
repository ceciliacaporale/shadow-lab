import BrowserFrame from "../../BrowserFrame";
import ControlsPanel from "../../ControlsPanel";
import { MainContainerWrapper } from "./MainContainer.styles";
import { ShadowProvider } from "../../../contexts/ShadowContext/ShadowContext";

const MainContainer = () => {
    return (
        <ShadowProvider>
            <MainContainerWrapper>
                <ControlsPanel />
                <BrowserFrame />
            </MainContainerWrapper>
        </ShadowProvider>
    );
}

export default MainContainer;