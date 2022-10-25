/* eslint-disable no-unused-expressions */
const mockDataFiles = import.meta.globEager('../mock/*.ts')

const mockDataFilesList: any = {}
const fileName = []

// 取得所有資料檔案
for (const key in mockDataFiles) {
  mockDataFilesList[key.replace(/(\.\/mock\/|\.js)/g, '').slice(1)] = mockDataFiles[key]
  const keyName = key.substr(key.lastIndexOf('/') + 1).replace('.js', '')
  keyName !== 'mockApi' ? fileName.push(keyName) : ''
}

const mockDataArray: {}[] = []

Object.entries(mockDataFilesList).forEach(([key]) => {
  let returnResult = {}
  if (key === 'mockApi')
    return
  returnResult = mockDataFilesList[key].default
  mockDataArray.push(returnResult)
})

// 合併資料
const mockDatas = mockDataArray.reduce((target: any, key, index) => {
  target[index] = key
  return { ...target, ...target[index] }
}, {})

// 物件去重
Object.keys(mockDatas).forEach((key) => {
  if (!isNaN(Number(key)))
    delete mockDatas[key]
})

export default {
  mockDatas,
}
