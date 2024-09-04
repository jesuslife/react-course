"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = require("react");
var recharts_1 = require("recharts");
var lucide_react_1 = require("lucide-react");
var lineData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
];
var barData = [
    { name: 'Product A', sales: 4000, revenue: 2400 },
    { name: 'Product B', sales: 3000, revenue: 1398 },
    { name: 'Product C', sales: 2000, revenue: 9800 },
    { name: 'Product D', sales: 2780, revenue: 3908 },
    { name: 'Product E', sales: 1890, revenue: 4800 },
];
var menuItems = [
    {
        title: 'Overview',
        icon: lucide_react_1.Laptop,
        subItems: ['Dashboard', 'Projects', 'Tasks']
    },
    {
        title: 'Analytics',
        icon: lucide_react_1.BarChart,
        subItems: ['Performance', 'Conversion', 'Reports']
    },
    {
        title: 'Team',
        icon: lucide_react_1.Users,
        subItems: ['Members', 'Roles', 'Permissions']
    },
    {
        title: 'Settings',
        icon: lucide_react_1.Settings,
        subItems: ['General', 'Security', 'Notifications']
    }
];
function Component() {
    var _a = (0, react_1.useState)(false), isSidebarOpen = _a[0], setIsSidebarOpen = _a[1];
    var _b = (0, react_1.useState)([]), openMenus = _b[0], setOpenMenus = _b[1];
    var _c = (0, react_1.useState)('Dashboard'), selectedOption = _c[0], setSelectedOption = _c[1];
    var toggleMenu = function (title) {
        setOpenMenus(function (prev) {
            return prev.includes(title) ? prev.filter(function (item) { return item !== title; }) : __spreadArray(__spreadArray([], prev, true), [title], false);
        });
    };
    var handleSubItemClick = function (subItem) {
        setSelectedOption(subItem);
    };
    return (<div className="flex h-screen bg-gradient-to-br from-white to-[#f0f0f0] text-gray-800">
      {/* Sidebar */}
      <aside className={"".concat(isSidebarOpen ? 'translate-x-0' : '-translate-x-full', " fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0")}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-center h-16 bg-gradient-to-r from-[#ed7522] to-[#fed600]">
            <h2 className="text-2xl font-bold text-white">Dashboard</h2>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {menuItems.map(function (item) { return (<div key={item.title} className="mb-2">
                <button onClick={function () { return toggleMenu(item.title); }} className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5"/>
                    <span>{item.title}</span>
                  </div>
                  {openMenus.includes(item.title) ? (<lucide_react_1.ChevronUp className="h-4 w-4"/>) : (<lucide_react_1.ChevronDown className="h-4 w-4"/>)}
                </button>
                {openMenus.includes(item.title) && (<div className="ml-6 mt-2 space-y-1">
                    {item.subItems.map(function (subItem) { return (<button key={subItem} onClick={function () { return handleSubItemClick(subItem); }} className={"block w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ".concat(selectedOption === subItem ? 'bg-gray-100 font-medium' : '')}>
                        {subItem}
                      </button>); })}
                  </div>)}
              </div>); })}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <button onClick={function () { return setIsSidebarOpen(!isSidebarOpen); }} className="p-2 rounded-md lg:hidden hover:bg-gray-100">
            <lucide_react_1.Menu className="h-6 w-6"/>
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Futuristic Dashboard</h1>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ed7522] to-[#fed600]"></div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Performance Overview</h3>
              <recharts_1.ResponsiveContainer width="100%" height={300}>
                <recharts_1.LineChart data={lineData}>
                  <recharts_1.CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
                  <recharts_1.XAxis dataKey="name" stroke="#333333"/>
                  <recharts_1.YAxis stroke="#333333"/>
                  <recharts_1.Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #e0e0e0' }} itemStyle={{ color: '#333333' }}/>
                  <recharts_1.Line type="monotone" dataKey="value" stroke="#ed7522" strokeWidth={2}/>
                </recharts_1.LineChart>
              </recharts_1.ResponsiveContainer>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Product Performance</h3>
              <recharts_1.ResponsiveContainer width="100%" height={300}>
                <recharts_1.BarChart data={barData}>
                  <recharts_1.CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
                  <recharts_1.XAxis dataKey="name" stroke="#333333"/>
                  <recharts_1.YAxis stroke="#333333"/>
                  <recharts_1.Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #e0e0e0' }} itemStyle={{ color: '#333333' }}/>
                  <recharts_1.Bar dataKey="sales" fill="#009382"/>
                  <recharts_1.Bar dataKey="revenue" fill="#ed7522"/>
                </recharts_1.BarChart>
              </recharts_1.ResponsiveContainer>
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
        ].map(function (metric) { return (<div key={metric.title} className={"".concat(metric.color, " p-4 rounded-lg text-white")}>
                  <h4 className="text-lg font-medium mb-2">{metric.title}</h4>
                  <p className="text-3xl font-bold">{metric.value}</p>
                </div>); })}
            </div>
          </div>
        </main>
      </div>
    </div>);
}
exports["default"] = Component;
