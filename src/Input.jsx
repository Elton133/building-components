import { useState } from "react"

export default function Input() {
    const [Text, setText] = useState('hello');

    function handleChange(e){
        setText(e.target.value);
    }
    return (
        <div>
           <input type={Text}
           onChange={handleChange} />
           <p>You typed: {Text}</p>
           <button onClick={()=> setText('')}>Reset</button>
        </div>
    )
}