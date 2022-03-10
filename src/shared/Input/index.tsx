type InputProps = {
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Input({ value, onChange }: InputProps) {
  return <input value={value} onChange={onChange} />;
}
