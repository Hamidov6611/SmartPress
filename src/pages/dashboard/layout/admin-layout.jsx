import { Helmet } from "react-helmet"
import Sidebar from "../../../components/sidebar/sidebar.jsx"
import AdminHeader from "../../../components/admin-header/admin-header.jsx"
import { useState } from "react"


const AdminLayout = ({children, title, desc}) => {
    const [isSidebar, setIsSidebar] = useState(true)
    return (
        <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Helmet>
        <div className={`flex  w-[100%]`}>
          <div className={`w-[20%]`}>
          {isSidebar && <Sidebar />}
          </div>
          <div className={`flex flex-col w-[100%] ${!isSidebar ? 'w-[100%]' : 'md:w-[80%]'}`}>
            <AdminHeader isSidebar={isSidebar} setIsSidebar={setIsSidebar}/>
            <main className={`p-4`}>{children}</main>
          </div>

        </div>
    </div>
    )
}
export default AdminLayout