import { useState } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Menu, Laptop, BarChart as BarChartIcon, Users, Settings, ChevronDown, ChevronUp } from 'lucide-react'

const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
]

const barData = [
  { name: 'Product A', sales: 4000, revenue: 2400 },
  { name: 'Product B', sales: 3000, revenue: 1398 },
  { name: 'Product C', sales: 2000, revenue: 9800 },
  { name: 'Product D', sales: 2780, revenue: 3908 },
  { name: 'Product E', sales: 1890, revenue: 4800 },
]

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

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState('Dashboard')

  const toggleMenu = (title: string) => {
    setOpenMenus(prev =>
      prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]
    )
  } 

  const handleSubItemClick = (subItem: string) => {
    setSelectedOption(subItem)
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-white to-[#f0f0f0] text-gray-800">
      {/* Sidebar */}
      <aside
        className={`${
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
                  {openMenus.includes(item.title) ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
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

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md lg:hidden hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Futuristic Dashboard</h1>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ed7522] to-[#fed600]"></div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Performance Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" stroke="#333333" />
                  <YAxis stroke="#333333" />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #e0e0e0' }}
                    itemStyle={{ color: '#333333' }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#ed7522" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Product Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" stroke="#333333" />
                  <YAxis stroke="#333333" />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #e0e0e0' }}
                    itemStyle={{ color: '#333333' }}
                  />
                  <Bar dataKey="sales" fill="#009382" />
                  <Bar dataKey="revenue" fill="#ed7522" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Key Metrics for {selectedOption}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'Total Users', value: '10,234', color: 'bg-gray-800' },
                { title: 'Revenue', value: '$52,389', color: 'bg-[#ed7522]' },
                { title: 'Conversion Rate', value: '3.2%', color: 'bg-gray-600' },
                { title: 'Avg. Session', value: '4m 32s', color: 'bg-[#009382]' },
              ].map((metric) => (
                <div key={metric.title} className={`${metric.color} p-4 rounded-lg text-white`}>
                  <h4 className="text-lg font-medium mb-2">{metric.title}</h4>
                  <p className="text-3xl font-bold">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}