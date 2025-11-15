"use client";

import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  FileText, 
  Calendar, 
  Settings, 
  Bell,
  Search,
  Menu,
  X,
  UserCheck,
  AlertCircle,
  TrendingUp,
  Activity,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PositionsPage from '../../pages/positions/page';

const BarangayDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'residents', label: 'Residents', icon: Users },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'officials', label: 'Officials', icon: UserCheck },
    { id: 'positions', label: 'Positions', icon: Users },
    { id: 'reports', label: 'Reports', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { 
      title: 'Total Residents', 
      value: '2,847', 
      change: '+12%', 
      icon: Users,
      color: 'bg-blue-500'
    },
    { 
      title: 'Pending Documents', 
      value: '23', 
      change: '-5%', 
      icon: FileText,
      color: 'bg-amber-500'
    },
    { 
      title: 'Upcoming Events', 
      value: '8', 
      change: '+2', 
      icon: Calendar,
      color: 'bg-green-500'
    },
    { 
      title: 'Active Cases', 
      value: '12', 
      change: '-3%', 
      icon: AlertCircle,
      color: 'bg-red-500'
    },
  ];

  const recentActivities = [
    { action: 'New resident registration', user: 'Juan Dela Cruz', time: '5 mins ago' },
    { action: 'Barangay clearance issued', user: 'Maria Santos', time: '15 mins ago' },
    { action: 'Community meeting scheduled', user: 'Admin', time: '1 hour ago' },
    { action: 'Indigency certificate requested', user: 'Pedro Reyes', time: '2 hours ago' },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 ease-in-out flex flex-col shadow-2xl`}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between border-b border-slate-700">
          {sidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-bold text-lg">Barangay</h2>
                <p className="text-xs text-slate-400">Management System</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30'
                    : 'hover:bg-slate-700/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
                {sidebarOpen && isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        {sidebarOpen && (
          <div className="p-4 border-t border-slate-700">
            <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
                A
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Admin User</p>
                <p className="text-xs text-slate-400">Barangay Captain</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-sm text-slate-600">Welcome back, Admin</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
              {/* Notifications */}
              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 space-y-6">
          {/* Render different content based on active menu */}
          {activeMenu === 'dashboard' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                            <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                            <div className="flex items-center gap-1 mt-2">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              <span className="text-sm font-medium text-green-500">{stat.change}</span>
                              <span className="text-xs text-slate-500">from last month</span>
                            </div>
                          </div>
                          <div className={`${stat.color} p-3 rounded-xl shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Charts and Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <Card className="lg:col-span-2 border-0 shadow-lg bg-white">
                  <CardHeader className="border-b border-slate-100">
                    <CardTitle className="text-lg font-semibold text-slate-900">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-slate-100">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="p-4 hover:bg-slate-50 transition-colors">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <Activity className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-slate-900">{activity.action}</p>
                              <p className="text-sm text-slate-600">{activity.user}</p>
                              <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-lg transition-all text-left">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5" />
                        <span className="font-medium">Add New Resident</span>
                      </div>
                    </button>
                    <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-lg transition-all text-left">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5" />
                        <span className="font-medium">Issue Document</span>
                      </div>
                    </button>
                    <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-lg transition-all text-left">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">Schedule Event</span>
                      </div>
                    </button>
                    <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-lg transition-all text-left">
                      <div className="flex items-center gap-3">
                        <Activity className="w-5 h-5" />
                        <span className="font-medium">Generate Report</span>
                      </div>
                    </button>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {activeMenu === 'residents' && (
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-2xl font-bold text-slate-900">Residents Management</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Residents Module</h3>
                  <p className="text-slate-600">Manage all resident records, demographics, and household information.</p>
                </div>
              </CardContent>
            </Card>
          )}

          {activeMenu === 'documents' && (
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-2xl font-bold text-slate-900">Document Management</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Documents Module</h3>
                  <p className="text-slate-600">Issue and track barangay clearances, certificates, and permits.</p>
                </div>
              </CardContent>
            </Card>
          )}

          {activeMenu === 'events' && (
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-2xl font-bold text-slate-900">Events & Activities</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Events Module</h3>
                  <p className="text-slate-600">Schedule and manage community events, meetings, and programs.</p>
                </div>
              </CardContent>
            </Card>
          )}

          {activeMenu === 'officials' && (
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-2xl font-bold text-slate-900">Barangay Officials</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center py-12">
                  <UserCheck className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Officials Module</h3>
                  <p className="text-slate-600">Manage barangay officials, positions, and responsibilities.</p>
                </div>
              </CardContent>
            </Card>
          )}
          {activeMenu === 'positions' && (
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-0">
                <PositionsPage />
              </CardContent>
            </Card>
          )}

          {activeMenu === 'reports' && (
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-2xl font-bold text-slate-900">Reports & Analytics</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center py-12">
                  <Activity className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Reports Module</h3>
                  <p className="text-slate-600">Generate reports, statistics, and analytics for decision making.</p>
                </div>
              </CardContent>
            </Card>
          )}

          {activeMenu === 'settings' && (
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-2xl font-bold text-slate-900">System Settings</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center py-12">
                  <Settings className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Settings Module</h3>
                  <p className="text-slate-600">Configure system preferences, user access, and barangay information.</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default BarangayDashboard;