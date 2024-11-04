import { useRef, useState } from 'react'
import { services } from "../../data/services"
import ServiceIconCard from './ServiceIconCard'
import ServiceDetailsCard from "./ServiceDetailsCard"
import clickSnap from "../../assets/click-snap.wav"

export default function Services() {

    const [selectedServiceId, setSelectedServiceId] = useState(1)
    const audioRef = useRef(null);

    function handleSelectedService(id) {
        setSelectedServiceId(id)
        if (audioRef.current) {
            audioRef.current.play();
        }
    }

    const selectedService = services.find(service => service.id === selectedServiceId)


    return (
        <section id="services" className='mt-20'>
            <div className='w-[90%] mx-auto text-center md:w-3/4 lg:w-1/2'>
                <h6 className='mb-2 font-semibold capitalize text-error'>Our Services</h6>
                <p className='text-2xl font-semibold capitalize md:text-3xl lg:text-4xl'>Popular Hair Cutting And Salon</p>
            </div>
            <div className='w-[90%] mx-auto mt-8'>
                <div className='w-[95%] md:w-[90%] mx-auto'>
                    <audio ref={audioRef}>
                        <source src={clickSnap} type="audio/wav" />
                        <p>Your browser does not support the audio element.</p>
                    </audio>
                    <div className='w-full py-2 overflow-x-auto shadow-inner carousel-center md:carousel-start carousel gap-x-4'>
                        {
                            services.map(service => <ServiceIconCard
                                key={service.id}
                                isActiveTab={service.id === selectedServiceId}
                                service={service}
                                handleSelectedService={handleSelectedService}
                            />
                            )
                        }
                    </div>
                </div>

                <ServiceDetailsCard service={selectedService} />

            </div>
        </section>
    )
}
