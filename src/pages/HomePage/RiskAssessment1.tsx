const RiskAssessment1 = (props: any) => {

    const handleNextClicked = () => {
        props.setCurrentPage("risk2-page")
    }

    return (
        <>
            {/* Main Content Section */}
            <div className="animate-scale-fade-in flex flex-col items-center justify-center py-16 px-4">
                {/* Orange Box */}
                <div className="text-black px-12 py-16 md:px-10 md:py-12 text-left max-w-4xl w-full mx-4">
                    <div className="grid grid-cols-12 items-center">
                        <h1 className="text-xl md:text-4xl mb-4 col-span-10">
                            Risk assessment -<br />
                            How do I evaluate?
                        </h1>
                        <div
                            className="col-span-2 w-18 h-18 md:w-24 md:h-24 bg-green-500 rounded-full hover:cursor-pointer"
                        ></div>
                    </div>

                    <br />
                    <br />

                    <h1 className="text-xl md:text-xl">
                        <b>Average or high performance, motivation and wellbeing.</b> Here, it is<br />
                        important to specifically acknowledge the employee to maintain<br />good performance.
                        <br />
                        <br />

                        <b>Remember that if one of your employees</b> is resilient and a positive<br /> force, he or she mean a lot of value to the employer in the long run.
                    </h1>

                    <div className="flex justify-end">
                        <button
                            onClick={handleNextClicked}
                            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default RiskAssessment1;