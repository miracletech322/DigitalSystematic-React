
const WelcomePage = (props: any) => {

    const handleNextClicked = () => {
        props.setCurrentPage("onboarding-page");
    }

    return (
        <>
            {/* Main Content Section */}
            <div className="flex flex-col items-center justify-center py-16 px-4">
                {/* Title Above the Orange Box */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8 text-center">
                    Welcome !
                </h1>
                {/* Orange Box */}
                <div className="bg-orange-500 text-white px-12 py-16 md:px-10 md:py-12 rounded-lg shadow-lg text-center max-w-4xl w-full mx-4">
                    <h1 className="text-xl md:text-2xl mb-4">
                        You are important to us.
                        <br />
                        And to others around you.
                        <br />
                        💖
                        <br />
                        <br />
                        This is an all-in-one tool for workplace well-being.
                        <br />
                        Focus on both recognizing positive behaviours of your peers and spot early signals of not feeling well in time-instead of acting when it's too late...
                    </h1>

                    <div className="flex justify-end">
                        <button
                            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                            onClick={handleNextClicked}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomePage;