import './mainPage.css'

import Sidebar from "../sidebar/Sidebar";
import Center from '../center/Center';

export default function MainPage () {
    return(
        <div className="mainContainer">
            <div className='mainContainerOne'>
                <Sidebar/>
            </div>
            <div className='mainContainerTwo'>
                <Center/>
            </div>
        </div>
    )
}