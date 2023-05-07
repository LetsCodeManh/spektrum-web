type props = {
  text: string;
  onClick?: () => void
};

const AttentionButtonForm = ({ text, onClick }: props) => {
  return (
    <button className="relative z-10 h-10 px-4 text-sm text-center text-black rounded-full hoverButton" type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default AttentionButtonForm;