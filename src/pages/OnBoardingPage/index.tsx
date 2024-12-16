const OnBoardingPage = () => {
    return (
        <>
            {/* Main Content Section */}
            <div className="flex flex-col items-center justify-center py-16 px-4">
                {/* Title Above the Orange Box */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8 text-center">
                    Onboarding
                </h1>
                {/* Orange Box */}
                <div className="bg-orange-500 text-white px-12 py-16 md:px-10 md:py-12 rounded-lg shadow-lg text-center max-w-4xl w-full mx-4">
                    <h1 className="text-xl md:text-2xl mb-4">
                        Here you will be evaluating yourself once a week,
                        <br />
                        and if you're a manager, also your employees.
                        <br />
                        <br />
                        This is to show that you care about them,
                        <br />
                        recognize them but also have a chance to act early
                        <br />
                        on signals of any risks connected to health, work environment, changed
                        <br />
                        performance or motivation.
                        <br />
                        <br />
                        A shift from top-down well-being management to a shared, participatory approach.
                        <br />
                        🤝
                    </h1>
                </div>
            </div>
        </>
    )

}

export default OnBoardingPage;