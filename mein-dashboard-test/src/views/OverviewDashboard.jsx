// src/views/OverviewDashboard.jsx
import React, { useState, useEffect } from 'react';
import GlassCard from '../components/ui/GlassCard';
import MetricCard from '../components/kpi/MetricCard';
import AdvancedChart from '../components/charts/AdvancedChart';
import KPICard from '../components/kpi/KPICard';
import {
    DollarSign, Calendar, UserCheck, Star, Trophy, Zap, Wifi, Users,
    MousePointer, TrendingUp, CreditCard, Wallet, Percent, UserPlus, Receipt, MessageSquare
} from '../lib/icons';

// HINWEIS: Diese Sub-Komponenten werden nur hier verwendet.
// Es ist daher übersichtlicher, sie direkt in dieser Datei zu belassen.
const MyPerformance = ({ dark }) => {
    const performanceData = {
        name: 'Max Mustermann',
        avatar: '👨',
        role: 'Inhaber & Stylist',
        performance: 94,
        todayClients: 12,
        todayRevenue: 1247,
        monthClients: 276,
        monthRevenue: 24580,
        rating: 4.9,
        reviews: 189
    };

    return (
        <GlassCard dark={dark}>
            <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Meine Performance
                </h3>
                <Trophy className={`w-5 h-5 ${dark ? 'text-yellow-500' : 'text-yellow-600'}`} />
            </div>

            <div className={`p-4 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{performanceData.avatar}</div>
                    <div className="flex-1">
                        <p className={`font-semibold text-lg ${dark ? 'text-white' : 'text-gray-900'}`}>
                            {performanceData.name}
                        </p>
                        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                            {performanceData.role}
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center space-x-1">
                            <span className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {performanceData.rating}
                            </span>
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        </div>
                        <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                            {performanceData.reviews} Bewertungen
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${dark ? 'bg-black/10' : 'bg-white'}`}>
                        <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mb-1`}>
                            Heute
                        </p>
                        <p className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            €{performanceData.todayRevenue.toLocaleString('de-DE')}
                        </p>
                        <p className={`text-sm ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                            {performanceData.todayClients} Kunden
                        </p>
                    </div>
                    <div className={`p-3 rounded-lg ${dark ? 'bg-black/10' : 'bg-white'}`}>
                        <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mb-1`}>
                            Diesen Monat
                        </p>
                        <p className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            €{performanceData.monthRevenue.toLocaleString('de-DE')}
                        </p>
                        <p className={`text-sm ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                            {performanceData.monthClients} Kunden
                        </p>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                            Performance Score
                        </span>
                        <span className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            {performanceData.performance}%
                        </span>
                    </div>
                    <div className={`h-3 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                            style={{ width: `${performanceData.performance}%` }}
                        />
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

const LiveWebsiteStats = ({ dark }) => {
    const [liveVisitors, setLiveVisitors] = useState(42);

    useEffect(() => {
        const interval = setInterval(() => {
            setLiveVisitors(prev => Math.max(20, prev + Math.floor(Math.random() * 7) - 3));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <GlassCard dark={dark}>
            <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Live Analytics
                </h3>
                <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>Live</span>
                    </div>
                    <Wifi className={`w-4 h-4 ${dark ? 'text-white/40' : 'text-gray-400'}`} />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <Users className="w-4 h-4 text-green-500 mb-2" />
                    <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                        {liveVisitors}
                    </p>
                    <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                        Live Besucher
                    </p>
                </div>
                <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <MousePointer className="w-4 h-4 text-blue-500 mb-2" />
                    <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                        2.4k
                    </p>
                    <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                        Klicks heute
                    </p>
                </div>
            </div>

            <div className={`p-4 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <AdvancedChart
                    type="line"
                    data={[25, 32, 28, 35, 42, 38, 45, 40, 42]}
                    dark={dark}
                    height={80}
                />
            </div>
        </GlassCard>
    );
};

const DaySchedule = ({ dark }) => {
    const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
    const appointments = [
        { time: '09:00', duration: 2, client: 'Anna Müller', service: 'Färben & Schnitt', price: 120, status: 'confirmed' },
        { time: '11:30', duration: 1, client: 'Max Schmidt', service: 'Herrenschnitt', price: 35, status: 'confirmed' },
        { time: '14:00', duration: 1.5, client: 'Julia Weber', service: 'Styling', price: 65, status: 'pending' },
        { time: '16:00', duration: 1, client: 'Thomas Klein', service: 'Bartpflege', price: 45, status: 'confirmed' }
    ];

    return (
        <div className="space-y-2">
            {hours.map((hour, index) => {
                // Find appointments that start within this hour slot
                const appointment = appointments.find(apt => {
                    const aptHour = parseInt(apt.time.split(':')[0]);
                    const currentHour = parseInt(hour.split(':')[0]);
                    return aptHour === currentHour;
                });
                const isBooked = !!appointment;

                return (
                    <div key={hour} className={`
                        flex items-center p-3 rounded-lg border transition-all
                        ${isBooked
                        ? appointment.status === 'pending'
                            ? dark
                                ? 'bg-yellow-500/10 border-yellow-500/30'
                                : 'bg-yellow-50 border-yellow-300'
                            : dark
                                ? 'bg-blue-500/10 border-blue-500/30'
                                : 'bg-blue-50 border-blue-300'
                        : dark
                            ? 'bg-white/5 border-white/10 hover:bg-white/10'
                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }
                    `}>
                        <span className={`w-16 text-sm font-medium ${
                            dark ? 'text-white/60' : 'text-gray-600'
                        }`}>
                            {hour}
                        </span>

                        {isBooked ? (
                            <div className="flex-1 flex items-center justify-between ml-4">
                                <div>
                                    <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {appointment.client}
                                    </p>
                                    <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                        {appointment.service} • {appointment.time}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    {appointment.status === 'pending' && (
                                        <span className="text-xs text-yellow-500 font-medium">
                                            Unbestätigt
                                        </span>
                                    )}
                                    <p className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        €{appointment.price}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className={`flex-1 text-center ml-4 ${
                                dark ? 'text-white/40' : 'text-gray-400'
                            }`}>
                                <p className="text-sm">Verfügbar</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const FinancialOverview = ({ dark }) => {
    const financialData = {
        revenue: { current: 24580, previous: 22100, target: 25000 },
        expenses: { current: 8420, previous: 8900, target: 8000 },
        profit: { current: 16160, previous: 13200, target: 17000 },
        margin: { current: 65.7, previous: 59.7, target: 68 }
    };

    return (
        <GlassCard dark={dark}>
            <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-6`}>
                Finanzübersicht - Monat
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <KPICard
                    title="Umsatz"
                    value={financialData.revenue.current}
                    target={financialData.revenue.target}
                    icon={TrendingUp}
                    color="green"
                    dark={dark}
                    trend={11.2}
                />
                <KPICard
                    title="Ausgaben"
                    value={financialData.expenses.current}
                    target={financialData.expenses.target}
                    icon={CreditCard}
                    color="red"
                    dark={dark}
                    trend={-5.4}
                />
                <KPICard
                    title="Gewinn"
                    value={financialData.profit.current}
                    target={financialData.profit.target}
                    icon={Wallet}
                    color="blue"
                    dark={dark}
                    trend={22.4}
                />
                <KPICard
                    title="Marge %"
                    value={financialData.margin.current}
                    target={financialData.margin.target}
                    icon={Percent}
                    color="purple"
                    dark={dark}
                    trend={10.1}
                />
            </div>

            <div className={`p-4 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <AdvancedChart
                    type="line"
                    data={[18000, 19500, 21000, 20500, 22100, 24580]}
                    labels={['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun']}
                    dark={dark}
                    height={150}
                />
            </div>
        </GlassCard>
    );
};


const OverviewDashboard = ({ dark }) => {
    const metrics = [
        {
            icon: DollarSign,
            label: 'Umsatz heute',
            value: '€1,247',
            change: 18.5,
            trend: 'up',
            subtitle: '15 Kunden',
            chartData: [680, 720, 695, 780, 750, 820, 790, 850, 920, 980, 1100, 1247]
        },
        {
            icon: Calendar,
            label: 'Termine',
            value: '12/16',
            change: 12.5,
            trend: 'up',
            subtitle: '4 freie Slots',
            chartData: [10, 9, 11, 8, 9, 10, 11, 12, 13, 12, 11, 12]
        },
        {
            icon: UserCheck,
            label: 'Stammkunden',
            value: '92%',
            change: 4.2,
            trend: 'up',
            subtitle: '254 von 276',
            chartData: [85, 86, 87, 86, 88, 88, 89, 90, 91, 91, 92, 92]
        },
        {
            icon: Star,
            label: 'Bewertung',
            value: '4.9',
            change: 0.2,
            trend: 'up',
            subtitle: '189 Reviews',
            chartData: [4.7, 4.8, 4.8, 4.8, 4.9, 4.9, 4.9, 4.9, 4.9, 4.9, 4.9, 4.9]
        },
        {
            icon: Trophy,
            label: 'Ziel',
            value: '87%',
            change: 15.1,
            trend: 'up',
            subtitle: '€21.7k / €25k',
            chartData: [65, 68, 70, 72, 75, 78, 80, 82, 84, 85, 86, 87]
        },
        {
            icon: Zap,
            label: 'Effizienz',
            value: '94%',
            change: 6.3,
            trend: 'up',
            subtitle: 'Auslastung',
            chartData: [88, 89, 88, 90, 91, 92, 91, 93, 92, 93, 94, 94]
        }
    ];

    return (
        <div className="space-y-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {metrics.map((metric, index) => (
                    <MetricCard
                        key={index}
                        {...metric}
                        dark={dark}
                    />
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Day Schedule */}
                <div className="lg:col-span-2">
                    <GlassCard dark={dark}>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                Tagesübersicht
                            </h3>
                            <div className="flex items-center space-x-2">
                                <Calendar className={`w-4 h-4 ${dark ? 'text-white/40' : 'text-gray-400'}`} />
                                <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Heute, {new Date().toLocaleDateString('de-DE')}
                                </span>
                            </div>
                        </div>
                        <DaySchedule dark={dark} />
                    </GlassCard>
                </div>

                {/* Performance & Stats */}
                <div className="space-y-6">
                    <MyPerformance dark={dark} />
                    <LiveWebsiteStats dark={dark} />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FinancialOverview dark={dark} />

                {/* Quick Actions */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-6`}>
                        Schnellaktionen
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className={`p-4 rounded-lg ${
                            dark
                                ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                                : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                        } transition-all text-left`}>
                            <Calendar className={`w-5 h-5 ${dark ? 'text-blue-400' : 'text-blue-600'} mb-2`} />
                            <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                Termin buchen
                            </p>
                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mt-1`}>
                                Nächster Slot: 15:00
                            </p>
                        </button>
                        <button className={`p-4 rounded-lg ${
                            dark
                                ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                                : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                        } transition-all text-left`}>
                            <UserPlus className={`w-5 h-5 ${dark ? 'text-green-400' : 'text-green-600'} mb-2`} />
                            <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                Neuer Kunde
                            </p>
                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mt-1`}>
                                Schnell erfassen
                            </p>
                        </button>
                        <button className={`p-4 rounded-lg ${
                            dark
                                ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                                : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                        } transition-all text-left`}>
                            <Receipt className={`w-5 h-5 ${dark ? 'text-purple-400' : 'text-purple-600'} mb-2`} />
                            <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                Rechnung
                            </p>
                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mt-1`}>
                                Erstellen & senden
                            </p>
                        </button>
                        <button className={`p-4 rounded-lg ${
                            dark
                                ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                                : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                        } transition-all text-left`}>
                            <MessageSquare className={`w-5 h-5 ${dark ? 'text-orange-400' : 'text-orange-600'} mb-2`} />
                            <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                SMS Erinnerung
                            </p>
                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mt-1`}>
                                An alle morgen
                            </p>
                        </button>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default OverviewDashboard;