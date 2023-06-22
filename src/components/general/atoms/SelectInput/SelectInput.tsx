import classes from "./SelectInput.module.css"

interface ISelectInputProps extends React.HTMLProps<HTMLSelectElement> {
  options: string[]
}

export default function SelectInput({options, ...props}: ISelectInputProps) {
  return (
    <select className={classes.select} {...props}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}
