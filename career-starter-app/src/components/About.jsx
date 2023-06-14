import React from 'react'
import Card from './Card'

export default function About({ header, subHeader, image }) {
    return (
        <div className="md:mx-[5rem] sm:mx-5">
            <h1 className="font-bold text-2xl text-center py-10 text-indigo-600 text-5xl">{header}</h1>
            <div className="md:grid grid-cols-2 gap-4 ">
                <Card cardTitle={subHeader}>
                Discover your career path and get started on the path to your dream career with Career Starter.
                            Discover your career path and get started on the path to your dream career with Career Starter
                            Discover your career path and get started on the path to your dream career with Career Starter
                </Card>
                <div className="pb-10">
                    <img src={image} alt={header} width={500} className="rounded-3xl" />
                </div>
            </div>
        </div>
    )
}
