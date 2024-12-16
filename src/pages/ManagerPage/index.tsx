import React, { useState } from "react";

const ManagerPage = () => {
    const slides = [
        {
            name: "Petro Bakumenko",
            colors: ["bg-green-500", "bg-yellow-500", "bg-orange-500"],
        },
        {
            name: "Anna Smith",
            colors: ["bg-green-500", "bg-yellow-500", "bg-orange-500"],
        },
        {
            name: "John Doe",
            colors: ["bg-green-500", "bg-yellow-500", "bg-orange-500"],
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center min-w-full py-16 px-4"
                    >
                        {/* Title Above the Box */}
                        <div className="text-xl md:text-2xl bg-orange-500 text-white px-12 py-4 md:px-12 md:py-4 rounded-lg shadow-lg text-center mx-4">
                            Evaluate<br />Your Team
                        </div>
                        <br />
                        {/* Orange Box */}
                        <div className="bg-white text-black px-12 py-16 md:px-10 md:py-12 rounded-lg shadow-lg text-center max-w-4xl w-full mx-4">
                            <h1 className="text-xl black md:text-2xl mb-4">{slide.name}</h1>
                            <div className="flex flex-row items-center justify-center space-x-4">
                                {slide.colors.map((color, i) => (
                                    <div
                                        key={i}
                                        className={`w-18 h-18 md:w-24 md:h-24 ${color} rounded-full`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-4 h-4 rounded-full ${currentSlide === index ? "bg-gray-800" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ManagerPage;
