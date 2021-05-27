import React,{useState} from 'react'
import SidebarLogo from "../../assets/svg/sidebar-logo.svg"
import NavItem from './NavItem'
import logoHome from "../../assets/svg/home-icon.svg";

export default function Sidebar() {

    const [aktifLink,setAktifLink] = useState(0)

    return (
        <div>
            <div className="sidebar">
                <div className="sidebar__logo">
                    <img src={SidebarLogo} alt="" />
                </div>
                <nav>
                    <ul>
                        <NavItem onClick={()=>{setAktifLink(0)}} logo={logoHome} title="Ana Sayfa" to="/" className={aktifLink == 0 ? "active" : ""}/>
                        <NavItem onClick={()=>{setAktifLink(1)}} logo={logoHome} title="Oda Listesi" to="/oda-listesi"className={aktifLink == 1 ? "active" : ""} />
                        <NavItem onClick={()=>{setAktifLink(2)}} logo={logoHome} title="Rezerv Listesi" to="/rezervasyonlar"className={aktifLink == 2 ? "active" : ""} />
                    </ul>
                </nav>
                <p className="sidebar__alt text-center">
                    Emir Tanır tarafından hazırlanmıştır.
                </p>
            </div>
        </div>
    )
}
