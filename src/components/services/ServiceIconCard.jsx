import React from 'react'

export default function ServiceIconCard({ service, handleSelectedService, isActiveTab }) {
    return (
        <button
            type='button'
            className={`flex-col h-auto p-5 border rounded shadow-md shadow-gray-800 btn-outline btn-secondary w-[120px] md:w-[135px] btn carousel-item ${isActiveTab && "btn-active"}`}
            onClick={() => handleSelectedService(service.id)}>
            <div className="mx-auto mb-2 w-fit">
                <img src={service.icon} alt={service.serviceName} className='w-10 h-10' />
            </div>
            <p className="font-semibold text-center">{service.serviceName}</p>
        </button>
    )
}
