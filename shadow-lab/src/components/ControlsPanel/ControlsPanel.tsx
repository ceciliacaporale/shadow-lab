import { useShadow } from '../../contexts/ShadowContext/ShadowContext';
import ColorPicker from '../ColorPicker';
import RangeInput from '../RangeInput';
import { ControlsPanelWrapper, HeaderControls, ControlGroup } from './ControlsPanel.styles';

const ControlsPanel = () => {
    const { shadowConfig, setShadowConfig } = useShadow();

    const handleChange = (property: string, value: number | string) => {
        setShadowConfig(prev => ({
            ...prev,
            [property]: value
        }));
    };

    return (
        <ControlsPanelWrapper>
            <HeaderControls>s e t t i n g s</HeaderControls>
            <ControlGroup>
                <RangeInput
                    label="horizontal:"
                    id="offsetX"
                    min={-100}
                    max={100}
                    value={shadowConfig.offsetX}
                    onChange={(value) => handleChange('offsetX', value)}
                />
            </ControlGroup>
            
            <ControlGroup>
                <RangeInput
                    label="vertical:"
                    id="offsetY"
                    min={-100}
                    max={100}
                    value={shadowConfig.offsetY}
                    onChange={(value) => handleChange('offsetY', value)}
                />
            </ControlGroup>
            
            <ControlGroup>
                <RangeInput
                    label="blur"
                    id="blur"
                    min={0}
                    max={100}
                    value={shadowConfig.blur}
                    onChange={(value) => handleChange('blur', value)}
                />
            </ControlGroup>
            
            <ControlGroup>
                <RangeInput
                    label="spread"
                    id="spread"
                    min={0}
                    max={50}
                    value={shadowConfig.spread}
                    onChange={(value) => handleChange('spread', value)}
                />
            </ControlGroup>
            
            <ControlGroup>
                <RangeInput
                    label="opacity"
                    id="opacity"
                    min={0}
                    max={100}
                    value={shadowConfig.opacity}
                    onChange={(value) => handleChange('opacity', value)}
                />
            </ControlGroup>
            <ControlGroup>
                <label htmlFor="shadowColor">color</label>
                <ColorPicker
                    id="shadowColor"
                    color={shadowConfig.color}
                    onChange={(color) => handleChange('color', color)}
                />
                </ControlGroup>
        </ControlsPanelWrapper>
    )
};

export default ControlsPanel;