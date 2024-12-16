import Header from "../../components/Header/Header";
import EmployeePage from "../EmployeePage";
import ManagerPage from "../ManagerPage";
import OnBoardingPage from "../OnBoardingPage";
import ThanksPage from "../ThanksPage";
import WelcomePage from "../WelcomePage";

const HomePage = () => {
    return (
        <>
            <div className="bg-gray-200 min-h-screen">
                <Header />
                <WelcomePage />
                <OnBoardingPage />
                <EmployeePage />
                <ManagerPage />
                <ThanksPage />
            </div>
        </>
    )

}

export default HomePage;