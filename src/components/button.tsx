

interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({onClick}) => {

  return (
    <button
      className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full m-6 "
      onClick={onClick}
    >
      Get the Tasks
    </button>
  );
} 




