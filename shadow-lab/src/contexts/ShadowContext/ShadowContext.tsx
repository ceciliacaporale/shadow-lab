import { createContext, useContext, useState } from 'react';

interface ShadowConfig {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
}

interface ShadowContextType {
  shadowConfig: ShadowConfig;
  setShadowConfig: React.Dispatch<React.SetStateAction<ShadowConfig>>;
}

const ShadowContext = createContext<ShadowContextType | undefined>(undefined);

export const ShadowProvider = ({ children }: { children: React.ReactNode }) => {
  const [shadowConfig, setShadowConfig] = useState<ShadowConfig>({
    offsetX: 7,
    offsetY: 6,
    blur: 0,
    spread: 0,
    color: '#000000',
    opacity: 100
  });

  return (
    <ShadowContext.Provider value={{ shadowConfig, setShadowConfig }}>
      {children}
    </ShadowContext.Provider>
  );
};

export const useShadow = () => {
  const context = useContext(ShadowContext);
  if (!context) {
    throw new Error('useShadow must be used within a ShadowProvider');
  }
  return context;
};