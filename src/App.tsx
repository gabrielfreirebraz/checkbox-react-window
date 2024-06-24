import './App.css'

function App() {

  const arrayList = new Array(10).fill(true)

  console.dir(arrayList)
  return (
    <>
      <h1>Hello checkboxes</h1>
      {arrayList.map((_, idx) => (
        
          <div key={idx} className='eachItem'>
            <input type='checkbox' />&nbsp; item {idx}
          </div>
      ))}
    </>
  )
}

export default App
