type Text = {
  text?: string;
};

const Text = ({ text }: Text) => {
  return (
    <p className="text-base font-normal opacity-70 md:text-lg">
      {text}
    </p>
  );
};

export default Text;
