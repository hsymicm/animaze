import '@/assets/styles/Incremental.css'
import Caret from '@/assets/svgs/caret-solid.svg'
import { useState } from 'react'

export default function Incremental({width, limit, increase}) {
    const [value, setValue] = useState(0)
    const handleValueChange = (num, limit=0, button=true) => {
        let temp
        if(!num) num = 0
        if(!button) {
            try{
                temp = parseFloat(num)
            } catch(e) {
                setValue(value)
                return
            }
        } else {
            // (value - (value % num)) + num
            temp = (value - ((value % num) + num) % num) + num
        }
        if(temp > limit) setValue(limit)
        else if(temp < 0) setValue(0)
        else setValue(temp)
    }
    return (
        <div
        style={{width : width}}
        className="incremental-box"
        >
            <input value={value} onChange={(e) => handleValueChange(e.target.value, limit, false)} type="text" className="input-box" />
            <div className="control">
                <img 
                    onClick={() => handleValueChange(increase, limit)} 
                    width="8px" 
                    src={Caret} 
                />
                <img
                    onClick={() => handleValueChange(-increase, limit)} 
                    width="8px" 
                    src={Caret} 
                    style={{transform: 'rotate(180deg)'}}
                />
            </div>
        </div>
    )
}