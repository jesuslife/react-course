import { useState } from 'react'
import { Laptop, BarChart as BarChartIcon, Users, Settings} from 'lucide-react'
import {ChevronDown,ChevronUp } from 'lucide-react'

const menuItems = [
    {
      title: 'Overview',
      icon: Laptop,
      subItems: ['Dashboard', 'Projects', 'Tasks']
    },
    {
      title: 'Analytics',
      icon: BarChartIcon,
      subItems: ['Performance', 'Conversion', 'Reports']
    },
    {
      title: 'Team',
      icon: Users,
      subItems: ['Members', 'Roles', 'Permissions']
    },
    {
      title: 'Settings',
      icon: Settings,
      subItems: ['General', 'Security', 'Notifications']
    }
  ]


const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [openMenus, setOpenMenus] = useState([])
    const [selectedOption, setSelectedOption] = useState('Dashboard')

    const toggleMenu = (title) => {
        setOpenMenus(prev =>
          prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]
        )
      }
    const handleSubItemClick = (subItem) => {
        setSelectedOption(subItem)
    }




    return (
    <div className="flex h-screen bg-gradient-to-br from-white to-[#f0f0f0] text-gray-800">
        <aside className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
      >
        <div className="flex h-full flex-col">
            <div className="flex items-center justify-center h-16 bg-gradient-to-r from-[#ed7522] to-[#fed600]">
                <h2 className="text-2xl font-bold text-white">Dashboard</h2>
            </div>
            <nav className="flex-1 space-y-1 p-4">
                {menuItems.map((item) => (
                    <div key={item.title} className="mb-2">
                        <button
                            onClick={() => toggleMenu(item.title)}
                            className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <div className="flex items-center space-x-2">
                                <item.icon className="h-5 w-5" />
                                <span>{item.title}</span>
                            </div>
                            {openMenus.includes(item.title) 
                            ? (<ChevronUp className="h-4 w-4" />)
                            : (<ChevronDown className="h-4 w-4" />)}
                        </button>
                        {openMenus.includes(item.title) && (
                            <div className="ml-6 mt-2 space-y-1"> 
                                {item.subItems.map((subItem) => (
                                    <button
                                        key={subItem}
                                        onClick={() => handleSubItemClick(subItem)}
                                        className={`block w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${
                                            selectedOption === subItem ? 'bg-gray-100 font-medium' : ''
                                        }`}
                                    >
                                        {subItem}
                                    </button>

                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
      </aside>


    {/*Main content*/}
    </div>
    )
}


export default App