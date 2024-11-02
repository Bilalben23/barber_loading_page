import React, { useEffect, useRef, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

export default function BackTopBtn() {

    const [isVisible, setIsVisible] = useState(true)


    useEffect(() => {
        function handleScroll() {
            if (innerHeight >= window.scrollY) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        // cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    function handleBtnClick() {
        scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className={`fixed z-10 bottom-2 right-2 transition-all duration-300 ${isVisible && "opacity-0 pointer-events-none"}`
        } >
            <button className='btn btn-circle btn-error btn-outline' onClick={handleBtnClick}>
                <FaChevronUp size={25} />
            </button>
        </div >
    )
}


// threshold 