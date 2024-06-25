import { useState } from 'react';
import './App.css'


interface ICheckboxItem {

  checked: false
}


function App() {


  const [arrayList, setArrayList] = useState<ICheckboxItem[]>(new Array(10).fill({ checked: false }))

  // console.dir(arrayList)

  function onChange(e: any, idxChanged: number) {
    // const { checked } = e.target;
    
    setArrayList((prev): any => {

      const newArrayList = prev.map((currValue, currIdx) => {

        return { checked: currIdx === idxChanged ? !currValue.checked : (currValue.checked) };
      })
      // console.log(newArrayList)
      return newArrayList;
    })
  }

  return (
    <>
      <h1>Hello checkboxes</h1>

      {arrayList.map((item, idx) => (
        
          <div key={idx} className='eachItem'>
            <input type='checkbox' onChange={(e) => onChange(e, idx)} checked={item.checked} />&nbsp; item {idx+1}
          </div>
      ))}
    </>
  )
}

export default App
