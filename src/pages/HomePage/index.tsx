import { useEffect, useState } from "react";
import EmployeePage from "./EmployeePage";
import ManagerPage from "./ManagerPage";
import OnBoardingPage from "./OnBoardingPage";
import ThanksPage from "./ThanksPage";
import WelcomePage from "./WelcomePage";
import request from "../../axios";
import { toast } from "react-toastify";
import LoginPage from "./LoginPage";
import RiskAssessment1 from "./RiskAssessment1";
import RiskAssessment2 from "./RiskAssessment2";
import RiskAssessment3 from "./RiskAssessment3";
import EmployeeTrendsPage from "./EmployeeTrendsPage";
import ManagerTrendsPage from "./ManagerTrendsPage";

const HomePage = () => {
    const [isLogined, setIsLogined] = useState(false);
    const [userData, setUserData] = useState({})
    const [userList, setUserList] = useState([])

    const [currentPage, setCurrentPage] = useState("");

    const loadUserData = () => {
        const userObjString = localStorage.getItem("userData");
        if (userObjString == null || userObjString == '') {
            setCurrentPage("login-page")
            setIsLogined(false);
        } else {
            if (JSON.parse(userObjString).readStatus == 0) {
                setCurrentPage("welcome-page")
            } else {
                setCurrentPage("risk1-page")
            }
            setIsLogined(true);
            setUserData(JSON.parse(userObjString))
            loadUserList();
        }
    }

    const loadUserList = async () => {
        try {
            const res = await request({
                url: 'recommend/users',
                method: 'POST'
            });
            if (res.data?.status == 'success') {
                setUserList(res.data?.users)
            }
        } catch (e) {
            toast.error("Request Error");
        }
    }

    const handleRecommend = async (status: Number) => {
        try {
            await request({
                url: 'recommend/update',
                method: 'POST',
                data: {
                    status
                }
            });

            toast.success("Updated successful!");

        } catch (e) {
            toast.error("Request Error");
        }
    }

    useEffect(() => {
        loadUserData();
    }, [])

    return (
        <>
            <div className="bg-gray-200 min-h-screen">
                {
                    isLogined && currentPage != "login-page" ? null : <LoginPage setIsLogin={setIsLogined} loadUserData={loadUserData} setCurrentPage={setCurrentPage} />
                }

                {
                    isLogined && currentPage == "welcome-page" ? <WelcomePage setCurrentPage={setCurrentPage} /> : null
                }

                {
                    isLogined && currentPage == "onboarding-page" ? <OnBoardingPage setCurrentPage={setCurrentPage} /> : null
                }

                {
                    isLogined && currentPage == "risk1-page" ? <RiskAssessment1 setCurrentPage={setCurrentPage} /> : null
                }

                {
                    isLogined && currentPage == "risk2-page" ? <RiskAssessment2 setCurrentPage={setCurrentPage} /> : null
                }

                {
                    isLogined && currentPage == "risk3-page" ? <RiskAssessment3 setCurrentPage={setCurrentPage} /> : null
                }

                {
                    isLogined && currentPage == "employee-page" ?
                        <EmployeePage handleRecommend={handleRecommend} userData={userData} setCurrentPage={setCurrentPage} /> : null
                }

                {
                    isLogined && currentPage == "manager-page" ?
                        <ManagerPage slides={userList} setCurrentPage={setCurrentPage} /> : null
                }

                {
                    isLogined && currentPage == "thanks-page" ? <ThanksPage setCurrentPage={setCurrentPage} /> : null
                }

                {
                    isLogined && currentPage == "employee-trends-page" ? <EmployeeTrendsPage userData={userData} setCurrentPage={setCurrentPage} /> : null
                }

                {
                    isLogined && currentPage == "manager-trends-page" ? <ManagerTrendsPage userData={userData} setCurrentPage={setCurrentPage} /> : null
                }

            </div>
        </>
    )

}

export default HomePage;