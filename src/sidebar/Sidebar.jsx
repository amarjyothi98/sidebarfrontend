import './sidebar.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';

export default function Sidebar () {

    const userManagement = [
        {
            id: 1, 
            data: "All Users"
        }, 
        {
            id: 2, 
            data: "Add User"
        },
        {
            id: 3, 
            data: "Add Role"
        },
        {
            id: 4, 
            data: "Add Permission to role"
        },
    ]

    return (
        <div className="sidebar">
            <p className='sidebarTop'>ASK MANTU LOGO</p>
            <div className='sidebarMain'>
                <div className="sidebarAccount">
                    <div>
                        <AccountCircleIcon style={{ fontSize: "100px" }}/>
                    </div>
                    <div style={{ padding: "20px 0 0 0" }}>
                        <p>Welcome,</p>
                        <p style={{
                            color: "var(--primary)", 
                            fontSize: "20px", 
                            fontWeight: "bold"
                        }}>AskMantu Admin</p>
                    </div>
                </div>

                <div className='sidebarGeneral'>

                    <p style={{ fontWeight: "550", color: "var(--primary)" }}>GENERAL</p>

                    <div>
                        <div className='sidebarDropOption'>
                            <EditCalendarIcon style={{ fontSize: "35px" }} htmlColor='var(--primary)'/>
                            <p>User Management</p>
                            <ExpandMoreIcon className='dropIcons'/>
                        </div>

                        <div className='sidebarDropOption'>
                            <DesktopWindowsOutlinedIcon style={{ fontSize: "35px" }} htmlColor='var(--primary)'/>
                            <p>Configuration</p>
                            <ExpandMoreIcon className='dropIcons'/>
                        </div>

                        <div className='sidebarDropOption'>
                            <GroupsIcon style={{ fontSize: "35px" }} htmlColor='var(--primary)'/>
                            <p>Integration</p>
                            <ExpandMoreIcon className='dropIcons'/>
                        </div>
                        
                        <div className='sidebarDropOption'>
                            <EmailIcon style={{ fontSize: "35px" }} htmlColor='var(--primary)'/>
                            <p>Email</p>
                            <ExpandMoreIcon className='dropIcons'/>
                        </div>

                    </div>
                </div>

                <div className='sidebarGeneral'>

                    <p style={{ fontWeight: "550", color: "var(--primary)" }}>ADVANCED</p>

                    <div>
                        <div className='sidebarDropOption'>
                            <InfoIcon style={{ fontSize: "35px" }} htmlColor='var(--primary)'/>
                            <p>Logs</p>
                            <ExpandMoreIcon className='dropIcons'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}