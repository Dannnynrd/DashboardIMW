import React, { useState, useEffect, useRef } from 'react';
import {
    LayoutDashboard, Calendar, Users, Scissors, Package, CreditCard,
    BarChart3, Settings, Bell, Search, Plus, Filter, ChevronRight,
    TrendingUp, TrendingDown, Clock, Star, AlertCircle, CheckCircle,
    DollarSign, UserPlus, Eye, MoreHorizontal, Sun, Moon, Menu, X,
    Home, MessageSquare, FileText, LogOut, ChevronDown, Phone, Mail,
    MapPin, Target, RefreshCw, Download, ArrowRight, Percent, Activity,
    Shield, Zap, Award, BookOpen, Briefcase, Coffee, Heart, Image,
    Smartphone, Repeat, Gift, Timer, PieChart, BarChart, CalendarDays,
    UserCheck, ShoppingCart, Palette, Camera, Instagram, Facebook, Globe,
    Sparkles, MousePointer, UserX, ArrowUpRight, ArrowDownRight, Cpu, Wifi,
    HelpCircle, ChevronLeft, Inbox, Archive, Trash2, Send, PlayCircle,
    PauseCircle, AlertTriangle, CheckCircle2, XCircle, Info, Database,
    Server, Lock, Unlock, Share2, Copy, Edit, Save, ZoomIn, Building2,
    Banknote, Receipt, Gauge, Layers, Grid3x3, List, BarChart2, LineChart,
    Bot, Brain, Lightbulb, Trophy, Medal, Crown, Gem, Wallet,
    Calculator, Printer, QrCode, Scan, WifiOff, Battery, BatteryLow,
    Volume2, VolumeX, Mic, Video, Headphones, Monitor, Tablet, Watch,
    CloudRain, CloudSnow, Wind, Droplets, Thermometer, Sunrise, Sunset
} from 'lucide-react';

// Enhanced Glass Card Component with depth variations
const GlassCard = ({ children, className = '', hover = false, onClick, padding = true, dark, blur = 'md', depth = 1 }) => {
    const depthStyles = {
        1: dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm',
        2: dark ? 'bg-white/10 border-white/20' : 'bg-white border-gray-300 shadow-md',
        3: dark ? 'bg-white/15 border-white/30' : 'bg-white border-gray-400 shadow-lg'
    };

    return (
        <div
            onClick={onClick}
            className={`
                ${depthStyles[depth]}
                backdrop-blur-${blur} border rounded-xl
                ${hover
                ? dark
                    ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-lg'
                    : 'hover:shadow-xl hover:border-gray-300'
                : ''
            }
                transition-all duration-300
                ${onClick ? 'cursor-pointer' : ''}
                ${padding ? 'p-6' : ''}
                ${className}
            `}
        >
            {children}
        </div>
    );
};

// Mini Chart Component
const MiniChart = ({ data, color = 'blue', height = 40, dark }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    return (
        <div className="w-full" style={{ height }}>
            <svg width="100%" height="100%" className="overflow-visible">
                {/* Grid lines */}
                <line
                    x1="0"
                    y1={height/2}
                    x2="100%"
                    y2={height/2}
                    stroke={dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                    strokeDasharray="2,2"
                />

                {/* Chart line */}
                <polyline
                    fill="none"
                    stroke={
                        color === 'green' ? '#10b981' :
                            color === 'red' ? '#ef4444' :
                                color === 'purple' ? '#8b5cf6' :
                                    '#3b82f6'
                    }
                    strokeWidth="2"
                    points={data.map((value, index) => {
                        const x = (index / (data.length - 1)) * 100;
                        const y = height - ((value - min) / range) * height;
                        return `${x}%,${y}`;
                    }).join(' ')}
                />

                {/* Dots */}
                {data.map((value, index) => {
                    const x = (index / (data.length - 1)) * 100;
                    const y = height - ((value - min) / range) * height;
                    return (
                        <circle
                            key={index}
                            cx={`${x}%`}
                            cy={y}
                            r="3"
                            fill={
                                color === 'green' ? '#10b981' :
                                    color === 'red' ? '#ef4444' :
                                        color === 'purple' ? '#8b5cf6' :
                                            '#3b82f6'
                            }
                            className="opacity-0 hover:opacity-100 transition-opacity"
                        />
                    );
                })}
            </svg>
        </div>
    );
};

// Enhanced Metric Card with proper charts
const MetricCard = ({ icon: Icon, label, value, change, trend, subtitle, onClick, dark, chartData, color = 'blue' }) => {
    const isPositive = trend === 'up';

    return (
        <GlassCard hover onClick={onClick} className="group" dark={dark}>
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

            <div className="mb-3">
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
                <div className="mt-auto">
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

// Advanced Analytics Chart Component
const AdvancedChart = ({ type = 'line', data, labels, dark, height = 200 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw grid
        ctx.strokeStyle = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
        ctx.lineWidth = 1;

        // Horizontal grid lines
        for (let i = 0; i <= 5; i++) {
            const y = (height / 5) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw data
        if (type === 'line') {
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');

            ctx.fillStyle = gradient;
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 2;

            ctx.beginPath();
            data.forEach((value, index) => {
                const x = (width / (data.length - 1)) * index;
                const y = height - (value / Math.max(...data)) * height;

                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });

            // Fill area
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fill();

            // Draw line
            ctx.beginPath();
            data.forEach((value, index) => {
                const x = (width / (data.length - 1)) * index;
                const y = height - (value / Math.max(...data)) * height;

                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            ctx.stroke();
        }
    }, [data, type, dark, height]);

    return (
        <canvas
            ref={canvasRef}
            width={400}
            height={height}
            className="w-full"
            style={{ height: `${height}px` }}
        />
    );
};

// KPI Card with Progress Ring
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
                        {value.toLocaleString()}
                    </p>
                    <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mt-1`}>
                        Ziel: {target.toLocaleString()}
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
                            stroke={`url(#gradient-${color})`}
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                        />
                        <defs>
                            <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
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

// Enhanced AI Assistant Component with real functionality
const AIAssistant = ({ dark }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'ai', text: 'Hallo! Ich bin Ihr Salon-Assistent. Wie kann ich Ihnen heute helfen?' }
    ]);
    const [inputValue, setInputValue] = useState('');

    const suggestions = [
        'Umsatzprognose für nächste Woche',
        'Beste Zeiten für Werbeaktionen',
        'Optimierung der Terminplanung',
        'Kundenzufriedenheit verbessern'
    ];

    const handleSendMessage = (text) => {
        const messageText = text || inputValue;
        if (!messageText.trim()) return;

        // Add user message
        setMessages([...messages, { type: 'user', text: messageText }]);
        setInputValue('');

        // Simulate AI response
        setTimeout(() => {
            let response = '';
            if (messageText.toLowerCase().includes('umsatz')) {
                response = 'Basierend auf den aktuellen Trends erwarte ich einen Wochenumsatz von €8.500-9.200. Die stärksten Tage werden Freitag und Samstag sein.';
            } else if (messageText.toLowerCase().includes('werbe')) {
                response = 'Die beste Zeit für Werbeaktionen ist Dienstag bis Donnerstag. Empfehle 15% Rabatt auf Färbungen oder ein Treue-Paket für Stammkunden.';
            } else if (messageText.toLowerCase().includes('termin')) {
                response = 'Sie haben noch 4 freie Slots heute. Ich empfehle, die Mittagspausen-Slots aktiv zu bewerben - diese sind bei Berufstätigen sehr beliebt.';
            } else if (messageText.toLowerCase().includes('kunden')) {
                response = 'Ihre Kundenzufriedenheit liegt bei 4.9/5. Top-Feedback: Freundlichkeit und Qualität. Verbesserungspotential: Wartezeiten reduzieren.';
            } else {
                response = 'Ich analysiere Ihre Anfrage. Können Sie mir mehr Details geben, damit ich Ihnen besser helfen kann?';
            }

            setMessages(prev => [...prev, { type: 'ai', text: response }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <GlassCard dark={dark} className="w-96 mb-4" blur="xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <Bot className="w-5 h-5 text-blue-500" />
                            <h3 className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                Salon AI Assistant
                            </h3>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className={`${dark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <div className={`h-64 overflow-y-auto mb-4 space-y-3 ${
                        dark ? 'bg-black/20' : 'bg-gray-50'
                    } rounded-lg p-4`}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`${
                                msg.type === 'ai' ? 'text-left' : 'text-right'
                            }`}>
                                <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
                                    msg.type === 'ai'
                                        ? dark ? 'bg-blue-500/20 text-white' : 'bg-blue-100 text-gray-900'
                                        : dark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-900'
                                }`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Ihre Frage eingeben..."
                                className={`flex-1 px-3 py-2 rounded-lg text-sm ${
                                    dark
                                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                                        : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400'
                                } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                            />
                            <button
                                onClick={() => handleSendMessage()}
                                className={`px-4 py-2 rounded-lg ${
                                    dark
                                        ? 'bg-blue-600 hover:bg-blue-700'
                                        : 'bg-blue-500 hover:bg-blue-600'
                                } text-white transition-colors`}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>

                        <div>
                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mb-2`}>
                                Schnellaktionen:
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {suggestions.map((suggestion, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSendMessage(suggestion)}
                                        className={`p-2 rounded-lg text-xs text-left ${
                                            dark
                                                ? 'bg-white/5 hover:bg-white/10 text-white/80'
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                        } transition-colors`}
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </GlassCard>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    p-4 rounded-full shadow-lg
                    ${dark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}
                    text-white transition-all group
                `}
            >
                <Brain className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
        </div>
    );
};

// My Performance Component (for single person)
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
                    <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-white'}`}>
                        <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mb-1`}>
                            Heute
                        </p>
                        <p className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            €{performanceData.todayRevenue}
                        </p>
                        <p className={`text-sm ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                            {performanceData.todayClients} Kunden
                        </p>
                    </div>
                    <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-white'}`}>
                        <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'} mb-1`}>
                            Diesen Monat
                        </p>
                        <p className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            €{performanceData.monthRevenue}
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

// Appointments View Component
const AppointmentsView = ({ dark }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewMode, setViewMode] = useState('day'); // day, week, month

    const appointments = [
        { id: 1, time: '09:00', duration: 2, client: 'Anna Müller', service: 'Färben & Schnitt', price: 120, status: 'confirmed', phone: '0170-1234567' },
        { id: 2, time: '11:30', duration: 1, client: 'Max Schmidt', service: 'Herrenschnitt', price: 35, status: 'confirmed', phone: '0171-2345678' },
        { id: 3, time: '14:00', duration: 1.5, client: 'Julia Weber', service: 'Styling', price: 65, status: 'pending', phone: '0172-3456789' },
        { id: 4, time: '16:00', duration: 1, client: 'Thomas Klein', service: 'Bartpflege', price: 45, status: 'confirmed', phone: '0173-4567890' }
    ];

    return (
        <div className="space-y-6">
            {/* Header with View Switcher */}
            <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Terminkalender
                </h2>
                <div className="flex items-center space-x-4">
                    <div className={`flex p-1 ${dark ? 'bg-white/10' : 'bg-gray-100'} rounded-lg`}>
                        <button
                            onClick={() => setViewMode('day')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                viewMode === 'day'
                                    ? dark ? 'bg-white text-black' : 'bg-white text-gray-900 shadow-sm'
                                    : dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Tag
                        </button>
                        <button
                            onClick={() => setViewMode('week')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                viewMode === 'week'
                                    ? dark ? 'bg-white text-black' : 'bg-white text-gray-900 shadow-sm'
                                    : dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Woche
                        </button>
                        <button
                            onClick={() => setViewMode('month')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                viewMode === 'month'
                                    ? dark ? 'bg-white text-black' : 'bg-white text-gray-900 shadow-sm'
                                    : dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Monat
                        </button>
                    </div>
                    <button className={`
                        px-4 py-2 rounded-lg font-medium transition-all
                        ${dark
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-black text-white hover:bg-gray-900'
                    }
                    `}>
                        <Plus className="w-4 h-4 inline mr-2" />
                        Neuer Termin
                    </button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left - Calendar Widget */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        {selectedDate.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
                    </h3>
                    <div className="grid grid-cols-7 gap-1">
                        {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(day => (
                            <div key={day} className={`text-center text-xs font-medium ${
                                dark ? 'text-white/60' : 'text-gray-600'
                            } py-2`}>
                                {day}
                            </div>
                        ))}
                        {Array.from({ length: 35 }, (_, i) => {
                            const date = i - 3; // Example offset
                            const isToday = date === selectedDate.getDate();
                            const hasAppointments = [5, 12, 15, 19, 26].includes(date);

                            return (
                                <button
                                    key={i}
                                    className={`
                                        aspect-square rounded-lg flex items-center justify-center text-sm
                                        ${date < 1 || date > 31
                                        ? ''
                                        : isToday
                                            ? dark ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                                            : hasAppointments
                                                ? dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                                : dark ? 'text-white/60 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-50'
                                    }
                                        transition-colors relative
                                    `}
                                    disabled={date < 1 || date > 31}
                                >
                                    {date > 0 && date <= 31 && date}
                                    {hasAppointments && !isToday && (
                                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </GlassCard>

                {/* Middle & Right - Appointments List */}
                <div className="lg:col-span-2">
                    <GlassCard dark={dark}>
                        <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                            Heutige Termine
                        </h3>
                        <div className="space-y-3">
                            {appointments.map((appointment) => (
                                <div
                                    key={appointment.id}
                                    className={`
                                        p-4 rounded-lg border transition-all
                                        ${appointment.status === 'pending'
                                        ? dark
                                            ? 'bg-yellow-500/10 border-yellow-500/30'
                                            : 'bg-yellow-50 border-yellow-300'
                                        : dark
                                            ? 'bg-white/5 border-white/10 hover:bg-white/10'
                                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                                    }
                                    `}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <span className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                    {appointment.time}
                                                </span>
                                                <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                    {appointment.duration}h
                                                </span>
                                                {appointment.status === 'pending' && (
                                                    <span className="text-xs text-yellow-500 font-medium">
                                                        Unbestätigt
                                                    </span>
                                                )}
                                            </div>
                                            <p className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                {appointment.client}
                                            </p>
                                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                {appointment.service}
                                            </p>
                                            <div className="flex items-center space-x-3 mt-2">
                                                <div className="flex items-center space-x-1">
                                                    <Phone className={`w-3 h-3 ${dark ? 'text-white/40' : 'text-gray-400'}`} />
                                                    <span className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                        {appointment.phone}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                €{appointment.price}
                                            </p>
                                            <div className="flex space-x-1 mt-2">
                                                <button className={`p-1 rounded ${
                                                    dark ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                                                }`}>
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button className={`p-1 rounded ${
                                                    dark ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                                                }`}>
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

// Financial Overview Component
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

// Live Website Statistics Component
const LiveWebsiteStats = ({ dark }) => {
    const [liveVisitors, setLiveVisitors] = useState(42);

    useEffect(() => {
        const interval = setInterval(() => {
            setLiveVisitors(prev => Math.max(0, prev + Math.floor(Math.random() * 7) - 3));
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

// Day Schedule Component
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
            {hours.map((hour) => {
                const appointment = appointments.find(apt => apt.time === hour);
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
                                        {appointment.service} • {appointment.duration}h
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

// Main Dashboard Component
export default function ProfessionalSalonDashboard() {
    const [darkMode, setDarkMode] = useState(true);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeView, setActiveView] = useState('overview');
    const [selectedPeriod, setSelectedPeriod] = useState('today');
    const [showNotifications, setShowNotifications] = useState(false);

    // Enhanced navigation without inventory
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

    // Notification data
    const notifications = [
        { id: 1, type: 'appointment', text: 'Neuer Termin: Anna Müller um 14:00', time: 'vor 5 Min' },
        { id: 2, type: 'review', text: 'Neue 5-Sterne Bewertung erhalten', time: 'vor 2 Std' },
        { id: 3, type: 'payment', text: 'Zahlung eingegangen: €120', time: 'vor 3 Std' },
        { id: 4, type: 'reminder', text: 'Termin-Erinnerung: Max Schmidt um 11:30', time: 'vor 4 Std' }
    ];

    // Enhanced metrics
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
        <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
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
                    <div className="p-6 border-b border-white/10">
                        <div className="flex items-center justify-between">
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
                                className={`${darkMode ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                <Menu className="w-5 h-5" />
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
                                            className={`
                                                w-full flex items-center justify-between p-3 rounded-lg
                                                transition-all duration-200 group
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
                                                    item.badge === '!' ? 'bg-red-500 text-white animate-pulse' :
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

                    {/* User Profile */}
                    <div className={`p-4 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
                        <button className={`w-full p-3 rounded-lg ${
                            darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                        } transition-colors flex items-center ${
                            sidebarCollapsed ? 'justify-center' : 'space-x-3'
                        }`}>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                                M
                            </div>
                            {!sidebarCollapsed && (
                                <>
                                    <div className="flex-1 text-left">
                                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
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
                                {activeView === 'appointments' ? 'Terminkalender' : 'Guten Morgen, Max!'}
                            </h1>
                            <p className={`text-sm ${darkMode ? 'text-white/60' : 'text-gray-600'} mt-1`}>
                                {new Date().toLocaleDateString('de-DE', {
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })} • Es wird ein großartiger Tag!
                            </p>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Search */}
                            <div className={`relative ${darkMode ? '' : ''}`}>
                                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                                    darkMode ? 'text-white/40' : 'text-gray-400'
                                }`} />
                                <input
                                    type="text"
                                    placeholder="Suchen..."
                                    className={`pl-10 pr-4 py-2 rounded-lg ${
                                        darkMode
                                            ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                                            : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400'
                                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all`}
                                />
                            </div>

                            {/* Notifications */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowNotifications(!showNotifications)}
                                    className={`relative p-2 rounded-lg ${
                                        darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                                    } transition-colors`}
                                >
                                    <Bell className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                                </button>

                                {showNotifications && (
                                    <div className={`absolute right-0 mt-2 w-80 ${
                                        darkMode ? 'bg-black/90' : 'bg-white'
                                    } backdrop-blur-xl rounded-xl shadow-xl border ${
                                        darkMode ? 'border-white/10' : 'border-gray-200'
                                    } overflow-hidden`}>
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
                                                        darkMode ? 'text-white' : 'text-gray-900'
                                                    }`}>{notification.text}</p>
                                                    <p className={`text-xs ${
                                                        darkMode ? 'text-white/40' : 'text-gray-500'
                                                    } mt-1`}>{notification.time}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}{/* Close Notifications Dropdown */}
                            </div>
                        </div>

                        {/* Close Header Elements */}
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="p-8">
                    {/* Overview View */}
                    {activeView === 'overview' && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                                {/* Main Column */}
                                <div className="lg:col-span-2 xl:col-span-3 space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {metrics.slice(0, 6).map((metric, index) => (
                                            <MetricCard
                                                key={index}
                                                icon={metric.icon}
                                                label={metric.label}
                                                value={metric.value}
                                                change={metric.change}
                                                trend={metric.trend}
                                                subtitle={metric.subtitle}
                                                chartData={metric.chartData}
                                                dark={darkMode}
                                                onClick={() => {}}
                                            />
                                        ))}
                                    </div>
                                    <FinancialOverview dark={darkMode} />
                                </div>

                                {/* Right Sidebar Column */}
                                <div className="lg:col-span-1 xl:col-span-1 space-y-6">
                                    <MyPerformance dark={darkMode} />
                                    <LiveWebsiteStats dark={darkMode} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Appointments View */}
                    {activeView === 'appointments' && <AppointmentsView dark={darkMode} />}

                    {/* Placeholder for other views */}
                    {(activeView !== 'overview' && activeView !== 'appointments') && (
                        <GlassCard dark={darkMode}>
                            <div className="text-center py-12">
                                <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                    Ansicht: {activeView}
                                </h2>
                                <p className={`mt-2 ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
                                    Inhalt für diese Ansicht wird noch implementiert.
                                </p>
                            </div>
                        </GlassCard>
                    )}
                </main>

                <AIAssistant dark={darkMode} />

            </div> {/* Close Main Content div */}
        </div> // Close Root div
    );
}