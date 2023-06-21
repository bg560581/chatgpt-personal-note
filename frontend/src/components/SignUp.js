import React, { useState } from 'react'

function SignUp() {
    const [inputValue,setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };
  return (
    <div>
        <h1>SignUp</h1>




    </div>
  )
}

export default SignUp