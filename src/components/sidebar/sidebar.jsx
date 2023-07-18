import logo from '../../assets/logo.png'

const Sidebar = () => {
    return (
        <div className={`w-[100%] hidden md:flex bg-[#16c7ca] h-[100vh] sticky left-0`}>
            <div className={`w-[100%] mx-auto`}>
                <img src={logo} className={`w-[80%] mx-auto mt-4`} alt="logo" />
            </div>
        </div>
    )
}

export default Sidebar