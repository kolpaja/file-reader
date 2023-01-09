import './style.css'

type Props = {
  value?: any;
  onChange: (value: any) => void;
  placeHolder?: string;
  cls?: string;
  type: string;
  label?: string;
}

const Input = ({ onChange, value, cls, placeHolder, type, label }: Props) => {
  return (
    <div className={`${cls} input-wrapper`}>
      <label htmlFor='input' aria-label='input'>{label}</label>
      <input
        id='input'
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  )
}

export default Input