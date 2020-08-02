import React from "react"
import { NextPage } from "next"
import { Button } from "@material-ui/core"
import Drawer from "./../components/UserDashBoard/Drawer"



const UserDashboard: NextPage = () => {

    const [drawer, setDrawer] = React.useState(false)



    return <div>
        <Drawer />

        <Button onClick={() => {
            setDrawer(!drawer)
        }}>Open</Button>
    </div>

}

export default UserDashboard