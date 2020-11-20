import React,{useState, useEffect} from 'react'
import "./Nav.css";

export default function Nav() {
    const[show,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false);
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`} >
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png' 
             className='nav__logo' 
             alt='Netflix Logo'/>

            <img src='https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg'
             className='nav__smileIcon' 
             alt='Netflix Logo'/>
        </div>
    )
}
