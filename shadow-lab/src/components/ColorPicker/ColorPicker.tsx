import { Input } from './ColorPicker.styles';

interface ColorPickerProps {
  id: string;
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker = ({ id, color, onChange }: ColorPickerProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Input
        type="color"
        id={id}
        value={color}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>{color.toUpperCase()}</span>
    </div>
  );
};

export default ColorPicker;