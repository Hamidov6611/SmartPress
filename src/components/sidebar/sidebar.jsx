import logo from '../../assets/logo.png'

const Sidebar = () => {
    return (
        <div className={`w-[20%] hidden md:flex bg-[#21576F] h-[100vh] fixed top-0 left-0`}>
            <div className={`w-[100%] mx-auto`}>
                {/* <img src={logo} className={`w-[80%] mx-auto mt-4`} alt="logo" /> */}
                <p className={`text-[40px] text-center mt-8 text-white font-montserrat`}>SMART PRESS</p>
                <div className={`h-[3px] bg-white w-[100%] mt-8`}></div>
            </div>
        </div>
    )
}

export default Sidebar