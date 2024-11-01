import { useState } from 'react'
import { services } from "../data/services"
import ServiceIconCard from '../cards/ServiceIconCard'
import ServiceDetailsCard from "../cards/ServiceDetailsCard"

export default function Services() {

    const [selectedServiceId, setSelectedServiceId] = useState(1)


    function handleSelectedService(id) {
        setSelectedServiceId(id)
    }

    const selectedService = services.find(service => service.id === selectedServiceId)


    return (
        <section className='mt-20'>
            <div className='w-[90%] mx-auto text-center md:w-3/4 lg:w-1/2'>
                <h6 className='mb-2 text-sm capitalize text-error'>Our Services</h6>
                <p className='text-2xl font-semibold capitalize md:text-3xl lg:text-4xl'>Popular Hair Cutting And Salon</p>
            </div>
            <div className='w-[90%] mx-auto mt-8'>
                <div className='w-[95%] md:w-[90%] mx-auto'>
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
