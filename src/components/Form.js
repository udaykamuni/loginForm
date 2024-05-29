import React from "react";
import { useState } from "react";

export default function From(){
    const [formData, setFormdata] = useState(
        {
            email: "",
            password: "",
            confirmPassword : "",
            newsLetter: true

        }
    )

    function handleChange(event){
        const {name,type,checked,value}= event.target
        setFormdata(prevFormData =>({
            ...prevFormData,
            [name] : type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        if(formData.password === formData.confirmPassword){
            console.log("successfully logged in")

        }
        else{
            console.log("check the password")
        }
        if(formData.newsLetter){
            console.log("thanks for singing the newsletter")
        }

    }

    return(
        <form onSubmit={handleSubmit} className="box"> 
            <div>
                <input 
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                    value={formData.email}
                />
            </div>
            <div>
                <input 
                    type="password"
                    name="password"
                    placeholder="more than 7 character"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password"
                    name="confirmPassword"
                    placeholder="confirm Password"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                />
            </div>
            <div>
                <input 
                    type="checkbox"
                    name="newsLetter"
                    onChange={handleChange}
                    checked={formData.newsLetter}
                />
                <label htmlFor="newsLetter">I want to join the newsletter</label>
            </div>
                <button>Sign up</button>
        </form>
    )
}