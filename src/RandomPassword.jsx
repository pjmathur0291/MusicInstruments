import React, { useState } from 'react'

function RandomPassword() {

    const [long, setLong] = useState(6)
    const [numberAllow, setNumberAllow] = useState(false)
    const [CharAllow, setCharAllow] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordVisible, setpasswordVisible] = useState('Show')


    function RaPassword() {

        let str = 'kshfsofsovnsofhsovnsovhWOFJSOVDOBHSVHDOBNDSOVHSOGV'
        let pass = ''

        if (numberAllow) {
            str += '1234567890'
        }

        if (CharAllow) {
            str += '@#$%&*}{?'
        }

        for (let i = 0; i < long; i++) {
            let store = Math.floor(Math.random() * str.length)
            pass += str[store]


        }
        setPassword(pass)
    }

    // console.log(password);
    return (
        <div>

            <input type={passwordVisible ? "text" : "password"} value={password} />
            <button onClick={RaPassword}> generate password</button>
            <input type="checkbox" checked={numberAllow} onClick={() => setNumberAllow(!numberAllow)} />
            <button onClick={() => setpasswordVisible(!passwordVisible)}>
                {passwordVisible ? 'Hide' : 'Show'}
            </button>
            

        </div>
    )
}

export default RandomPassword
