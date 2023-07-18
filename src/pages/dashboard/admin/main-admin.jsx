import { useEffect, useState } from "react"
import AdminLayout from "../layout/admin-layout"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../index.css'
import EditModal from "../components/edit/editModal.jsx"


const MainAdmin = () => {
    const [admin, setAdmin] = useState([])
    const [isshow, setIsShow] = useState(false) 
    const navigate = useNavigate()
    useEffect(() => {
        let isAdmin = Cookies.get('admin')
        if(isAdmin?.length > 0) {
            setAdmin(JSON.parse(isAdmin))
        }else {
            setAdmin([])
        }
    }, [])

    const editHandler = () => {
        setIsShow(true)
    }
    return admin?.login ?  (
        <AdminLayout>
            <div className={`w-[90%] mx-auto mb-6 flex justify-between items-center`}>
                    <p className={`text-purple-900 text-[28px] font-montserrat`}>Example</p>
                    <button className={`px-8 py-3 text-[20px] rounded-lg bg-purple-900 text-[#fff]`}>Add</button>
                </div>
            <div className={`w-[100%] md:w-[90%] mx-auto overflow-auto z-0`}>
                
                <Table>
                    <TableHead sx={{background:'#16c7ca'}}>
                        <TableRow>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '8px', position:'sticky', left:0, bgcolor: '#16c7ca'}}>#</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Actions</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '180px'}}>Example</TableCell>
                            <TableCell sx={{ color:'rgb(88 28 135 / var(--tw-bg-opacity))', font:'bold', fontSize:'20px', width: '100px', position:'sticky', right:0, bgcolor: '#16c7ca'}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    {isshow && <EditModal setIsShow={setIsShow} />}

                    <TableBody>
                        <TableRow>
                            <TableCell sx={{position:'sticky', left:0, bgcolor: 'white'}}>1</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell sx={{ position:'sticky', right:0, bgcolor: 'white'}}>
                               <div className={`w-[100%] flex`}>
                               <IconButton onClick={editHandler}>
                                    <EditIcon  fontSize="medium" sx={{color:"yellow"}}/>
                               </IconButton>
                                <IconButton>
                                    <DeleteIcon  fontSize="medium" sx={{color:"red"}}/>
                                </IconButton>
                               </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{position:'sticky', left:0, bgcolor: 'white'}}>2</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell sx={{ position:'sticky', right:0, bgcolor: 'white'}}>
                            <div className={`w-[100%] flex`}>
                               <IconButton onClick={editHandler}>
                                    <EditIcon  fontSize="medium" sx={{color:"yellow"}}/>
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon  fontSize="medium" sx={{color:"red"}}/>
                                </IconButton>
                               </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </AdminLayout>
    ) : navigate('/admin-login')
}

export default MainAdmin