import { useState } from "react"
// import { Link } from "react-router-dom"

import { FaBars } from "react-icons/fa"
import { ListMenu } from "./ListMenu"

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  const handleOpen = () => {
    setOpen(!open)
  }
  console.log("open", open)
  console.log("listmanu", ListMenu)
  return (
    <>
      <div
        className={`flex flex-col  bg-main-color h-screen p-5 ${
          open ? "w-72" : "w-20 items-center"
        } duration-300`}>
        <FaBars
          className={`text-white text-2xl cursor-pointer ${
            open && "ml-2 mr-2"
          } `}
          onClick={handleOpen}
        />

        <div className="mt-5">
          {ListMenu.map((menu) => {
            return (
              <>
                {/* <Link to={menu.link}> */}
                  <li
                    key={menu.id}
                    className="text-white flex justify-between items-center px-3 py-2 hover:bg-secondary-color hover:rounded duration-100 cursor-pointer">
                    <span>{menu.icon}</span>
                    {open && (
                      <>
                        <span className="grow ml-3">{menu.name}</span>
                        <span>{menu.notificationCount}</span>
                      </>
                    )}
                  </li>
                {/* </Link> */}
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Sidebar
