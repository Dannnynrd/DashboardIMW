// src/views/AnalyticsDashboard.jsx
import React, { useState } from 'react';
import GlassCard from '../components/ui/GlassCard';
import AdvancedChart from '../components/charts/AdvancedChart';
import { TrendingUp, TrendingDown, Star } from '../lib/icons';

const AnalyticsDashboard = ({ dark }) => {
    const [timeRange, setTimeRange] = useState('month');

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Analytics & Insights
                </h2>
                <div className={`flex p-1 ${dark ? 'bg-white/10' : 'bg-gray-100'} rounded-lg`}>
                    <button
                        onClick={() => setTimeRange('week')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            timeRange === 'week'
                                ? dark ? 'bg-white text-black' : 'bg-white text-gray-900 shadow-sm'
                                : dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Woche
                    </button>
                    <button
                        onClick={() => setTimeRange('month')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            timeRange === 'month'
                                ? dark ? 'bg-white text-black' : 'bg-white text-gray-900 shadow-sm'
                                : dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Monat
                    </button>
                    <button
                        onClick={() => setTimeRange('year')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            timeRange === 'year'
                                ? dark ? 'bg-white text-black' : 'bg-white text-gray-900 shadow-sm'
                                : dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Jahr
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Trends */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Umsatzentwicklung
                    </h3>
                    <div className={`p-4 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                        <AdvancedChart
                            type="line"
                            data={[18000, 19500, 21000, 20500, 22100, 24580, 23900, 25200]}
                            labels={['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug']}
                            dark={dark}
                            height={200}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="text-center">
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                €24.6k
                            </p>
                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Aktueller Monat
                            </p>
                        </div>
                        <div className="text-center">
                            <p className={`text-2xl font-bold text-green-500`}>
                                +12.5%
                            </p>
                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Wachstum
                            </p>
                        </div>
                        <div className="text-center">
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                €295k
                            </p>
                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Jahresumsatz
                            </p>
                        </div>
                    </div>
                </GlassCard>

                {/* Service Performance */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Top Services
                    </h3>
                    <div className="space-y-3">
                        {[
                            { name: 'Färben & Schnitt', bookings: 156, revenue: 18720, trend: 12 },
                            { name: 'Herrenschnitt', bookings: 243, revenue: 8505, trend: -3 },
                            { name: 'Hochzeitsfrisur', bookings: 28, revenue: 3360, trend: 45 },
                            { name: 'Strähnen', bookings: 89, revenue: 7565, trend: 8 },
                            { name: 'Bartpflege', bookings: 124, revenue: 3100, trend: 22 }
                        ].map((service, idx) => (
                            <div key={idx} className={`p-3 rounded-lg ${
                                dark ? 'bg-white/5' : 'bg-gray-50'
                            }`}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`font-medium ${dark ? 'text-white' : 'text-gray-900'} text-sm`}>
                                        {service.name}
                                    </span>
                                    <div className={`flex items-center space-x-1 text-sm ${
                                        service.trend > 0 ? 'text-green-500' : 'text-red-500'
                                    }`}>
                                        {service.trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                        <span>{Math.abs(service.trend)}%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                        {service.bookings} Buchungen
                                    </span>
                                    <span className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        €{service.revenue.toLocaleString('de-DE')}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Customer Insights */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Kundenstatistiken
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                            <span className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>Neue Kunden</span>
                            <span className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>+23 diese Woche</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>Wiederkehrrate</span>
                            <span className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>89%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>Durchschn. Ausgaben</span>
                            <span className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>€75</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>Lifetime Value</span>
                            <span className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>€890</span>
                        </div>
                    </div>
                </GlassCard>

                {/* Busy Hours */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Stoßzeiten
                    </h3>
                    <div className="space-y-3">
                        {[
                            { time: '09:00-11:00', load: 45 },
                            { time: '11:00-13:00', load: 85 },
                            { time: '13:00-15:00', load: 60 },
                            { time: '15:00-17:00', load: 95 },
                            { time: '17:00-19:00', load: 75 }
                        ].map((slot, idx) => (
                            <div key={idx}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`text-sm ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                        {slot.time}
                                    </span>
                                    <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {slot.load}%
                                    </span>
                                </div>
                                <div className={`h-2 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                    <div
                                        className={`h-full rounded-full transition-all duration-500 ${
                                            slot.load > 80 ? 'bg-red-500' :
                                                slot.load > 60 ? 'bg-yellow-500' : 'bg-green-500'
                                        }`}
                                        style={{ width: `${slot.load}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Review Summary */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Bewertungen
                    </h3>
                    <div className="text-center mb-4">
                        <div className="flex items-center justify-center space-x-1 mb-2">
                            <span className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                4.9
                            </span>
                            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                        </div>
                        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                            von 189 Bewertungen
                        </p>
                    </div>
                    <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                            <div key={stars} className="flex items-center space-x-2">
                                <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'} w-3`}>
                                    {stars}
                                </span>
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                <div className={`flex-1 h-2 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                    <div
                                        className="h-full bg-yellow-500 rounded-full"
                                        style={{ width: stars === 5 ? '85%' : stars === 4 ? '10%' : stars === 3 ? '3%' : '2%' }}
                                    />
                                </div>
                                <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'} w-10 text-right`}>
                                    {stars === 5 ? '161' : stars === 4 ? '19' : stars === 3 ? '6' : '3'}
                                </span>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;