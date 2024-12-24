import { useState } from "react";
export default function RandomPasswordGenerator(){
    const [generatedPassword, setGeneratedPassword] = useState("");

    function generatePassword(){
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        const allChars = upperCase + lowerCase + numbers + symbols;

        let password = "";
        const length = 12;

        for(let i = 0; i < length; i++ ){
            const randomIndex =  Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
        setGeneratedPassword(password);
    }

    
    function PasswordLengthSlider(){
        const[passwordLength, setPasswordLength] = useState(12);
        
        function handleSliderChange(e){
            const newLength = e.target.value
            setPasswordLength(newLength);
        }
        
    }
    
    return(
      
        <div className="generator-container">
        
        <h3>Generate Password</h3>
        <div className="generator">
            <p>Generated Password</p>
        <input  
        value={generatedPassword}
        />
        

        
        <button onClick={generatePassword}>Generate Password</button>
        </div>

        </div>
    );
}