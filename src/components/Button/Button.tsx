import './Button.css';

interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: Props) => {
  return (
    <div className="container">
      <button
        className="button"
        onClick={parentMethod}
      >
        {label}
      </button>
    </div>
  );
};
