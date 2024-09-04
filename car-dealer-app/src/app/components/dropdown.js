"use client"
import { useState } from "react"

export default function Dropdown({ values, dropName, text }) {
    const [ selectedValue, setSelectedValue ] = useState(null)

    function handleClick(e) {
        e.preventDefault();
        setSelectedValue(e.target.value)
    }

    return(
        <div id="main">
            <select className="dropdown" name={dropName} onClick={handleClick} required>
                <option value="">{text}</option>
                {
                    values.map((item) => {
                        if (item)
                        return <option key={item} value={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}