// src/views/FinancialDetails.jsx
import React, { useState } from 'react';
import GlassCard from '../components/ui/GlassCard';
import KPICard from '../components/kpi/KPICard';
import { Download, CircleDollarSign, ShoppingBag, TrendingUp } from '../lib/icons';

const FinancialDetails = ({ dark }) => {
    const [selectedMonth, setSelectedMonth] = useState('Juni');

    const monthlyData = {
        revenue: 24580,
        expenses: 8420,
        profit: 16160,
        transactions: [
            { date: '14.06', description: 'Anna Müller - Färben & Schnitt', amount: 120, type: 'income' },
            { date: '14.06', description: 'Max Schmidt - Herrenschnitt', amount: 35, type: 'income' },
            { date: '14.06', description: 'Miete Juni', amount: -2500, type: 'expense' },
            { date: '13.06', description: 'Julia Weber - Styling', amount: 65, type: 'income' },
            { date: '13.06', description: 'Produkte Nachbestellung', amount: -450, type: 'expense' }
        ]
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Finanzen
                </h2>
                <div className="flex items-center space-x-4">
                    <select className={`px-4 py-2 rounded-lg text-sm ${
                        dark
                            ? 'bg-white/10 border-white/20 text-white'
                            : 'bg-gray-100 border-gray-200 text-gray-900'
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}>
                        <option>Juni 2024</option>
                        <option>Mai 2024</option>
                        <option>April 2024</option>
                    </select>
                    <button className={`
                        px-4 py-2 rounded-lg font-medium transition-all text-sm
                        ${dark
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-black text-white hover:bg-gray-900'
                    }
                    `}>
                        <Download className="w-4 h-4 inline mr-2" />
                        Export
                    </button>
                </div>
            </div>

            {/* Financial Summary Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <KPICard
                    title="Einnahmen"
                    value={monthlyData.revenue}
                    target={25000}
                    icon={CircleDollarSign}
                    color="green"
                    dark={dark}
                    trend={11.2}
                />
                <KPICard
                    title="Ausgaben"
                    value={monthlyData.expenses}
                    target={8000}
                    icon={ShoppingBag}
                    color="red"
                    dark={dark}
                    trend={-5.4}
                />
                <KPICard
                    title="Gewinn"
                    value={monthlyData.profit}
                    target={17000}
                    icon={TrendingUp}
                    color="blue"
                    dark={dark}
                    trend={22.4}
                />
            </div>

            {/* Expense Categories & Recent Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Ausgabenverteilung
                    </h3>
                    <div className="space-y-3">
                        {[
                            { category: 'Miete & Nebenkosten', amount: 3200, percentage: 38 },
                            { category: 'Produkte & Material', amount: 2100, percentage: 25 },
                            { category: 'Marketing', amount: 800, percentage: 9.5 },
                            { category: 'Versicherungen', amount: 650, percentage: 7.7 },
                            { category: 'Sonstiges', amount: 1670, percentage: 19.8 }
                        ].map((item, idx) => (
                            <div key={idx}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`text-sm ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                        {item.category}
                                    </span>
                                    <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        €{item.amount.toLocaleString('de-DE')} ({item.percentage}%)
                                    </span>
                                </div>
                                <div className={`h-2 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                        style={{ width: `${item.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Letzte Transaktionen
                    </h3>
                    <div className="space-y-3">
                        {monthlyData.transactions.map((transaction, idx) => (
                            <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${
                                dark ? 'bg-white/5' : 'bg-gray-50'
                            }`}>
                                <div>
                                    <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'} text-sm`}>
                                        {transaction.description}
                                    </p>
                                    <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                        {transaction.date}
                                    </p>
                                </div>
                                <p className={`font-bold text-sm ${
                                    transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                                }`}>
                                    {transaction.type === 'income' ? '+' : ''}€{Math.abs(transaction.amount).toLocaleString('de-DE')}
                                </p>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default FinancialDetails;