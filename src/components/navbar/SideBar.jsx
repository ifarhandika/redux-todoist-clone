import { useState } from "react"

import { FaBars } from "react-icons/fa"
import { ListMenu } from "./ListMenu"

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  const handleOpen = () => {
    setOpen(!open)
  }
  console.log("listmanu", ListMenu)
  return (
    <>
      <div
        className={`bg-main-color h-screen p-5 ${
          open ? "w-72" : "w-20 flex flex-col items-center"
        } duration-150`}>
        <FaBars
          className="text-white text-2xl cursor-pointer"
          onClick={handleOpen}
        />
        <div className="mt-5">
          {ListMenu.map((menu) => {
            return (
              <>
                {!open ? (
                  <>
                    <li
                      key={menu.id}
                      className="flex items-center justify-center pt-2 pb-2">
                      <span>{menu.icon}</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      key={menu.id}
                      className="flex items-center justify-between pt-2 pb-2">
                      <span className="mr-2 ml-1">{menu.icon}</span>
                      <span className="grow">{menu.name}</span>
                      <span>{menu.notificationCount}</span>
                    </li>
                  </>
                )}
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Sidebar
