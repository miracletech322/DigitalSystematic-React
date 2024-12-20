import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import request from "../../axios";

const EmployeePage = (props: any) => {

    const [recommends, setRecommends] = useState([])

    const loadRecommend = async () => {
        try {
            const res = await request({
                url: 'recommend/individual',
                method: 'POST',
            });

            setRecommends(res.data?.recommends)
        } catch (e) {
            toast.error("Request Error");
        }
    }

    const updateRecommend = (status: Number) => {
        props.handleRecommend(status)
        setTimeout(() => {
            loadRecommend()
            setTimeout(() => {
                if (props.userData.role == 'Manager') {
                    props.setCurrentPage("manager-page")
                } else {
                    props.setCurrentPage("thanks-page")
                }
            }, 1000);
        }, 500)
    }

    useEffect(() => {
        loadRecommend();
    }, [])

    return (
        <>
            {/* Main Content Section */}
            <div className="animate-scale-fade-in flex flex-col items-center justify-center py-16 px-4">
                {/* Title Above the Orange Box */}
                <div className="text-xl md:text-2xl bg-orange-500 text-white px-12 py-4 md:px-12 md:py-4 rounded-lg shadow-lg text-center mx-4">
                    Evaluate<br />Yourself
                </div>
                <br />
                {/* Orange Box */}
                <div className="bg-white text-black px-12 py-16 md:px-10 md:py-12 rounded-lg shadow-lg text-center max-w-4xl w-full mx-4">
                    <h1 className="text-xl black md:text-2xl mb-4">
                        {props.userData?.managerName}
                    </h1>
                    <div className="flex flex-row items-center justify-center space-x-4">
                        <div
                            className={`w-18 h-18 md:w-24 md:h-24 bg-green-500 rounded-full hover:cursor-pointer ${recommends.length > 0 && recommends[0]?.status == 1 ? "border-4 border-blue-500" : ""}`}
                            onClick={() => updateRecommend(1)}
                        >
                        </div>

                        <div
                            className={`w-18 h-18 md:w-24 md:h-24 bg-yellow-500 rounded-full hover:cursor-pointer ${recommends.length > 0 && recommends[0]?.status == 2 ? "border-4 border-blue-500" : ""}`}
                            onClick={() => updateRecommend(2)}
                        >
                        </div>

                        <div
                            className={`w-18 h-18 md:w-24 md:h-24 bg-orange-500 rounded-full hover:cursor-pointer ${recommends.length > 0 && recommends[0]?.status == 3 ? "border-4 border-blue-500" : ""}`}
                            onClick={() => updateRecommend(3)}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeePage;