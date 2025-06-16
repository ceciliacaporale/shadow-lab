import { RangeWrapper, RangeLabel, StyledRange, RangeValue } from "./RangeInput.styles";

interface RangeInputProps {
  label: string;
  id: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  showValue?: boolean;
  pixel?: boolean;
}

const RangeInput = ({
  label,
  id,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  pixel = false,
  showValue = true
}: RangeInputProps) => {
  return (
    <RangeWrapper>
      <RangeLabel htmlFor={id}>{label}</RangeLabel>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <StyledRange
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        {showValue && <RangeValue>{value}</RangeValue>}
        {pixel && (
            <span className="pixel">px</span>
        )}
      </div>
    </RangeWrapper>
  );
};

export default RangeInput;