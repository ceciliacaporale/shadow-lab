import { Container } from "./PreviewBox.styles";

interface PreviewBoxProps {
  shadowConfig: {
    offsetX: number;
    offsetY: number;
    blur: number;
    spread: number;
    color: string;
    opacity: number;
  };
}

const PreviewBox = ({ shadowConfig }: PreviewBoxProps) => {
  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };

  const boxShadow = `${shadowConfig.offsetX}px ${shadowConfig.offsetY}px ${shadowConfig.blur}px ${shadowConfig.spread}px ${hexToRgba(shadowConfig.color, shadowConfig.opacity)}`;

  return <Container $boxShadow={boxShadow} />;
};

export default PreviewBox;