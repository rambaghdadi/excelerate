import classes from "./Section.module.css"

interface ISectionProps {
  children: React.ReactNode
  title: string
}

export default function Section({children, title}: ISectionProps) {
  return (
    <main className={classes.main}>
      <p className={classes.sectionTitle}>{title}</p>
      {children}
    </main>
  )
}
