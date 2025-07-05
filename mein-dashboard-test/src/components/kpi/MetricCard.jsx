// src/components/kpi/MetricCard.jsx
import React from 'react';
import GlassCard from '../ui/GlassCard';
import MiniChart from '../charts/MiniChart';
import { TrendingUp, TrendingDown } from '../../lib/icons';

const MetricCard = ({ icon: Icon, label, value, change, trend, subtitle, onClick, dark, chartData, color = 'blue' }) => {
    const isPositive = trend === 'up';

    return (
        <GlassCard hover onClick={onClick} className="group flex flex-col" dark={dark}>
            <div className="flex items-start justify-between mb-4">
                <div className={`p-2 ${
                    dark ? 'bg-white/10' : 'bg-gray-100'
                } rounded-lg ${
                    dark ? 'group-hover:bg-white/20' : 'group-hover:bg-gray-200'
                } transition-colors`}>
                    <Icon className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} />
                </div>
                {change && (
                    <div className={`flex items-center space-x-1 text-sm ${
                        isPositive ? 'text-green-500' : 'text-red-500'
                    }`}>
                        {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span className="font-medium">{Math.abs(change)}%</span>
                    </div>
                )}
            </div>

            <div className="mb-3 flex-grow">
                <p className={`${dark ? 'text-white/60' : 'text-gray-600'} text-sm`}>{label}</p>
                <p className={`text-2xl font-semibold ${dark ? 'text-white' : 'text-gray-900'} mt-1`}>
                    {value}
                </p>
                {subtitle && (
                    <p className={`${dark ? 'text-white/40' : 'text-gray-500'} text-xs mt-1`}>
                        {subtitle}
                    </p>
                )}
            </div>

            {chartData && (
                <div className="mt-auto h-[32px]">
                    <MiniChart
                        data={chartData}
                        color={isPositive ? 'green' : 'red'}
                        height={32}
                        dark={dark}
                    />
                </div>
            )}
        </GlassCard>
    );
};

export default MetricCard;