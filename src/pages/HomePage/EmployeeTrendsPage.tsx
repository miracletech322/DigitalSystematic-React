const EmployeeTrendsPage = (props: any) => {

    const handleToggle = () => {
        props.setCurrentPage("manager-trends-page");
    }

    return (
        <>
            {/* Main Content Section */}
            <div className="animate-bounce-once flex flex-col items-center justify-center py-16 px-4">
                {/* Orange Box */}
                <div className="text-black px-12 py-16 md:px-10 md:py-12 max-w-4xl w-full mx-4">
                    <h1 className="text-xl md:text-4xl mb-4 text-left">
                        ({props.userData.managerName}) Team
                    </h1>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-wrap gap-8 justify-center mt-20">
                            <div className="bg-[#f1d6ce] rounded-lg p-6 w-60 shadow-lg flex flex-col items-center w-50">
                                <p className="text-lg md:text-4xl mb-4">Trend</p>
                                <div className="flex flex-col space-y-2">
                                    <div
                                        className="text-xl bg-[#d7a840] text-white w-50 py-4 md:px-10 md:py-2 rounded-lg shadow-lg text-center mx-4 border-2 border-white"
                                        onClick={handleToggle}
                                    >
                                        Logo<br />
                                        Image
                                    </div>

                                    <div
                                        className="text-xl bg-[#d7a840] text-white w-50 py-4 md:px-10 md:py-2 rounded-lg shadow-lg text-center mx-4 border-2 border-white"
                                        onClick={handleToggle}
                                    >
                                        Advice Toolbox
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#f1d6ce] rounded-lg p-6 w-60 shadow-lg flex flex-col items-center w-50">
                                <p className="text-lg md:text-4xl mb-4">Actions</p>
                                <div className="flex flex-col space-y-2">
                                    <div
                                        className="text-xl bg-[#b9c144] text-white w-50 py-4 md:px-10 md:py-2 rounded-lg shadow-lg text-center mx-4 border-2 border-white"
                                        onClick={handleToggle}>
                                        Self<br />help
                                    </div>

                                    <div
                                        className="text-xl bg-[#77a138] text-white w-50 py-4 md:px-10 md:py-2 rounded-lg shadow-lg text-center mx-4 border-2 border-white"
                                        onClick={handleToggle}
                                    >
                                        Chat with<br />Expert
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#f1d6ce] rounded-lg p-6 w-60 shadow-lg flex flex-col items-center w-50">
                                <p className="text-lg md:text-4xl mb-4">Meetings</p>
                                <div className="flex flex-col space-y-2">
                                    <div
                                        className="text-xl bg-[#4b842f] text-white w-50 py-4 md:px-10 md:py-2 rounded-lg shadow-lg text-center mx-4 border-2 border-white"
                                        onClick={handleToggle}
                                    >
                                        Me and my<br />manager
                                    </div>

                                    <div
                                        className="text-xl bg-[#34692e] text-white w-50 py-4 md:px-10 md:py-2 rounded-lg shadow-lg text-center mx-4 border-2 border-white"
                                        onClick={handleToggle}
                                    >
                                        Follow<br />ups
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeTrendsPage;
