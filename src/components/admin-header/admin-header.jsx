// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

const AdminHeader = ({isSidebar, setIsSidebar}) => {
    const [show, setShow] = useState(false)
    const [admin, setAdmin] = useState([])
    const navigate= useNavigate()
    useEffect(() => {
        let isAdmin = Cookies.get('admin')
        if(isAdmin?.length > 0) {
            setAdmin(JSON.parse(isAdmin))
        }else {
            setAdmin([])
        }
    }, [])


    

    const logOutHandler = (e) => {
        e.preventDefault()
        try {
            Cookies.remove("admin")
            navigate('/admin-login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`w-[100%] shadow-2xl mb-4 h-[80px] flex items-center sticky top-0 z-[99]`}>
            <div className={`w-[100%] flex justify-between items-center `} onClick={() => setShow(prev => !prev)}>
                <DehazeIcon fontSize='large' sx={{marginLeft:"50px", color:'#004CB2', cursor:'pointer'}} onClick={() => setIsSidebar(prev => !prev)}/>
                <div className={`mr-[50px] bg-purple-900 h-[50px] flex items-center justify-center w-[50px] rounded-[100%] cursor-pointer`}>
                    <p className={`text-white font-montserrat font-[600] text-[24px]`}>{admin?.login?.charAt(0)?.toUpperCase()}</p>
                </div>
            </div>
            {show && (
                <div className={`absolute top-[80px] right-[20px] w-[160px] z-[999]`}>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                    <ListItemText primary={admin?.login} />
                    </ListItem>
                    <Divider />
                    <ListItem button divider onClick={logOutHandler}>
                    <ListItemText primary="Exit" />
                    </ListItem>
                    
                </List>
                </div>
            )}
        </div>
    )
}

export default AdminHeader