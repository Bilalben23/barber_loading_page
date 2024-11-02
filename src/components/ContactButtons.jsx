import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import clickSoundAudio from "../assets/tic-toc-click.wav"

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER;
const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL_ADDRESS;
const MESSAGE = encodeURIComponent('Hi, how are you?');

export default function ContactButtons() {
    const [areButtonsVisible, setAreButtonsVisible] = useState(false);
    const [shouldRenderButtons, setShouldRenderButtons] = useState(false);
    const buttonRef = useRef(null); // Reference to the button container
    const audioRef = useRef(null); // Reference to the audio element

    const toggleButtons = () => {
        // Play sound on click
        if (audioRef.current) {
            audioRef.current.play();
        }

        if (!areButtonsVisible) {
            setShouldRenderButtons(true);
        }
        setAreButtonsVisible((prev) => !prev);
    };

    // Close buttons if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setAreButtonsVisible(false);
                setShouldRenderButtons(false);
            }
        };

        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!areButtonsVisible) {
            const timer = setTimeout(() => setShouldRenderButtons(false), 500);
            return () => clearTimeout(timer);
        }
    }, [areButtonsVisible]);



    return (
        <div className='fixed z-10 bottom-0 left-0 md:bottom-2 md:left-2'>

            <audio ref={audioRef}>
                <source src={clickSoundAudio} type="audio/wav" />
                <p>Your browser does not support the audio element.</p>
            </audio>


            {/* For larger screens: laptop, desktop */}
            <div className='hidden md:block'>
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
                    className='btn btn-outline btn-success btn-circle'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <FaWhatsapp size={30} />
                </a>
            </div>

            {/* For small screens: phone */}
            <div className='md:hidden relative w-[125px] h-[125px] sm:w-[160px] sm:h-[160px]' ref={buttonRef}>
                {shouldRenderButtons && (
                    <div
                        className={`transition-opacity duration-500 ease-in-out ${areButtonsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <div className='absolute top-0 left-2'>
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className='btn btn-info btn-circle'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaPhone size={25} />
                            </a>
                        </div>
                        <div className='absolute top-2 right-2'>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
                                className='btn btn-success btn-circle'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaWhatsapp size={30} />
                            </a>
                        </div>
                        <div className='absolute bottom-2 right-0'>
                            <a
                                href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent('Appointment Request')}&body=${encodeURIComponent(
                                    'Hi there,\n\nI would like to book an appointment.\n\nPreferred Date: \nPreferred Time: \n\nThank you!'
                                )}`}
                                className='btn btn-primary btn-circle'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaEnvelope size={25} />
                            </a>
                        </div>
                    </div>
                )}

                <div className='absolute bottom-2 left-2'>
                    <button
                        onClick={toggleButtons}
                        className={`btn btn-circle btn-neutral btn-outline`}
                    >
                        <FaCommentDots size={25} />
                    </button>
                </div>
            </div>
        </div>
    );
}
