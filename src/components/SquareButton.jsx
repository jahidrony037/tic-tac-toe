const SquareButton = ({ onSquareClick, value }) => {
  return (
    <button
      className="w-20 h-20 border-2 border-purple-300 text-4xl font-bold bg-purple-100 hover:bg-purple-200 transition-colors duration-200 text-purple-800"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default SquareButton;
