import React from "react"
import SideBar from "../navbar/SideBar"
import Homepage from "../pages/homepage/Homepage"

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Homepage />
      </div>
    </>
  )
}

export default Dashboard
