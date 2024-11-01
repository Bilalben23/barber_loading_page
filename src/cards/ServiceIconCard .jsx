import React from 'react'

export default function ServiceIconCard({ service, handleSelectedService, isActiveTab }) {
    return (
        <button
            type='button'
            className={`flex-col h-auto p-5 border rounded shadow-md shadow-gray-800 btn-outline btn-secondary w-[100px] md:w-[120px] btn carousel-item ${isActiveTab && "btn-active"}`}
            onClick={() => handleSelectedService(service.id)}>
            <div className="mx-auto mb-2 w-fit">{<service.icon size={30} />}</div>
            <p className="font-semibold text-center">{service.serviceName}</p>
        </button>
    )
}
