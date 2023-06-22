import classes from "./TextArea.module.css"

interface IInputElementProps extends React.HTMLProps<HTMLTextAreaElement> {}

export default function TextArea({...props}: IInputElementProps) {
  return <textarea className={classes.textarea} {...props} />
}
