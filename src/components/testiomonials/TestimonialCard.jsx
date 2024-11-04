import { useState } from "react"
import { FaStar } from "react-icons/fa"
import TestimonialCardModal from "./TestimonialCardModal"

export default function TestimonialCard({ testimonial }) {
    const [isCardModelShowed, setIsCardModelShowed] = useState(false)

    function handleCardClick() {
        setIsCardModelShowed(prev => !prev)
    }

    return (
        <>
            <button
                type="button"
                className='w-[calc(100%-80px)] mx-auto sm:w-[calc(50%-57px)] rounded-sm flex-col p-4 border carousel-item shadow-lg bg-[#f5f5f5] text-black'
                onClick={handleCardClick}>
                <div className='mx-auto avatar'>
                    <div className='w-16 h-16 border-2 border-gray-200 rounded-full'>
                        <img src={testimonial.reviewerImage} alt={testimonial.name} className='' />
                    </div>
                </div>
                <div className='mt-2'>
                    <p className='text-sm italic font-semibold text-gray-500 line-clamp-4'>"{testimonial.text}"</p>
                    <div className='flex flex-wrap items-center mx-auto mt-2 gap-x-1 w-fit'>
                        {
                            Array(5).fill().map((_, index) => {
                                return <FaStar
                                    size={25}
                                    className={`drop-shadow-md hover:animate-spin ${testimonial.stars >= index + 1 ? "text-yellow-400" : "text-gray-500"}`}
                                    key={`star-${index}`}
                                />
                            })
                        }
                    </div>
                    <p className='mt-2 font-black text-center'>{testimonial.name}</p>
                </div>
            </button>
            <TestimonialCardModal
                setIsCardModelShowed={setIsCardModelShowed}
                isCardModelShowed={isCardModelShowed}
                testimonial={testimonial}
            />
        </>
    )
}