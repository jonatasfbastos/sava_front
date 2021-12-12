import SideBar from "../../components/side-bar/side-bar";
import data from '../../jsons/side-bar-settings.json'
import "./page-wraper-settings.css"

const PageWraperSettings = () => {
    return (
        <>
        <SideBar data={data}/>
            <div className="bodyyy">
                <p>quer cadastrar oq</p>
            </div>
        </>
    )
}

export default PageWraperSettings;