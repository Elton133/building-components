import { useState } from 'react';
import { useEffect } from 'react';
import beach from './assets/beach.jpg'
import './Countdown.css'


export default function Countdown(){

    const [TargetDate, setTargertDate] = useState(new Date("2022-07-01T00:00:00"));
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1000) {
                        setIsActive(false); 
                        return 0;
                    }
                    return prevTime - 1000;
                });
            }, 1000);
    
            return () => clearInterval(interval);
        }
    }, [isActive, timeLeft]);
    


    return(
        <div className='countdown-container'>
            <img src={beach} alt="beach" />
        </div>
    );
}