import { useState } from 'react'

// Components 01
/*
function Button(){
    const [count, setCount] = useState(0)
    return (
        <button onClick={
          () => setCount(count + 1)
          }>
            Você clicou {count} vezes
        </button>
    )
}
*/

// TIPANDO 
interface ButtonProps {
  text?: string,
}

// Components 01
function Button(props: ButtonProps) {
    return <button className="btn01">{props.text ?? 'Default'}</button>
}

function App() {
    //return <h1>Hello World</h1>
    return (
        <div className='bg-slate-50 justify-evenly items-center rounded-md shadow-lg ring-1 ring-slate-900/5 max-w-2xl mt-20 h-80 mx-auto p-5 flex flex-align-center gap-8 hover:bg-sky-100 hover:ring-sky-500'>
            <Button text='Enviar'/>
            <Button text='OK'/>
            <Button />
        </div>
    )
} //JSX TSX

export default App
