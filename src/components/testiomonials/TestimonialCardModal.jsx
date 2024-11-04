import { useEffect, useRef } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import clickSnap from "../../assets/click-snap.wav"

export default function TestimonialCardModal({ isCardModelShowed, setIsCardModelShowed, testimonial }) {
    const testimonialBox = useRef(null);
    const audioRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (testimonialBox.current && !testimonialBox.current.contains(event.target)) {
                setIsCardModelShowed(false); // hide the modal when clicking outside
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsCardModelShowed]);

    function handleCloseModalClick() {
        if (audioRef.current) {
            audioRef.current.play();
        }
        setIsCardModelShowed(false);

    }

    return (
        <div className={`fixed z-50 inset-0 flex items-center transition-all justify-center bg-black/50 ${!isCardModelShowed && "hidden"}`}>
            <div
                className="w-[90%] mx-auto sm:max-w-lg rounded-lg p-6 border border-gray-300 shadow-lg bg-white text-gray-800 relative"
                ref={testimonialBox}
                onClick={(e) => e.stopPropagation()}
            >
                <button type="button" className="btn absolute top-2 right-2 btn-sm btn-circle btn-ghost bg-gray-100" onClick={handleCloseModalClick}>
                    <FaTimes />
                </button>
                <div className="flex flex-col items-center">
                    {/* sound */}
                    <audio ref={audioRef}>
                        <source src={clickSnap} type="audio/wav" />
                        <p>Your browser does not support the audio element.</p>
                    </audio>
                    {/* Reviewer Image */}
                    <div className="avatar w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200 mb-4">
                        <img src={testimonial.reviewerImage} alt={testimonial.name} className="w-full h-full" />
                    </div>

                    {/* Review Text */}
                    <p className="text-center font-semibold text-gray-700 italic mb-4 select-all">"{testimonial.text}"</p>

                    {/* Star Ratings */}
                    <div className="flex items-center mb-4 gap-x-1.5">
                        {Array(5)
                            .fill()
                            .map((_, index) => (
                                <FaStar
                                    size={28}
                                    className={`transition-colors hover:animate-spin duration-200 ${testimonial.stars >= index + 1 ? "text-yellow-400" : "text-gray-300"}`}
                                    key={`star-${index}`}
                                />
                            ))}
                    </div>

                    {/* Reviewer Name */}
                    <p className="text-lg font-bold">{testimonial.name}</p>

                    {/* Social Icon and Source */}
                    <div className="mt-3 flex items-center space-x-2 text-gray-600">
                        <span>From:</span>
                        <div className="text-2xl"><testimonial.socialIcon /></div>
                        <a href={testimonial.reviewLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            View Review
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
