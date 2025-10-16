import type { ReactElement } from 'react';
import './CustomButton.css';
import { useGlobalContext } from '../../context/global.context';

interface Props {
  children: ReactElement;
  parentMethod: () => void;
}

interface ChildrenProps {
  children: ReactElement;
}

export const ChildrenButton = ({ children }: ChildrenProps) => {
  const { value } = useGlobalContext();
  return (
    <>
      {value}
      {children}
    </>
  );
};

export const CustomButton = ({ children, parentMethod }: Props) => {
  const { setValue } = useGlobalContext();
  const handleClick = () => {
    setValue(10);
    parentMethod();
  };

  return (
    <button
      className="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
