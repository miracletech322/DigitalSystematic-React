import React, { useState } from "react";

const ManagerPage = (props: any) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % props.slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + props.slides.length) % props.slides.length);
    };

    const findMostFrequen = (arr: any) => {
        const frequency: any = {};
        let maxCount = 0;
        let mostFrequent = null;

        for (const item of arr) {
            frequency[item.status] = (frequency[item.status] || 0) + 1;
            if (frequency[item.status] > maxCount) {
                maxCount = frequency[item.status];
                mostFrequent = item.status;
            }
        }

        return mostFrequent;
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {
                    props.slides.map((slide: any, index) => (
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
                                <h1 className="text-xl black md:text-2xl mb-4">{slide.managerName}</h1>
                                <div className="flex flex-row items-center justify-center space-x-4">
                                    {
                                        slide.role == 'User' ?
                                            <>
                                                <div
                                                    className={`w-18 h-18 md:w-24 md:h-24 bg-green-500 rounded-full hover:cursor-pointer ${slide.recommends.length > 0 && slide.recommends[0]?.status == 1 ? "border-4 border-blue-500" : ""}`}
                                                >
                                                </div>

                                                <div
                                                    className={`w-18 h-18 md:w-24 md:h-24 bg-yellow-500 rounded-full hover:cursor-pointer ${slide.recommends.length > 0 && slide.recommends[0]?.status == 2 ? "border-4 border-blue-500" : ""}`}
                                                >
                                                </div>

                                                <div
                                                    className={`w-18 h-18 md:w-24 md:h-24 bg-orange-500 rounded-full hover:cursor-pointer ${slide.recommends.length > 0 && slide.recommends[0]?.status == 3 ? "border-4 border-blue-500" : ""}`}
                                                >
                                                </div>
                                            </> :
                                            <>
                                                <div
                                                    className={`w-18 h-18 md:w-24 md:h-24 bg-green-500 rounded-full hover:cursor-pointer ${slide.recommends.length > 0 && findMostFrequen(slide.recommends) == 1 ? "border-4 border-blue-500" : ""}`}
                                                >
                                                </div>

                                                <div
                                                    className={`w-18 h-18 md:w-24 md:h-24 bg-yellow-500 rounded-full hover:cursor-pointer ${slide.recommends.length > 0 && findMostFrequen(slide.recommends) == 2 ? "border-4 border-blue-500" : ""}`}
                                                >
                                                </div>

                                                <div
                                                    className={`w-18 h-18 md:w-24 md:h-24 bg-orange-500 rounded-full hover:cursor-pointer ${slide.recommends.length > 0 && findMostFrequen(slide.recommends) == 3 ? "border-4 border-blue-500" : ""}`}
                                                >
                                                </div>
                                            </>
                                    }

                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Bottom Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {
                    props.slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-4 h-4 rounded-full ${currentSlide === index ? "bg-gray-800" : "bg-gray-400"}`}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ManagerPage;
