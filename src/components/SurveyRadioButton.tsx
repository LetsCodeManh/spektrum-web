interface OptionProps {
  image: string;
  text: string;
  value: string;
  selected: boolean;
  onClick: (value: string) => void;
}

const Option: React.FC<OptionProps> = ({
  image,
  text,
  value,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`flex md:flex-col cursor-pointer gap-4 items-center border shadow-2xl bg-white rounded-lg min-w-[200px] px-4 md:py-4 ${selected ? "selected" : ""}`}
      onClick={() => onClick(value)}
    >
      <img src={image} alt={text} className="object-cover w-16 aspect-square" />
      <p className="text">{text}</p>
    </div>
  );
};

interface RadioButtonProps {
  options: Array<{
    image: string;
    text: string;
    value: string;
  }>;
  selectedValue: string;
  onChange: (value: string) => void;
}

const SurveyRadioButton: React.FC<RadioButtonProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center">
      {options.map((option) => (
        <Option
          key={option.value}
          image={option.image}
          text={option.text}
          value={option.value}
          selected={option.value === selectedValue}
          onClick={onChange}
        />
      ))}
    </div>
  );
};

export default SurveyRadioButton;
