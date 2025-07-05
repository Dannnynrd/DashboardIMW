// src/components/kpi/KPICard.jsx
import React from 'react';
import GlassCard from '../ui/GlassCard';
import { TrendingUp, TrendingDown } from '../../lib/icons';

const KPICard = ({ title, value, target, icon: Icon, color = 'blue', dark, trend }) => {
    const percentage = Math.min((value / target) * 100, 100);
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const colorClasses = {
        blue: 'text-blue-500',
        green: 'text-green-500',
        purple: 'text-purple-500',
        orange: 'text-orange-500',
        red: 'text-red-500'
    };

    return (
        <GlassCard dark={dark} hover>
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                        <Icon className={`w-5 h-5 ${colorClasses[color]}`} />
                        <h3 className={`text-sm font-medium ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                            {title}
                        </h3>
                    </div>
                    <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                        {typeof value === 'number' ? value.toLocaleString('de-DE') : value}
                    </p>
                    <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mt-1`}>
                        Ziel: {typeof target === 'number' ? target.toLocaleString('de-DE') : target}
                    </p>
                    {trend && (
                        <div className={`flex items-center space-x-1 mt-2 text-xs ${
                            trend > 0 ? 'text-green-500' : 'text-red-500'
                        }`}>
                            {trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            <span>{Math.abs(trend)}%</span>
                        </div>
                    )}
                </div>
                <div className="relative">
                    <svg width="100" height="100" className="transform -rotate-90">
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            stroke={dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                            strokeWidth="8"
                            fill="none"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            stroke={`url(#gradient-${title}-${color})`}
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                        />
                        <defs>
                            <linearGradient id={`gradient-${title}-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={
                                    color === 'blue' ? '#3B82F6' :
                                        color === 'green' ? '#10B981' :
                                            color === 'purple' ? '#8B5CF6' :
                                                color === 'orange' ? '#F59E0B' :
                                                    '#EF4444'
                                } />
                                <stop offset="100%" stopColor={
                                    color === 'blue' ? '#1E40AF' :
                                        color === 'green' ? '#059669' :
                                            color === 'purple' ? '#6D28D9' :
                                                color === 'orange' ? '#D97706' :
                                                    '#DC2626'
                                } />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            {Math.round(percentage)}%
                        </span>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

export default KPICard;