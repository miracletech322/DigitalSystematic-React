import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import EmployeePage from "./EmployeePage";
import ManagerPage from "./ManagerPage";
import OnBoardingPage from "./OnBoardingPage";
import ThanksPage from "./ThanksPage";
import WelcomePage from "./WelcomePage";
import request from "../../axios";
import { toast } from "react-toastify";

const HomePage = () => {
    const [isLogined, setIsLogined] = useState(false);
    const [userData, setUserData] = useState({})
    const [userList, setUserList] = useState([])

    const loadUserData = () => {
        const userObjString = localStorage.getItem("userData");
        if (userObjString == null || userObjString == '') {
            setIsLogined(false);
        } else {
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
                <Header userData={userData} isLogined={isLogined} toggleLogin={loadUserData} />
                <WelcomePage />
                <OnBoardingPage />
                {
                    isLogined && userData?.role == 'User' ?
                        <EmployeePage handleRecommend={handleRecommend} userData={userData} /> :
                        <></>
                }
                {
                    isLogined && userData?.role == 'Manager' ?
                        <ManagerPage slides={userList} /> :
                        <></>
                }
                <ThanksPage />
            </div>
        </>
    )

}

export default HomePage;