import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import readExcel from './excelToReact'
import TableComp from './Components/UI/TableComp'

const useStyles = makeStyles(
  {
    root: {
      padding: '2rem',
      background: '#FAFBFC'
    }
  }
)

const App = () => {
  const [tableData, setTableData] = useState({
    headings: [],
    rows: []
  })

  const loadExcelFile = event => {
    const file = event.target.files[0]
    const final = readExcel(file)
    let temp = {
      headings: [],
      rows: []
    }
    if (final && final[0]) {
      temp.headings = Object.values(final[0])
      console.log(Object.values(final[0]))
      for (let index = 1; index < final.length; index++) {
        temp.rows.push(Object.values(final[index]))
      }
      setTableData(temp)
    }
  }
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <input type="file" onChange={loadExcelFile} />
      <TableComp headings={tableData.headings} rows={tableData.rows} />
    </div>
  );
}

export default App;
