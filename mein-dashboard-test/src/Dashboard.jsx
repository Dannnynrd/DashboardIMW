// src/Dashboard.jsx
import React, { useState } from 'react';

// Importiere die neuen, aufgeteilten "View"-Komponenten
import OverviewDashboard from './views/OverviewDashboard';
import AppointmentsView from './views/AppointmentsView';
import CustomerList from './views/CustomerList';
import ServicesManagement from './views/ServicesManagement';
import FinancialDetails from './views/FinancialDetails';
import AnalyticsDashboard from './views/AnalyticsDashboard';
import MarketingDashboard from './views/MarketingDashboard';

// Importiere die restlichen Komponenten
import AIAssistant from './components/ai/AIAssistant';

// Importiere die Icons aus der zentralen Datei
import {
    LayoutDashboard, Calendar, Users, Scissors, CreditCard, Receipt, BarChart3,
    Sparkles, Share2, Brain, Menu, Settings, LogOut, Sun, Moon, Bell, Search
} from './lib/icons';

// Der Name der Funktion muss mit dem Export übereinstimmen
export default function ProfessionalSalonDashboard() {
    const [darkMode, setDarkMode] = useState(true);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeView, setActiveView] = useState('overview');
    const [showNotifications, setShowNotifications] = useState(false);

    const navigationSections = [
        {
            title: 'Hauptmenü',
            items: [
                { id: 'overview', icon: LayoutDashboard, label: 'Übersicht', badge: null },
                { id: 'appointments', icon: Calendar, label: 'Termine', badge: '8' },
                { id: 'customers', icon: Users, label: 'Kunden', badge: '276' }
            ]
        },
        {
            title: 'Geschäft',
            items: [
                { id: 'services', icon: Scissors, label: 'Services', badge: null },
                { id: 'finance', icon: CreditCard, label: 'Finanzen', badge: null },
                { id: 'invoices', icon: Receipt, label: 'Rechnungen', badge: '3' }
            ]
        },
        {
            title: 'Analyse & Marketing',
            items: [
                { id: 'analytics', icon: BarChart3, label: 'Analysen', badge: 'NEU' },
                { id: 'marketing', icon: Sparkles, label: 'Marketing', badge: null },
                { id: 'social', icon: Share2, label: 'Social Media', badge: null },
                { id: 'ai-insights', icon: Brain, label: 'AI Insights', badge: 'PRO' }
            ]
        }
    ];

    const notifications = [
        { id: 1, type: 'appointment', text: 'Neuer Termin: Anna Müller um 14:00', time: 'vor 5 Min' },
        { id: 2, type: 'review', text: 'Neue 5-Sterne Bewertung erhalten', time: 'vor 2 Std' },
        { id: 3, type: 'payment', text: 'Zahlung eingegangen: €120', time: 'vor 3 Std' },
        { id: 4, type: 'reminder', text: 'Termin-Erinnerung: Max Schmidt um 11:30', time: 'vor 4 Std' }
    ];

    const renderContent = () => {
        switch (activeView) {
            case 'appointments':
                return <AppointmentsView dark={darkMode} />;
            case 'customers':
                return <CustomerList dark={darkMode} />;
            case 'services':
                return <ServicesManagement dark={darkMode} />;
            case 'finance':
                return <FinancialDetails dark={darkMode} />;
            case 'analytics':
                return <AnalyticsDashboard dark={darkMode} />;
            case 'marketing':
            case 'social':
                return <MarketingDashboard dark={darkMode} />;
            default:
                return <OverviewDashboard dark={darkMode} />;
        }
    };

    const getHeaderText = () => {
        const item = navigationSections.flatMap(s => s.items).find(i => i.id === activeView);
        if (activeView === 'overview') return 'Guten Tag, Max!';
        if (item) return item.label;
        if (activeView === 'social') return 'Social Media';
        if (activeView === 'ai-insights') return 'AI Insights';
        if (activeView === 'invoices') return 'Rechnungen';
        return 'Dashboard';
    }


    return (
        <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            {/* Enhanced Sidebar */}
            <aside className={`
                fixed left-0 top-0 h-full z-40
                ${darkMode ? 'bg-black/80' : 'bg-white'}
                backdrop-blur-xl border-r
                ${darkMode ? 'border-white/10' : 'border-gray-200'}
                transition-all duration-300
                ${sidebarCollapsed ? 'w-20' : 'w-72'}
            `}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className={`p-6 border-b ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
                        <div className="flex items-center justify-between h-10">
                            {!sidebarCollapsed && (
                                <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 rounded-xl ${
                                        darkMode ? 'bg-white/10' : 'bg-gray-100'
                                    } flex items-center justify-center`}>
                                        <Scissors className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            SalonPro
                                        </h1>
                                        <p className={`text-xs ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                                            Professional Edition
                                        </p>
                                    </div>
                                </div>
                            )}
                            <button
                                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                                className={`${darkMode ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'} ${sidebarCollapsed ? 'mx-auto' : ''}`}
                            >
                                {sidebarCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                        {navigationSections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                {!sidebarCollapsed && (
                                    <p className={`text-xs font-medium uppercase tracking-wider mb-2 px-3 ${
                                        darkMode ? 'text-white/40' : 'text-gray-500'
                                    }`}>
                                        {section.title}
                                    </p>
                                )}
                                <nav className="space-y-1">
                                    {section.items.map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveView(item.id)}
                                            title={item.label}
                                            className={`
                                                w-full flex items-center p-3 rounded-lg
                                                transition-all duration-200 group
                                                ${sidebarCollapsed ? 'justify-center' : 'justify-between'}
                                                ${activeView === item.id
                                                ? darkMode
                                                    ? 'bg-white/10 text-white'
                                                    : 'bg-gray-100 text-gray-900'
                                                : darkMode
                                                    ? 'text-white/60 hover:text-white hover:bg-white/5'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }
                                            `}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <item.icon className="w-5 h-5 flex-shrink-0" />
                                                {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
                                            </div>
                                            {!sidebarCollapsed && item.badge && (
                                                <span className={`
                                                    px-2 py-0.5 text-xs font-medium rounded-full
                                                    ${item.badge === 'NEU' || item.badge === 'PRO' ? 'bg-green-500 text-white' :
                                                    darkMode ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}
                                                `}>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        ))}
                    </div>

                    {/* User Profile & Settings */}
                    <div className={`p-4 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'} space-y-2`}>
                        <button className={`w-full p-3 rounded-lg ${
                            darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                        } transition-colors flex items-center ${
                            sidebarCollapsed ? 'justify-center' : ''
                        } space-x-3`}>
                            <Settings className={`w-5 h-5 ${darkMode ? 'text-white/60' : 'text-gray-600'}`} />
                            {!sidebarCollapsed && (
                                <span className={`text-sm ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                                    Einstellungen
                                </span>
                            )}
                        </button>

                        <button className={`w-full p-3 rounded-lg ${
                            darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                        } transition-colors flex items-center ${
                            sidebarCollapsed ? 'justify-center' : ''
                        } space-x-3`}>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium flex-shrink-0">
                                M
                            </div>
                            {!sidebarCollapsed && (
                                <>
                                    <div className="flex-1 text-left overflow-hidden">
                                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'} truncate`}>
                                            Max Mustermann
                                        </p>
                                        <p className={`text-xs ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                                            Inhaber
                                        </p>
                                    </div>
                                    <LogOut className={`w-4 h-4 ${darkMode ? 'text-white/40' : 'text-gray-400'}`} />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className={`${sidebarCollapsed ? 'ml-20' : 'ml-72'} transition-all duration-300`}>
                {/* Enhanced Header */}
                <header className={`
                    sticky top-0 z-30 px-8 py-4
                    ${darkMode ? 'bg-black/80' : 'bg-white/90'}
                    backdrop-blur-xl border-b
                    ${darkMode ? 'border-white/10' : 'border-gray-200'}
                `}>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {getHeaderText()}
                            </h1>
                            <p className={`text-sm ${darkMode ? 'text-white/60' : 'text-gray-600'} mt-1`}>
                                {new Date().toLocaleDateString('de-DE', {
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long'
                                })} • Es wird ein großartiger Tag! ☀️
                            </p>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Search */}
                            <div className="relative">
                                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                                    darkMode ? 'text-white/40' : 'text-gray-400'
                                }`} />
                                <input
                                    type="text"
                                    placeholder="Suchen..."
                                    className={`pl-10 pr-4 py-2 rounded-lg text-sm ${
                                        darkMode
                                            ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                                            : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400'
                                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all`}
                                />
                            </div>

                            {/* Theme Toggle */}
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`p-2 rounded-lg ${
                                    darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                                } transition-colors`}
                            >
                                {darkMode ? (
                                    <Sun className={`w-5 h-5 text-white`} />
                                ) : (
                                    <Moon className={`w-5 h-5 text-gray-700`} />
                                )}
                            </button>

                            {/* Notifications */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowNotifications(!showNotifications)}
                                    className={`relative p-2 rounded-lg ${
                                        darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                                    } transition-colors`}
                                >
                                    <Bell className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                                </button>

                                {showNotifications && (
                                    <div
                                        onClick={() => setShowNotifications(false)}
                                        className={`absolute right-0 mt-2 w-80 ${
                                            darkMode ? 'bg-black/90 border-white/10' : 'bg-white border-gray-200'
                                        } backdrop-blur-xl rounded-xl shadow-xl border overflow-hidden animate-in fade-in-0 zoom-in-95`}>
                                        <div className={`p-4 border-b ${
                                            darkMode ? 'border-white/10' : 'border-gray-200'
                                        }`}>
                                            <h3 className={`font-semibold ${
                                                darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Benachrichtigungen</h3>
                                        </div>
                                        <div className="max-h-96 overflow-y-auto">
                                            {notifications.map(notification => (
                                                <div key={notification.id} className={`p-4 ${
                                                    darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                                                } transition-colors border-b ${
                                                    darkMode ? 'border-white/5' : 'border-gray-100'
                                                }`}>
                                                    <p className={`text-sm ${
                                                        darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                        {notification.text}
                                                    </p>
                                                    <p className={`text-xs mt-1 ${
                                                        darkMode ? 'text-white/40' : 'text-gray-400'
                                                    }`}>{notification.time}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={`p-2 text-center border-t ${
                                            darkMode ? 'border-white/10' : 'border-gray-200'
                                        }`}>
                                            <button className={`text-sm font-medium ${
                                                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                                            }`}>
                                                Alle ansehen
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main content area */}
                <main className="p-8">
                    {renderContent()}
                </main>

                {/* AI Assistant FAB */}
                <AIAssistant dark={darkMode} />
            </div>
        </div>
    );
}