import * as XLSX from 'xlsx'

let final = null



const readExcel = file => {
    console.log('init')
    const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        console.log('start', fileReader)
        fileReader.readAsArrayBuffer(file)
        fileReader.onload = e => {
            const bufferArr = e.target.result
            const workBook = XLSX.read(bufferArr, { type: 'buffer' })
            const workSheetNames = workBook.SheetNames.find(sheet => sheet === 'OUTPUT')
            const workSheet = workBook.Sheets[workSheetNames]
            const data = XLSX.utils.sheet_to_json(workSheet)
            resolve(data)
        }
    })
    promise.then((data) => {
        final = data
    }).catch(error => {
        console.log('ERROR', error)
    })
}

const sendFinal = (file) => {
    readExcel(file)
    return final
}

export default sendFinal