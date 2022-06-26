import React, { useState } from 'react'
import axios from 'axios'

const InputBox = ({ setShortenUrl }) => {

    let [InputVlaue, setInputVlaue] = useState("")

    const ChangeHandeler = (e) => {
        setInputVlaue(e.target.value)
    }
    const Submit = async () => {

        await axios.get(`https://api.shrtco.de/v2/shorten?url=${InputVlaue}`)
            .then((res) => {
                setShortenUrl(res.data.result.full_short_link)
                setInputVlaue("")
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return (
        <div className='InputContainer'>
            <div>
                <h1>Create Short Links!</h1>

            </div>
            <div className='InputBoxContainer'>
                <input type="text" value={InputVlaue} onChange={(e) => ChangeHandeler(e)} />
                <button onClick={() => Submit()}>Short</button>
            </div>

        </div>
    )
}

export default InputBox