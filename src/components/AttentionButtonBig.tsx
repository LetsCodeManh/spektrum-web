type props = {
  text: string;
  onClick?: () => void
};

const AttentionButtonBig = ({ text, onClick }: props) => {
  return (
    <button className="relative z-10 h-12 px-8 text-base font-medium text-center text-black rounded-full hoverButton" type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default AttentionButtonBig;
