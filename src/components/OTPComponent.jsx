import React, { useRef, useState } from 'react'

function OTPComponent() {

    const [otp, setOtp] = useState(["", "", "", ""])
    const inputRef = useRef([])

    const handleChange = (value, index) => {
        const newOtp = [...otp];

        if(!isNaN(value)){
            newOtp[index] = value;

            if(value && index < otp.length - 1){
                inputRef.current[index+1].focus()
            }
            
            setOtp(newOtp)
        }else{
            
        }
    }

    const handleBackspace = (e, index) => {
        if(e.key === "Backspace" && index > 0 && !otp[index]){

            const newOtp = [...otp]

            newOtp[index-1] = ''

            inputRef.current[index-1].focus()

            setOtp(newOtp)
        }
        
    }

    const printOtp = () => {
        let newOtp = ''
        otp.map((digit) => {
            newOtp+=digit
        })

        console.log(newOtp);
    }

  return (
    <div>
        <h1 className='text-2xl font-bold'>OTP verifaction</h1>

        <h2 className='text-l font-semibold mb-4'>Enter 4 digit otp for verifaction</h2>

        {otp.map((digit, index) => (
            <input
                className='w-7 h-7 mx-2 text-center font-bold rounded-lg focus:border-blue-400'
                key={index}
                value={digit}
                maxLength={1}
                type='text'
                autoFocus={index === 0}
                ref={(ref) => inputRef.current[index] = ref}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
            />
        ))}

        <button className="border-1 px-2 py-1 ml-10 rounded-lg border-black text-white bg-blue-800"
            onClick={printOtp}
        >Submit</button>
        
    </div>
  )
}

export default OTPComponent