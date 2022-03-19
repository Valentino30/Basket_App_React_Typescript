type InputProps = {
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Input({ value, onChange }: InputProps) {
  return <input type="number" min="0" value={value} onChange={onChange} />;
}
