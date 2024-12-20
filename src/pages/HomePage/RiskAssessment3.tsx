const RiskAssessment3 = (props: any) => {

    const handleNextClicked = () => {
        props.setCurrentPage("employee-page")
    }

    return (
        <>
            {/* Main Content Section */}
            <div className="animate-bounce-once flex flex-col items-center justify-center py-16 px-4">
                {/* Orange Box */}
                <div className="text-black px-12 py-16 md:px-10 md:py-12 text-left max-w-4xl w-full mx-4">
                    <div className="grid grid-cols-12 items-center">
                        <h1 className="text-xl md:text-4xl mb-4 col-span-10">
                            Risk assessment -<br />
                            How do I evaluate?
                        </h1>
                        <div
                            className="w-18 h-18 md:w-24 md:h-24 bg-orange-500 rounded-full hover:cursor-pointer"
                        >
                        </div>
                    </div>

                    <br />
                    <br />

                    <h1 className="text-xl md:text-xl">
                        <b>Clear signals of impaired motivation</b>, performance or health. The<br />
                        signals can be many. Tell the employee what you see and be very<br />
                        clear about your concerns. Ask yourself whether the signals come from<br />
                        work life, private life or health. Dare to ask and listen
                        <br />
                        <br />
                        <b>Ask the employee to reflect</b> on their own responsibility and what can<br />
                        improve the situation. Follow up and use previous documentation.<br />
                        Make a timed action plan together with a target picture and also<br />
                        clarify the consequences.
                        <br />
                        <br />
                        <b>Consider whether internal or external support</b> can improve the <br />
                        chances of going green again.
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

export default RiskAssessment3;