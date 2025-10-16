import type { ReactElement } from 'react';
import './CustomButton.css';

interface Props {
  children: ReactElement;
  parentMethod: () => void;
}

interface ChildrenProps {
  children: ReactElement;
}

export const ChildrenButton = ({ children }: ChildrenProps) => {
  return <>{children}</>;
};

export const CustomButton = ({ children, parentMethod }: Props) => {
  return (
    <button
      className="button"
      onClick={parentMethod}
    >
      {children}
    </button>
  );
};
