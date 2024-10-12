

const SquareButton = ({onSquareClick, value}) => {
    return (
        <button 
        className="w-20 h-20 border border-gray-400 text-4xl font-bold bg-white hover:bg-gray-100 transition-colors duration-200"
        onClick={onSquareClick}
        >
        {value}
        </button>
    );
};

export default SquareButton;