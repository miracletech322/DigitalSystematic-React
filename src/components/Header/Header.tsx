import { useEffect, useState } from "react";
import SigninModal from "../SigninModal";

const Header = (props: any) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        props.toggleLogin();
    }, [isOpen])

    return (
        <>
            <SigninModal isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* Header Section */}
            <header className="bg-white shadow-md">
                <nav className="container mx-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <div className="text-xl font-bold text-orange-500">Digital Systematic</div>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6">
                        <li>
                            {
                                !props.isLogined ?
                                    <div
                                        className="text-gray-700 hover:text-orange-500 hover:cursor-pointer"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        Login
                                    </div> :
                                    <div
                                        className="text-gray-700 hover:text-orange-500 hover:cursor-pointer"
                                    >
                                        {props.userData?.managerName}
                                    </div>
                            }
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;