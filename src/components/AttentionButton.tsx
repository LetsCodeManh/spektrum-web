type props = {
  text: string;
  color: string;
  onClick?: () => void;
};

const AttentionButton = ({ text, onClick, color }: props) => {
  return (
    <button
      className="relative z-10 h-10 px-4 text-sm text-center text-black rounded-full hoverButton"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default AttentionButton;
