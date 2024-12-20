const RiskAssessment2 = (props: any) => {

    const handleNextClicked = () => {
        props.setCurrentPage("risk3-page");
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
                            className="w-18 h-18 md:w-24 md:h-24 bg-yellow-500 rounded-full hover:cursor-pointer"
                        >
                        </div>
                    </div>

                    <br />
                    <br />

                    <h1 className="text-xl md:text-xl">
                        <b>Early signals of changed motivation, performance or health</b>
                        <br />
                        The signals can be many. Ask yourself whether they come from work<br />life, private life or health. Dare to ask and listen. Tell the employee <br />what you see and your concerns.

                        <br />
                        <br />

                        <b>Follow up by asking the emploeey</b> to reflect on what could improve<br />the situation. Remember the document. Consider whether internal or<br />external support can improve the chances of going green again.
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

export default RiskAssessment2;