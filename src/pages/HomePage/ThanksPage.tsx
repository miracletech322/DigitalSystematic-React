const ThanksPage = (props: any) => {

    const handleTrends = () => {
        props.setCurrentPage("employee-trends-page");
    }

    const handleEvaluate = () => {
        props.setCurrentPage("employee-page");
    }

    return (
        <>
            {/* Main Content Section */}
            <div className="animate-bounce-once flex flex-col items-center justify-center py-16 px-4">
                {/* Orange Box */}
                <div className="text-black px-12 py-16 md:px-10 md:py-12 text-center max-w-4xl w-full mx-4">
                    <h1 className="text-xl md:text-4xl mb-4">
                        Thank you so much for
                        <br />
                        taking the time
                        <br />
                        to evaluate !
                        <br />
                        <br />
                        You are important to us and
                        <br />
                        to others around you.
                        <br />
                        💖
                    </h1>
                    <div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleTrends}
                                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition h-[50px] w-[150px]"
                            >
                                Trends
                            </button>
                        </div>
                        <div className="flex justify-end mt-2">
                            <button
                                onClick={handleEvaluate}
                                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition h-[50px] w-[150px]"
                            >
                                Evaluate Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ThanksPage;