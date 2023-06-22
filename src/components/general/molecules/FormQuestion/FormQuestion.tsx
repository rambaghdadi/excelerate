import classes from "./FormQuestion.module.css"

interface IFormQuestionProps {
  htmlFor: string
  label: string
  children: React.ReactNode
}

export default function FormQuestion({
  label,
  children,
  htmlFor,
}: IFormQuestionProps) {
  return (
    <div className={classes.main}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  )
}
