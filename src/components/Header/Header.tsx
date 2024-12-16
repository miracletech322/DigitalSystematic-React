const Header = () => {
    return (
        <>
            {/* Header Section */}
            <header className="bg-white shadow-md">
                <nav className="container mx-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <div className="text-xl font-bold text-orange-500">Digital Systematic</div>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#" className="text-gray-700 hover:text-orange-500">
                                SignIn
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;