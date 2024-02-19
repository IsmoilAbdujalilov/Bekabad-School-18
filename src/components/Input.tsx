type inputType = {
  type: any;
  id?: string;
  name?: string;
  checked?: any;
  required?: boolean;
  className?: string;
  value?: string | number;
  onChange?: (e: any) => void;
};

const Input = (props: inputType) => {
  return <input {...props} />;
};

export default Input;
