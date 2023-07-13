import classes from "./Table.module.css"

interface ITableProps {
  columns: string[]
  rows: Row[]
}

interface Row {
  row: string[] | JSX.Element[]
}

export default function Table({columns, rows}: ITableProps) {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({row}) => (
          <tr>
            {row.map((cell) => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
