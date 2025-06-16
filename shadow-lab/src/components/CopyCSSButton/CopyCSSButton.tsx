import { useShadow } from '../../contexts/ShadowContext/ShadowContext';
import { FiCopy } from 'react-icons/fi';
import { CopyButton, Tooltip } from './CopyCSSButton.styles';
import { useState } from 'react';

const CopyCSSButton = () => {
  const { shadowConfig } = useShadow();
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    const css = `box-shadow: ${shadowConfig.offsetX}px ${shadowConfig.offsetY}px ${shadowConfig.blur}px ${shadowConfig.spread}px ${hexToRgba(shadowConfig.color, shadowConfig.opacity)};`;
    
    navigator.clipboard.writeText(css)
      .then(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
      })
      .catch(err => {
        console.error('Falha ao copiar: ', err);
        setShowTooltip(false);
      });
  };

  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };

  return (
    <CopyButton onClick={copyToClipboard}>
      <Tooltip $visible={showTooltip}>CSS copied!</Tooltip>
      <FiCopy />
      Copy CSS
    </CopyButton>
  );
};

export default CopyCSSButton;