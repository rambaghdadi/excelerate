import classes from "./TextInput.module.css"

interface IInputElementProps extends React.HTMLProps<HTMLInputElement> {}

export default function TextInput({...props}: IInputElementProps) {
  return <input className={classes.input} {...props} />
}
