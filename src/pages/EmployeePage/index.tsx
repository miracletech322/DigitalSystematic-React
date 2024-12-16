const EmployeePage = () => {
    return (
        <>
            {/* Main Content Section */}
            <div className="flex flex-col items-center justify-center py-16 px-4">
                {/* Title Above the Orange Box */}
                <div className="text-xl md:text-2xl bg-orange-500 text-white px-12 py-4 md:px-12 md:py-4 rounded-lg shadow-lg text-center mx-4">
                    Evaluate<br />Yourself
                </div>
                <br />
                {/* Orange Box */}
                <div className="bg-white text-black px-12 py-16 md:px-10 md:py-12 rounded-lg shadow-lg text-center max-w-4xl w-full mx-4">
                    <h1 className="text-xl black md:text-2xl mb-4">
                        Petro Bakumenko
                    </h1>
                    <div className="flex flex-row items-center justify-center space-x-4">
                        <div className="w-18 h-18 md:w-24 md:h-24 bg-green-500 rounded-full"></div>
                        <div className="w-18 h-18 md:w-24 md:h-24 bg-yellow-500 rounded-full"></div>
                        <div className="w-18 h-18 md:w-24 md:h-24 bg-orange-500 rounded-full"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EmployeePage;