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
        <div className='p-5 flex gap-8'>
            <Button text='Enviar'/>
            <Button text='OK'/>
            <Button />
        </div>
    )
} //JSX TSX

export default App
