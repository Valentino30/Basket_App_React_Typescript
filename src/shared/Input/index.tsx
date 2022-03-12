type InputProps = {
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Input({ value, onChange }: InputProps) {
  return <input type="number" value={value} onChange={onChange} />;
}
