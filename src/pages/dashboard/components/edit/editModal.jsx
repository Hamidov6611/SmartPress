import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import { toast } from 'react-toastify';

const EditModal = ({setIsShow}) => {
    const submitHandler = () => {
        toast.dark("Successfully edit")
        setIsShow(false)
    }
    return (
        <div className={`w-[100%] h-[100vh] fixed top-0 left-0 editModal z-[789273123120] flex justify-center items-center`}
        onClick={() => setIsShow(false)}
        >
            <div className={`w-[98%] md:w-[70%] mx-auto min-h-[600px] bg-slate-200 shadow-2xl  rounded-xl`} onClick={(e) => e.stopPropagation()}>
            <div className={`w-[100%] px-8 my-3 flex justify-between`}>
                <p className={`font-montserrat text-[18px] md:text-[20px]`}>Edit</p>
                <IconButton>
                    <ClearIcon onClick={() => setIsShow(false)} className={`cursor-pointer`}/>
                </IconButton>
            </div>
            <div className={`h-[2px] w-[100%] bg-slate-600`}></div>
            <form onSubmit={submitHandler} className={`flex min-h-[500px] justify-between flex-wrap flex-row p-8 rounded-2xl `}>
                <div className={`w-[100%] md:w-[48%] flex flex-col`}>
                    <p className={`font-montserrat text-[18px] md:text-[20px]`}>Example</p>
                    <input 
                    className={`w-[100%] border-[#004CB2] outline-[#004CB2] font-montserrat rounded-lg focus:border-[#004CB2] p-3 my-4`} placeholder="login"
                    // value={login}
                    // onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className={`w-[100%] md:w-[48%]`}>
                <p className={`font-montserrat text-[18px] md:text-[20px]`}>Example</p>
                    <input 
                    className={`w-[100%] border-[#004CB2] outline-[#004CB2] font-montserrat rounded-lg focus:border-[#004CB2] p-3 my-4`} placeholder="login"
                    // value={login}
                    // onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className={`w-[100%] md:w-[48%] flex flex-col`}>
                    <p className={`font-montserrat text-[18px] md:text-[20px]`}>Example</p>
                    <input 
                    className={`w-[100%] border-[#004CB2] outline-[#004CB2] font-montserrat rounded-lg focus:border-[#004CB2] p-3 my-4`} placeholder="login"
                    // value={login}
                    // onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className={`w-[100%] md:w-[48%]`}>
                <p className={`font-montserrat text-[18px] md:text-[20px]`}>Example</p>
                    <input 
                    className={`w-[100%] border-[#004CB2] outline-[#004CB2] font-montserrat rounded-lg focus:border-[#004CB2] p-3 my-4`} placeholder="login"
                    // value={login}
                    // onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className={`w-[100%] md:w-[48%] flex flex-col`}>
                    <p className={`font-montserrat text-[18px] md:text-[20px]`}>Example</p>
                    <input 
                    className={`w-[100%] border-[#004CB2] outline-[#004CB2] font-montserrat rounded-lg focus:border-[#004CB2] p-3 my-4`} placeholder="login"
                    // value={login}
                    // onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className={`w-[100%] md:w-[48%]`}>
                <p className={`font-montserrat text-[18px] md:text-[20px]`}>Example</p>
                    <input 
                    className={`w-[100%] border-[#004CB2] outline-[#004CB2] font-montserrat rounded-lg focus:border-[#004CB2] p-3 my-4`} placeholder="login"
                    // value={login}
                    // onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className={`flex flex-row w-[100%] justify-between mt-28`}>
                    
                    <button className={`py-3 bg-red-600 px-8 text-[18px] font-montserrat text-white rounded-lg`}
                    onClick={() => setIsShow(false)}
                    >Close</button>
                    <button className={`py-3 bg-green-600 px-8 text-[18px] font-montserrat text-white rounded-lg`}>Edit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default EditModal