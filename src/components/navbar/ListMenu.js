import { FaBox, FaCalendarAlt, FaCalendarDay } from "react-icons/fa"

export const ListMenu = [
  {
    id: 1,
    name: "Inbox",
    icon: <FaBox />,
    notificationCount: 0,
    link: "/inbox",
  },
  {
    id: 2,
    name: "Today",
    icon: <FaCalendarAlt />,
    notificationCount: 1,
    link: "/homepage",
  },
  {
    id: 3,
    name: "Upcoming",
    icon: <FaCalendarDay />,
    notificationCount: 3,
    link: "/upcoming",
  },
]
