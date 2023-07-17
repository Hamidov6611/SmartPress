import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import { slide as Menu } from 'react-burger-menu'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';



const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
  margin: '20px 0'
};

const Header = () => {
  const [drop, setDrop] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const [sidedrop, setSideDrop] = useState(false)
  const [sidedrop2, setSideDrop2] = useState(false)
  const [menu, setMenu] = useState(true)
  const [submenu, setSubMenu] = useState(false)
  const dropHandler = () => setDrop(prev => !prev)
  const dropHandler2 = () => setDrop2(prev => !prev)
  const menuHandler = () => setMenu(prev => !prev)
  
  return (
    <div className={`w-[100%] sticky top-0 z-[99900000] h-[96px] bg-white border-b-4 border-b-[#dbd9d9]`}>
      <div className={`w-[90%] lg:w-[80%] mx-auto h-[100%] flex flex-row items-center`}>
        <div className={`w-[50%] md:w-[15%] flex cursor-pointer items-center`}>
        { menu &&  (<div className={`flex md:hidden`} onClick={ menuHandler }>
           <DehazeIcon fontSize='large' sx={{marginRight:'20px', color:'#004CB2', }}/> 
          </div>) }
          <Link to={'/'} className={`w-[130px] md:w-[120px] lg:w-[160px] h-[49px]`}>
          <img src={logo} alt='logo' width={'100%'} height={'100%'}/>
          </Link>
          
        </div>
          
         {!menu && (
          <div className={`fixed z-50 left-0 top-0 w-[100%] h-[100%] overflow-y-auto gammenu`} onClick={() => setMenu(true)}>
            <div className={`bg-[#16c7ca] w-[250px] h-[100%] sidebarmenu`} onClick={e => e.stopPropagation()}>
              <Link to={'/Онас'} className={`h-[49px]`} onClick={() => setMenu(true)}>
              <img src={logo} alt='logo' width={'100%'} height={'100%'}/>
              </Link>

              <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem button>
                  <Link to={`/`} className={`flex items-center h-[100%]`}>
                    <p className={`font-montserrat text-[20px]`}>О компании</p>
                  </Link>
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <Link className={`flex items-center h-[100%]`}>
                    <p className={`font-montserrat text-[20px]`}>Smart решения</p>
                    { sidedrop ? <ArrowForwardIosIcon 
                   sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}
                    onClick={() => setSideDrop(prev => !prev)}
                    /> : <ExpandLessIcon 
                    sx={{fontSize:'20px', marginLeft:'20px', }}
                    onClick={() => setSideDrop(prev => !prev)}
                    
                    />}
                  </Link>
                </ListItem>
                {!sidedrop && (
                  <>
                  
                   <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>по типу отходов</p>
                      {/* <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/> */}
                    </Link>
                  </ListItem>

                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Смешанные отходы</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}
                      onClick={() => setSubMenu(true)}
                      />
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>БИО отходы</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Картон и макулатура</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Древесина (паллеты)</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Металл и жесть</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Стекло</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Твердый пластик</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Вспененные пластики</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Текстиль и ветошь</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Пыль и сажа</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  </>
                )}
                <ListItem button divider>
                  <Link className={`flex items-center h-[100%]`}>
                    <p className={`font-montserrat text-[20px]`}>Б/у оборудование</p>
                    { sidedrop2 ? <ArrowForwardIosIcon 
                   sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}
                    onClick={() => setSideDrop2(prev => !prev)}
                    /> : <ExpandLessIcon 
                    sx={{fontSize:'20px', marginLeft:'20px', }}
                    onClick={() => setSideDrop2(prev => !prev)}
                    
                    />}
                  </Link>
                </ListItem>

                {!sidedrop2 && (
                  <>
                   <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>по типу отходов</p>
                      {/* <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/> */}
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Смешанные отходы</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>БИО отходы</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Картон и макулатура</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Древесина (паллеты)</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Металл и жесть</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Стекло</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Твердый пластик</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Вспененные пластики</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Текстиль и ветошь</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  <ListItem button divider>
                    <Link className={`flex items-center h-[100%]`}>
                      <p className={`font-montserrat text-[16px]`}>Пыль и сажа</p>
                      <ArrowForwardIosIcon sx={{fontSize:'16px', marginLeft:'20px', position:'absolute', right: '20px' }}/>
                    </Link>
                  </ListItem>
                  </>
                )}
                
                <ListItem button>
                  <Link to={`/`} className={`flex items-center h-[100%]`}>
                    <p className={`font-montserrat text-[20px]`}>Smart сервис</p>
                  </Link>
                </ListItem>
                <Divider light />
                <ListItem button>
                  <Link to={`/`} className={`flex items-center h-[100%]`}>
                    <p className={`font-montserrat text-[20px]`}>Производители</p>
                  </Link>
                </ListItem>
                <Divider light />
                <ListItem button>
                  <Link to={`/`} className={`flex items-center h-[100%]`}>
                    <p className={`font-montserrat text-[20px]`}>Новости</p>
                  </Link>
                </ListItem>
                <Divider light />
                <ListItem button>
                  <Link to={`/`} className={`flex items-center h-[100%]`}>
                    <p className={`font-montserrat text-[20px]`}>Контакты</p>
                  </Link>
                </ListItem>
            </List>
              
            </div>
            
            <div className={`fixed top-0 left-[250px] bg-[#16c7ca] h-[50px] w-[50px] sidebarmenu flex justify-center items-center hover:bg-[#004CB2] cursor-pointer p-3`}>
              <ClearIcon onClick={() => setMenu(true)} sx={{color:'white'}} fontSize='large' />
            </div>
          </div>
         )}

        <div className={`hidden w-[80%] md:flex md:flex-row items-center justify-around`}>
         
          <Link to={'/Онас'} ><p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>О компании</p></Link>
          <Link  to={`/решения`} className={`flex flex-row items-center`}>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>
              <p>Smart</p>
              <p>решения</p>
            </p>
            {drop ? <IoMdArrowDropup onClick={dropHandler}/> : <IoMdArrowDropdown onClick={dropHandler}/>}
          </Link>

          <Link to={`/Оборудование`} className={`flex flex-row items-center`}>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>
              <p>Б/у</p>
              <p>оборудование</p>
            </p>
            {drop2 ? <IoMdArrowDropup onClick={dropHandler2}/> : <IoMdArrowDropdown onClick={dropHandler2}/>}
          </Link>
          
          <Link to={`/service`}>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>
              <p>Smart</p>
              <p>сервис</p>
            </p>
          </Link>
          <Link>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>Производители</p>
          </Link>
          <Link>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>Новости</p>
          </Link>
          <Link>
            <p className={`font-[600] text-[14px] lg:text-[16px] leading-[19.5px] text-[#343434] mr-1 block text-center`}>Контакты</p>
          </Link>
        </div>
        <div className={`w-[50%] text-end md:w-[5%] flex flex-col`}>
          <Link><strong className={`font-montserrat leading-[19.5px] text-[16px] text-[#343434]`}>RU</strong></Link>
          <Link><strong className={`font-montserrat leading-[19.5px] text-[16px] text-[#343434]`}>EN</strong></Link>
        </div>
      </div>
    </div>
  )
}

export default Header