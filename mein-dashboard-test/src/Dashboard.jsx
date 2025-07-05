import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
    LayoutDashboard, Calendar, Users, Scissors, CreditCard, BarChart3, Settings, Bell, Search, Plus, Filter, ChevronRight,
    TrendingUp, TrendingDown, Clock, Star, AlertCircle, CheckCircle, DollarSign, UserPlus, Eye, MoreHorizontal, Sun, Moon,
    Menu, X, Home, MessageSquare, FileText, LogOut, ChevronDown, Phone, Mail, MapPin, Target, RefreshCw, Download,
    ArrowRight, Percent, Activity, Shield, Zap, Award, BookOpen, Briefcase, Coffee, Heart, Image, Smartphone, Repeat,
    Gift, Timer, PieChart, BarChart, CalendarDays, UserCheck, ShoppingCart, Palette, Camera, Instagram, Facebook, Globe,
    Sparkles, MousePointer, UserX, ArrowUpRight, ArrowDownRight, HelpCircle, ChevronLeft, Inbox, Archive, Trash2, Send,
    PlayCircle, PauseCircle, AlertTriangle, CheckCircle2, XCircle, Info, Database, Server, Lock, Unlock, Share2, Copy,
    Edit, Save, ZoomIn, Building2, Banknote, Receipt, Gauge, Layers, Grid3x3, List, BarChart2, LineChart, Bot, Brain,
    Lightbulb, Trophy, Medal, Crown, Gem, Wallet, Calculator, Printer, QrCode, Scan, WifiOff, Battery, BatteryLow,
    Volume2, VolumeX, Mic, Video, Headphones, Monitor, Tablet, Watch, Brush, Droplet, Sparkle, CircleDollarSign,
    ThumbsUp, AlertOctagon, CheckSquare, Square, MoreVertical, Tag, Bookmark, Clock3, Clock4, Clock5, Euro, Hash,
    BarChart4, FileBarChart, FileSpreadsheet, Folder, FolderOpen, File, Coins, HandCoins, PiggyBank, ShoppingBag,
    Store, Package2, Truck, PackageCheck, UserCircle, UserCog, UserMinus, UsersRound, Contact, CalendarCheck,
    CalendarClock, CalendarX, CalendarRange, BellRing, BellOff, BellPlus, Megaphone, Radio, Navigation, MessageSquareText,
    ArrowLeft, History, MapPinned, Navigation2, ShieldCheck, Fingerprint, FolderLock, ClipboardCheck, Beaker, TestTube,
    Wand2, CircleCheckBig, CalendarHeart, PartyPopper, Cake, Music, Volume, PlaySquare, CheckCheck, CircleCheck,
    CircleX, Signal, BatteryCharging, Pause, Play, SkipForward, Link, Link2, ExternalLink, Maximize2, Minimize2,
    BookmarkPlus, BookmarkMinus, BookmarkCheck, FolderPlus, FolderMinus, FolderCheck, Ticket, Command, Option, Sliders,
    ToggleLeft, ToggleRight, Bluetooth, Cast, Flashlight, GitBranch, GitCommit, GitMerge, Infinity, Key, Keyboard,
    Landmark, Languages, Laptop, LifeBuoy, Loader, MessagesSquare, MicOff, Minimize, Mountain, Move, Network, Paperclip,
    PenTool, Power, PowerOff, Presentation, Puzzle, RefreshCcw, Repeat2, Rewind, Rocket, RotateCcw, RotateCw, Rss,
    ScanLine, Share, ShieldAlert, ShieldOff, Shuffle, SkipBack, Slash, Smile, Snowflake, Speaker, StopCircle,
    Sword, Table, Terminal, Trash, TreePine, Triangle, Tv, Type, Umbrella, Underline, Upload, User, VideoOff, Voicemail,
    Volume1, Wand, Waves, Webcam, XSquare, Youtube, ZoomOut, ChevronUp, ChevronsUp, ChevronsDown, ChevronsLeft,
    ChevronsRight, ArrowUp, ArrowDown, ArrowLeftRight, ArrowRightLeft, ArrowUpDown, CornerDownLeft, CornerDownRight,
    CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, MoveDown, MoveLeft,
    MoveRight, MoveUp, Minus, Package, Wifi, WifiIcon, Workflow
} from 'lucide-react';

// Advanced Glass Morphism Card Component
const GlassCard = ({
                       children,
                       className = '',
                       hover = false,
                       onClick,
                       padding = true,
                       dark,
                       blur = 'xl',
                       depth = 1,
                       animate = false,
                       glow = false,
                       interactive = false
                   }) => {
    const [isHovered, setIsHovered] = useState(false);

    const depthStyles = {
        1: dark
            ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.03] border-white/[0.12] backdrop-blur-xl'
            : 'bg-gradient-to-br from-white/95 to-white/80 border-gray-200/60 backdrop-blur-xl shadow-lg shadow-black/5',
        2: dark
            ? 'bg-gradient-to-br from-white/[0.12] to-white/[0.06] border-white/[0.18] backdrop-blur-2xl'
            : 'bg-gradient-to-br from-white to-white/90 border-gray-300/70 backdrop-blur-2xl shadow-xl shadow-black/10',
        3: dark
            ? 'bg-gradient-to-br from-white/[0.15] to-white/[0.08] border-white/[0.25] backdrop-blur-3xl'
            : 'bg-gradient-to-br from-white to-white/95 border-gray-400/80 backdrop-blur-3xl shadow-2xl shadow-black/15'
    };

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                ${depthStyles[depth]}
                border rounded-3xl relative overflow-hidden group
                ${hover || interactive
                ? dark
                    ? 'hover:bg-gradient-to-br hover:from-white/[0.15] hover:to-white/[0.08] hover:border-white/[0.25] hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98]'
                    : 'hover:shadow-2xl hover:shadow-black/20 hover:border-gray-300/80 hover:scale-[1.02] active:scale-[0.98] hover:bg-white'
                : ''
            }
                transition-all duration-500 ease-out
                ${onClick ? 'cursor-pointer' : ''}
                ${padding ? 'p-8' : ''}
                ${animate ? 'animate-fade-in' : ''}
                ${glow && isHovered ? 'shadow-2xl shadow-indigo-500/30' : ''}
                ${className}
            `}
        >
            {glow && (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

// Advanced Interactive Chart Component
const AdvancedChart = ({
                           type = 'line',
                           data = [],
                           labels = [],
                           dark,
                           height = 280,
                           interactive = true,
                           gradient = true,
                           animation = true,
                           multiSeries = false,
                           series = []
                       }) => {
    const canvasRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [animationProgress, setAnimationProgress] = useState(0);

    useEffect(() => {
        if (animation) {
            const timer = setTimeout(() => {
                const interval = setInterval(() => {
                    setAnimationProgress(prev => {
                        if (prev >= 1) {
                            clearInterval(interval);
                            return 1;
                        }
                        return prev + 0.02;
                    });
                }, 16);
            }, 200);
            return () => clearTimeout(timer);
        } else {
            setAnimationProgress(1);
        }
    }, [animation]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !data.length) return;

        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.scale(dpr, dpr);

        const width = rect.width;
        const height = rect.height;

        ctx.clearRect(0, 0, width, height);

        // Enhanced grid with subtle animations
        ctx.strokeStyle = dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)';
        ctx.lineWidth = 1;

        // Horizontal grid lines
        for (let i = 0; i <= 6; i++) {
            const y = (height / 6) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width * animationProgress, y);
            ctx.stroke();
        }

        // Vertical grid lines
        for (let i = 0; i <= data.length - 1; i++) {
            const x = (width / (data.length - 1)) * i;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height * animationProgress);
            ctx.stroke();
        }

        if (type === 'line' && data.length > 0) {
            const maxValue = Math.max(...data);
            const minValue = Math.min(...data);
            const range = maxValue - minValue || 1;

            // Create sophisticated gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
            gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.2)');
            gradient.addColorStop(1, 'rgba(99, 102, 241, 0.02)');

            // Draw area with animation
            ctx.fillStyle = gradient;
            ctx.beginPath();

            const animatedData = data.slice(0, Math.floor(data.length * animationProgress));

            animatedData.forEach((value, index) => {
                const x = (width / (data.length - 1)) * index;
                const y = height - ((value - minValue) / range) * height * 0.8 - height * 0.1;

                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });

            if (animatedData.length > 0) {
                const lastX = (width / (data.length - 1)) * (animatedData.length - 1);
                ctx.lineTo(lastX, height);
                ctx.lineTo(0, height);
                ctx.closePath();
                ctx.fill();
            }

            // Draw line with glow effect
            ctx.shadowColor = '#6366f1';
            ctx.shadowBlur = 12;
            ctx.strokeStyle = '#6366f1';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            ctx.beginPath();
            animatedData.forEach((value, index) => {
                const x = (width / (data.length - 1)) * index;
                const y = height - ((value - minValue) / range) * height * 0.8 - height * 0.1;

                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Draw enhanced data points
            animatedData.forEach((value, index) => {
                const x = (width / (data.length - 1)) * index;
                const y = height - ((value - minValue) / range) * height * 0.8 - height * 0.1;
                const isHovered = hoveredIndex === index;

                // Outer glow
                if (isHovered) {
                    ctx.beginPath();
                    ctx.arc(x, y, 12, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
                    ctx.fill();
                }

                // Main point
                ctx.beginPath();
                ctx.arc(x, y, isHovered ? 6 : 4, 0, Math.PI * 2);
                ctx.fillStyle = '#6366f1';
                ctx.fill();

                // Inner highlight
                ctx.beginPath();
                ctx.arc(x, y, isHovered ? 4 : 2, 0, Math.PI * 2);
                ctx.fillStyle = dark ? '#000' : '#fff';
                ctx.fill();

                // Value display on hover
                if (isHovered) {
                    ctx.fillStyle = dark ? '#fff' : '#000';
                    ctx.font = 'bold 12px system-ui';
                    ctx.textAlign = 'center';
                    const text = value.toLocaleString();
                    const metrics = ctx.measureText(text);

                    // Background for text
                    ctx.fillStyle = dark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)';
                    ctx.fillRect(x - metrics.width/2 - 6, y - 30, metrics.width + 12, 20);

                    ctx.fillStyle = dark ? '#fff' : '#000';
                    ctx.fillText(text, x, y - 15);
                }
            });
        }

        // Enhanced bar chart
        if (type === 'bar' && data.length > 0) {
            const maxValue = Math.max(...data);
            const barWidth = (width / data.length) * 0.7;
            const spacing = (width / data.length) * 0.3;

            data.forEach((value, index) => {
                if (index >= data.length * animationProgress) return;

                const x = index * (width / data.length) + spacing / 2;
                const barHeight = (value / maxValue) * height * 0.8;
                const y = height - barHeight;
                const isHovered = hoveredIndex === index;

                // Bar gradient
                const barGradient = ctx.createLinearGradient(0, y, 0, height);
                if (isHovered) {
                    barGradient.addColorStop(0, '#6366f1');
                    barGradient.addColorStop(1, '#8b5cf6');
                } else {
                    barGradient.addColorStop(0, '#6366f1');
                    barGradient.addColorStop(1, '#3730a3');
                }

                // Shadow
                ctx.shadowColor = isHovered ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.2)';
                ctx.shadowBlur = isHovered ? 15 : 8;
                ctx.shadowOffsetY = 4;

                ctx.fillStyle = barGradient;
                ctx.fillRect(x, y, barWidth, barHeight);
                ctx.shadowBlur = 0;
                ctx.shadowOffsetY = 0;

                // Value on hover
                if (isHovered) {
                    ctx.fillStyle = dark ? '#fff' : '#000';
                    ctx.font = 'bold 12px system-ui';
                    ctx.textAlign = 'center';
                    ctx.fillText(value.toLocaleString(), x + barWidth / 2, y - 10);
                }
            });
        }

        // Labels
        if (labels.length) {
            ctx.fillStyle = dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
            ctx.font = '11px system-ui';
            ctx.textAlign = 'center';
            labels.forEach((label, index) => {
                if (index >= labels.length * animationProgress) return;

                const x = type === 'bar'
                    ? index * (width / data.length) + (width / data.length) / 2
                    : (width / (labels.length - 1)) * index;
                ctx.fillText(label, x, height + 20);
            });
        }
    }, [data, type, dark, height, labels, hoveredIndex, animationProgress]);

    const handleMouseMove = useCallback((e) => {
        if (!interactive) return;
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const segmentWidth = rect.width / data.length;
        const index = Math.floor(x / segmentWidth);
        setHoveredIndex(index >= 0 && index < data.length ? index : null);
    }, [interactive, data.length]);

    return (
        <div className="relative w-full" style={{ height: height + 40 }}>
            <canvas
                ref={canvasRef}
                className="w-full cursor-crosshair"
                style={{ height: height + 40 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredIndex(null)}
            />
        </div>
    );
};

// Enhanced KPI Card with Advanced Animations
const KPICard = ({
                     title,
                     value,
                     target,
                     icon: Icon,
                     color = 'indigo',
                     dark,
                     trend,
                     subtitle,
                     comparison,
                     onClick,
                     realTime = false
                 }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const [animatedProgress, setAnimatedProgress] = useState(0);

    const percentage = target ? Math.min((value / target) * 100, 100) : 0;
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

    const colorSchemes = {
        indigo: {
            primary: '#6366f1',
            secondary: '#8b5cf6',
            bg: 'from-indigo-500/20 to-purple-500/20',
            text: 'text-indigo-500'
        },
        emerald: {
            primary: '#10b981',
            secondary: '#059669',
            bg: 'from-emerald-500/20 to-teal-500/20',
            text: 'text-emerald-500'
        },
        amber: {
            primary: '#f59e0b',
            secondary: '#d97706',
            bg: 'from-amber-500/20 to-orange-500/20',
            text: 'text-amber-500'
        },
        rose: {
            primary: '#f43f5e',
            secondary: '#e11d48',
            bg: 'from-rose-500/20 to-pink-500/20',
            text: 'text-rose-500'
        }
    };

    useEffect(() => {
        // Animate display value
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                current = value;
                clearInterval(timer);
            }
            setDisplayValue(current);
        }, duration / steps);

        // Animate progress
        const progressTimer = setInterval(() => {
            setAnimatedProgress(prev => {
                if (prev >= percentage) {
                    clearInterval(progressTimer);
                    return percentage;
                }
                return prev + 2;
            });
        }, 30);

        return () => {
            clearInterval(timer);
            clearInterval(progressTimer);
        };
    }, [value, percentage]);

    return (
        <GlassCard
            dark={dark}
            hover
            glow
            onClick={onClick}
            className="group relative overflow-hidden cursor-pointer"
        >
            {/* Background gradient animation */}
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colorSchemes[color].bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <div className="relative z-10 flex items-center justify-between">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className={`p-4 rounded-2xl ${dark ? 'bg-white/[0.08]' : 'bg-gray-100'} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`w-6 h-6 ${colorSchemes[color].text}`} />
                        </div>
                        <div>
                            <h3 className={`text-sm font-medium ${dark ? 'text-white/70' : 'text-gray-600'} mb-1`}>
                                {title}
                            </h3>
                            {realTime && (
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    <span className={`text-xs ${dark ? 'text-white/40' : 'text-gray-400'}`}>
                                        Live
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className={`text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                            {typeof displayValue === 'number'
                                ? displayValue > 1000
                                    ? displayValue.toLocaleString(undefined, { maximumFractionDigits: 0 })
                                    : displayValue.toFixed(1)
                                : displayValue
                            }
                        </p>

                        {subtitle && (
                            <p className={`text-sm ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                                {subtitle}
                            </p>
                        )}

                        {trend !== undefined && (
                            <div className={`flex items-center space-x-2 text-sm ${
                                trend > 0 ? 'text-emerald-500' : 'text-rose-500'
                            }`}>
                                {trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                <span className="font-semibold">{Math.abs(trend)}%</span>
                                {comparison && (
                                    <span className={`text-xs ${dark ? 'text-white/40' : 'text-gray-400'}`}>
                                        vs. {comparison}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {target && (
                    <div className="relative">
                        <svg width="120" height="120" className="transform -rotate-90">
                            {/* Background circle */}
                            <circle
                                cx="60"
                                cy="60"
                                r={radius}
                                stroke={dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}
                                strokeWidth="8"
                                fill="none"
                            />
                            {/* Progress circle */}
                            <circle
                                cx="60"
                                cy="60"
                                r={radius}
                                stroke={`url(#gradient-${color})`}
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="transition-all duration-1000 ease-out"
                                style={{ filter: 'drop-shadow(0 0 6px rgba(99, 102, 241, 0.4))' }}
                            />
                            <defs>
                                <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={colorSchemes[color].primary} />
                                    <stop offset="100%" stopColor={colorSchemes[color].secondary} />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <span className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {Math.round(animatedProgress)}%
                                </span>
                                <span className={`text-xs block ${dark ? 'text-white/50' : 'text-gray-500'} mt-1`}>
                                    erreicht
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </GlassCard>
    );
};

// Advanced Sidebar with Smart Navigation
const Sidebar = ({ dark, collapsed, setCollapsed, activeView, setActiveView }) => {
    const [notifications, setNotifications] = useState({
        appointments: 3,
        customers: 2,
        loyalty: 5,
        finance: 1
    });

    const navigationSections = [
        {
            title: 'Dashboard',
            items: [
                { id: 'overview', icon: LayoutDashboard, label: 'Übersicht', badge: null },
                { id: 'insights', icon: Brain, label: 'AI Insights', badge: 'PRO', badgeType: 'premium' },
                { id: 'realtime', icon: Activity, label: 'Live Analytics', badge: notifications.appointments, badgeType: 'notification' }
            ]
        },
        {
            title: 'Kunden & Termine',
            items: [
                { id: 'appointments', icon: Calendar, label: 'Terminkalender', badge: notifications.appointments },
                { id: 'customers', icon: Users, label: 'Kunden-CRM', badge: notifications.customers },
                { id: 'loyalty', icon: Crown, label: 'Treueprogramm', badge: notifications.loyalty, badgeType: 'success' },
                { id: 'waitlist', icon: Clock, label: 'Warteliste', badge: 'NEU', badgeType: 'success' }
            ]
        },
        {
            title: 'Business',
            items: [
                { id: 'services', icon: Scissors, label: 'Service-Hub', badge: null },
                { id: 'finance', icon: CircleDollarSign, label: 'Finanzen Pro', badge: notifications.finance, badgeType: 'warning' },
                { id: 'pricing', icon: Tag, label: 'Dynamic Pricing', badge: null },
                { id: 'inventory', icon: Package, label: 'Smart Inventory', badge: '2', badgeType: 'warning' }
            ]
        },
        {
            title: 'Marketing & Growth',
            items: [
                { id: 'campaigns', icon: Megaphone, label: 'Kampagnen', badge: null },
                { id: 'social', icon: Share2, label: 'Social Media', badge: null },
                { id: 'reviews', icon: Star, label: 'Bewertungen', badge: '4.9', badgeType: 'success' },
                { id: 'referrals', icon: Gift, label: 'Empfehlungen', badge: null }
            ]
        },
        {
            title: 'Analytics & Automation',
            items: [
                { id: 'reports', icon: BarChart3, label: 'Advanced Reports', badge: null },
                { id: 'automation', icon: Zap, label: 'Automatisierung', badge: 'BETA', badgeType: 'info' },
                { id: 'goals', icon: Target, label: 'Ziele & KPIs', badge: null }
            ]
        },
        {
            title: 'System',
            items: [
                { id: 'settings', icon: Settings, label: 'Einstellungen', badge: null },
                { id: 'integrations', icon: Workflow, label: 'Integrationen', badge: null },
                { id: 'help', icon: HelpCircle, label: 'Support Center', badge: null }
            ]
        }
    ];

    const badgeStyles = {
        notification: 'bg-rose-500 text-white animate-pulse',
        success: 'bg-emerald-500 text-white',
        warning: 'bg-amber-500 text-white',
        info: 'bg-cyan-500 text-white',
        premium: 'bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold'
    };

    return (
        <aside className={`
            fixed left-0 top-0 h-full z-40 transition-all duration-500 ease-out
            ${dark
            ? 'bg-gradient-to-b from-black/95 to-gray-900/95'
            : 'bg-gradient-to-b from-white/95 to-gray-50/95'
        }
            backdrop-blur-2xl border-r
            ${dark ? 'border-white/[0.08]' : 'border-gray-200/50'}
            ${collapsed ? 'w-20' : 'w-80'}
            hidden lg:block shadow-2xl shadow-black/10
        `}>
            <div className="flex flex-col h-full">
                {/* Enhanced Header */}
                <div className={`p-6 border-b ${dark ? 'border-white/[0.08]' : 'border-gray-200/50'}`}>
                    <div className="flex items-center justify-between">
                        {!collapsed && (
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                        <Scissors className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-black" />
                                </div>
                                <div>
                                    <h1 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        SalonElite
                                    </h1>
                                    <p className={`text-xs ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                                        Professional Suite
                                    </p>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className={`${dark ? 'text-white/60 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} 
                               p-3 rounded-2xl transition-all duration-200 hover:scale-110`}
                        >
                            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Enhanced Navigation */}
                <div className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
                    {navigationSections.map((section, sectionIdx) => (
                        <div key={sectionIdx}>
                            {!collapsed && (
                                <p className={`text-xs font-semibold uppercase tracking-wider mb-4 px-4 ${
                                    dark ? 'text-white/40' : 'text-gray-500'
                                }`}>
                                    {section.title}
                                </p>
                            )}
                            <nav className="space-y-2">
                                {section.items.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveView(item.id)}
                                        className={`
                                            w-full flex items-center justify-between p-4 rounded-2xl
                                            transition-all duration-300 group relative overflow-hidden
                                            ${activeView === item.id
                                            ? dark
                                                ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white shadow-lg border border-indigo-500/30'
                                                : 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 shadow-md border border-indigo-200'
                                            : dark
                                                ? 'text-white/60 hover:text-white hover:bg-white/[0.08]'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                                        }
                                        `}
                                    >
                                        {activeView === item.id && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl" />
                                        )}

                                        <div className="flex items-center space-x-4 relative z-10">
                                            <item.icon className={`w-5 h-5 flex-shrink-0 transition-all duration-200 ${
                                                activeView === item.id ? 'scale-110' : 'group-hover:scale-105'
                                            }`} />
                                            {!collapsed && (
                                                <span className="font-medium">{item.label}</span>
                                            )}
                                        </div>

                                        {!collapsed && item.badge && (
                                            <span className={`
                                                px-3 py-1 text-xs font-semibold rounded-full relative z-10
                                                ${badgeStyles[item.badgeType] || (dark ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700')}
                                            `}>
                                                {item.badge}
                                            </span>
                                        )}

                                        {activeView === item.id && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-r-full" />
                                        )}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>

                {/* Enhanced User Profile Section */}
                <div className={`p-6 border-t ${dark ? 'border-white/[0.08]' : 'border-gray-200/50'} space-y-4`}>
                    {/* Daily Progress */}
                    {!collapsed && (
                        <GlassCard dark={dark} padding={false} className="p-4">
                            <div className="flex items-center justify-between mb-3">
                                <span className={`text-sm font-medium ${dark ? 'text-white/70' : 'text-gray-600'}`}>
                                    Tagesziel
                                </span>
                                <span className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    €1,247 / €1,500
                                </span>
                            </div>
                            <div className={`h-3 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                <div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                                    style={{ width: '83%' }}
                                />
                            </div>
                            <div className={`flex items-center justify-between mt-2 text-xs ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                                <span>83% erreicht</span>
                                <span>€253 verbleibend</span>
                            </div>
                        </GlassCard>
                    )}

                    {/* User Profile */}
                    <button className={`w-full p-4 rounded-2xl ${dark ? 'hover:bg-white/[0.08]' : 'hover:bg-gray-100'
                    } transition-all duration-200 flex items-center ${collapsed ? 'justify-center' : 'space-x-4'
                    } group`}>
                        <div className="relative">
                            <img
                                src="https://ui-avatars.com/api/?name=Max+Mustermann&background=6366f1&color=fff"
                                alt="Profile"
                                className="w-12 h-12 rounded-2xl group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-black" />
                        </div>
                        {!collapsed && (
                            <>
                                <div className="flex-1 text-left">
                                    <p className={`text-sm font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        Max Mustermann
                                    </p>
                                    <p className={`text-xs ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                                        Master Stylist
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className={`p-2 rounded-xl ${dark ? 'hover:bg-white/10' : 'hover:bg-gray-200'} transition-colors`}>
                                        <Settings className={`w-4 h-4 ${dark ? 'text-white/40' : 'text-gray-400'}`} />
                                    </button>
                                    <button className={`p-2 rounded-xl ${dark ? 'hover:bg-white/10' : 'hover:bg-gray-200'} transition-colors`}>
                                        <LogOut className={`w-4 h-4 ${dark ? 'text-white/40' : 'text-gray-400'}`} />
                                    </button>
                                </div>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </aside>
    );
};

// Enhanced Header with Smart Search and AI
const Header = ({ dark, setDarkMode, title, subtitle, showNotifications, setShowNotifications, notificationCount }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [aiSuggestions, setAiSuggestions] = useState([]);

    useEffect(() => {
        // AI-powered search suggestions
        if (searchQuery.length > 2) {
            setAiSuggestions([
                { type: 'customer', text: 'Anna Müller - nächster Termin heute 14:00', icon: Users },
                { type: 'service', text: 'Damenschnitt - €55, 45min', icon: Scissors },
                { type: 'appointment', text: 'Freier Slot morgen 10:30', icon: Calendar },
                { type: 'insight', text: 'Umsatz +12% vs. letzter Monat', icon: TrendingUp }
            ]);
        } else {
            setAiSuggestions([]);
        }
    }, [searchQuery]);

    return (
        <header className={`
            sticky top-0 z-30 px-8 py-6
            ${dark
            ? 'bg-gradient-to-r from-black/90 to-gray-900/90'
            : 'bg-gradient-to-r from-white/90 to-gray-50/90'
        }
            backdrop-blur-2xl border-b
            ${dark ? 'border-white/[0.08]' : 'border-gray-200/50'}
            shadow-lg shadow-black/5
        `}>
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                        <h1 className={`text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                            {title}
                        </h1>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className={`text-sm ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                                Live
                            </span>
                        </div>
                    </div>
                    {subtitle && (
                        <p className={`text-lg ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="flex items-center space-x-4">
                    {/* AI-Powered Search */}
                    <div className="relative">
                        <div className={`hidden md:block relative`}>
                            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                                dark ? 'text-white/40' : 'text-gray-400'
                            }`} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="AI-Suche..."
                                className={`pl-12 pr-6 py-3 rounded-2xl w-80 ${dark
                                    ? 'bg-white/[0.08] border-white/[0.12] text-white placeholder-white/40'
                                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                                } border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all backdrop-blur-xl`}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${
                                        dark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                                    } transition-colors`}
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* AI Search Suggestions */}
                        {aiSuggestions.length > 0 && (
                            <GlassCard
                                dark={dark}
                                className="absolute top-full mt-2 w-80 max-h-80 overflow-y-auto z-50"
                                padding={false}
                            >
                                <div className="p-2">
                                    <div className={`flex items-center space-x-2 px-3 py-2 mb-2 ${
                                        dark ? 'text-white/60' : 'text-gray-600'
                                    }`}>
                                        <Brain className="w-4 h-4" />
                                        <span className="text-xs font-medium">AI Vorschläge</span>
                                    </div>
                                    {aiSuggestions.map((suggestion, idx) => (
                                        <button
                                            key={idx}
                                            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl ${
                                                dark ? 'hover:bg-white/[0.08]' : 'hover:bg-gray-100'
                                            } transition-colors text-left`}
                                        >
                                            <suggestion.icon className={`w-4 h-4 ${
                                                dark ? 'text-white/40' : 'text-gray-400'
                                            }`} />
                                            <span className={`text-sm ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                {suggestion.text}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </GlassCard>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="flex items-center space-x-2">
                        <button className={`p-3 rounded-2xl ${dark ? 'hover:bg-white/[0.08]' : 'hover:bg-gray-100'
                        } transition-all duration-200 hover:scale-110 hidden md:block`}>
                            <RefreshCw className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} />
                        </button>

                        <button className={`p-3 rounded-2xl ${dark ? 'hover:bg-white/[0.08]' : 'hover:bg-gray-100'
                        } transition-all duration-200 hover:scale-110 hidden md:block`}>
                            <Download className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} />
                        </button>

                        {/* AI Assistant */}
                        <button className={`p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:scale-110 shadow-lg`}>
                            <Bot className="w-5 h-5" />
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setDarkMode(!dark)}
                            className={`p-3 rounded-2xl ${dark ? 'hover:bg-white/[0.08]' : 'hover:bg-gray-100'
                            } transition-all duration-200 hover:scale-110`}
                        >
                            {dark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-700" />}
                        </button>

                        {/* Enhanced Notifications */}
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className={`relative p-3 rounded-2xl ${dark ? 'hover:bg-white/[0.08]' : 'hover:bg-gray-100'
                            } transition-all duration-200 hover:scale-110`}
                        >
                            <Bell className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} />
                            {notificationCount > 0 && (
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
                                    {notificationCount > 9 ? '9+' : notificationCount}
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Search */}
            {showSearch && (
                <div className="md:hidden mt-6">
                    <div className="relative">
                        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                            dark ? 'text-white/40' : 'text-gray-400'
                        }`} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="AI-Suche..."
                            className={`w-full pl-12 pr-6 py-4 rounded-2xl ${dark
                                ? 'bg-white/[0.08] border-white/[0.12] text-white placeholder-white/40'
                                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                            } border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 backdrop-blur-xl`}
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </header>
    );
};

// Enhanced Overview Dashboard with Real-time Data
const OverviewDashboard = ({ dark }) => {
    const [selectedPeriod, setSelectedPeriod] = useState('today');
    const [liveData, setLiveData] = useState({
        revenue: 1247,
        customers: 15,
        appointments: 12,
        avgServiceTime: 45,
        satisfaction: 4.9,
        utilization: 87
    });

    const [aiInsights, setAiInsights] = useState([
        {
            type: 'opportunity',
            title: 'Peak-Zeit Optimierung',
            description: 'Du könntest 23% mehr Umsatz machen, wenn du Dienstag 14-16 Uhr Premium-Services anbietest',
            impact: '+€156/Woche',
            confidence: 94,
            icon: TrendingUp,
            color: 'emerald'
        },
        {
            type: 'alert',
            title: 'Kunden-Abwanderung Risiko',
            description: '3 Stammkunden haben ihre Termine verschoben. Persönliche Nachfrage empfohlen.',
            impact: '-€320 Risiko',
            confidence: 87,
            icon: AlertTriangle,
            color: 'amber'
        },
        {
            type: 'success',
            title: 'Perfekte Kundenzufriedenheit',
            description: 'Deine letzten 15 Kunden haben 5-Sterne Bewertungen hinterlassen!',
            impact: '+€45 Bonus',
            confidence: 100,
            icon: Star,
            color: 'indigo'
        }
    ]);

    useEffect(() => {
        // Simulate real-time data updates
        const interval = setInterval(() => {
            setLiveData(prev => ({
                ...prev,
                revenue: prev.revenue + (Math.random() > 0.7 ? Math.floor(Math.random() * 85) : 0),
                customers: Math.random() > 0.8 ? prev.customers + 1 : prev.customers,
                utilization: Math.min(100, prev.utilization + (Math.random() - 0.5) * 2)
            }));
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-10">
            {/* AI Insights Banner */}
            <GlassCard dark={dark} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-4">
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                                <Brain className="w-8 h-8 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    AI Business Insights
                                </h3>
                                <p className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Personalisierte Empfehlungen für dein Business
                                </p>
                            </div>
                        </div>
                        <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all">
                            Alle Insights
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {aiInsights.map((insight, idx) => (
                            <div
                                key={idx}
                                className={`p-6 rounded-2xl border transition-all hover:scale-105 cursor-pointer ${
                                    dark ? 'bg-white/[0.05] border-white/[0.12] hover:bg-white/[0.08]' : 'bg-white border-gray-200 hover:bg-gray-50'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-xl ${
                                        insight.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-500' :
                                            insight.color === 'amber' ? 'bg-amber-500/20 text-amber-500' :
                                                'bg-indigo-500/20 text-indigo-500'
                                    }`}>
                                        <insight.icon className="w-5 h-5" />
                                    </div>
                                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                                        dark ? 'bg-white/10 text-white/70' : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        {insight.confidence}% sicher
                                    </span>
                                </div>
                                <h4 className={`font-semibold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {insight.title}
                                </h4>
                                <p className={`text-sm mb-4 ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    {insight.description}
                                </p>
                                <div className={`text-sm font-semibold ${
                                    insight.impact.includes('+') ? 'text-emerald-500' : 'text-amber-500'
                                }`}>
                                    {insight.impact}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </GlassCard>

            {/* Period Selector */}
            <div className="flex items-center justify-between">
                <div className={`flex p-2 ${dark ? 'bg-white/[0.08]' : 'bg-gray-100'} rounded-2xl`}>
                    {['today', 'week', 'month', 'quarter', 'year'].map((period) => (
                        <button
                            key={period}
                            onClick={() => setSelectedPeriod(period)}
                            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${selectedPeriod === period
                                ? dark ? 'bg-white text-black shadow-lg' : 'bg-white text-gray-900 shadow-md'
                                : dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            {period === 'today' ? 'Heute' :
                                period === 'week' ? 'Woche' :
                                    period === 'month' ? 'Monat' :
                                        period === 'quarter' ? 'Quartal' : 'Jahr'}
                        </button>
                    ))}
                </div>
                <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium hover:from-emerald-600 hover:to-teal-700 transition-all">
                    <Download className="w-4 h-4 inline mr-2" />
                    Export Report
                </button>
            </div>

            {/* Live Performance Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <KPICard
                    title="Live Umsatz"
                    value={liveData.revenue}
                    target={1500}
                    icon={CircleDollarSign}
                    color="emerald"
                    dark={dark}
                    trend={12.5}
                    subtitle="Heute"
                    comparison="gestern"
                    realTime={true}
                />
                <KPICard
                    title="Kundenzufriedenheit"
                    value={liveData.satisfaction}
                    target={5.0}
                    icon={Heart}
                    color="rose"
                    dark={dark}
                    trend={2.1}
                    subtitle="Ø Bewertung heute"
                    comparison="letzter Monat"
                />
                <KPICard
                    title="Salon Auslastung"
                    value={liveData.utilization}
                    target={100}
                    icon={Activity}
                    color="indigo"
                    dark={dark}
                    trend={-2.3}
                    subtitle="Echtzeit Kapazität"
                    comparison="letzter Monat"
                />
            </div>

            {/* Advanced Analytics Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Revenue Trends with Predictions */}
                <GlassCard dark={dark} glow>
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-2`}>
                                Umsatz-Trends & Prognose
                            </h3>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                AI-basierte 30-Tage Vorhersage
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className={`px-4 py-2 text-sm rounded-xl ${dark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
                            } hover:scale-105 transition-transform`}>
                                Details
                            </button>
                            <button className={`px-4 py-2 text-sm rounded-xl ${dark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
                            } hover:scale-105 transition-transform`}>
                                <Brain className="w-4 h-4 inline mr-1" />
                                AI
                            </button>
                        </div>
                    </div>
                    <AdvancedChart
                        type="line"
                        data={[1200, 1350, 1180, 1420, 1680, 1247, 1550, 1720, 1890, 2100, 2250, 2180]}
                        labels={['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']}
                        dark={dark}
                        height={320}
                        animation={true}
                        gradient={true}
                    />
                </GlassCard>

                {/* Customer Journey Analytics */}
                <GlassCard dark={dark} glow>
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-2`}>
                                Customer Journey Analytics
                            </h3>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Kundenerfahrung & Loyalität
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Crown className="w-5 h-5 text-amber-500" />
                            <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                VIP Tracking
                            </span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Customer Lifecycle Stages */}
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { stage: 'Neukunden', count: 23, color: 'indigo', percentage: 18 },
                                { stage: 'Stammkunden', count: 89, color: 'emerald', percentage: 72 },
                                { stage: 'VIP Kunden', count: 12, color: 'amber', percentage: 8 },
                                { stage: 'Reaktivierung', count: 3, color: 'rose', percentage: 2 }
                            ].map((stage, idx) => (
                                <div key={idx} className={`p-4 rounded-xl ${dark ? 'bg-white/[0.05]' : 'bg-gray-50'}`}>
                                    <div className={`text-2xl font-bold mb-1 ${
                                        stage.color === 'indigo' ? 'text-indigo-500' :
                                            stage.color === 'emerald' ? 'text-emerald-500' :
                                                stage.color === 'amber' ? 'text-amber-500' : 'text-rose-500'
                                    }`}>
                                        {stage.count}
                                    </div>
                                    <div className={`text-xs font-medium ${dark ? 'text-white/60' : 'text-gray-600'} mb-2`}>
                                        {stage.stage}
                                    </div>
                                    <div className={`h-1 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                        <div
                                            className={`h-full rounded-full ${
                                                stage.color === 'indigo' ? 'bg-indigo-500' :
                                                    stage.color === 'emerald' ? 'bg-emerald-500' :
                                                        stage.color === 'amber' ? 'bg-amber-500' : 'bg-rose-500'
                                            }`}
                                            style={{ width: `${stage.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Retention Rate */}
                        <div className={`p-6 rounded-xl ${dark ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10' : 'bg-gradient-to-r from-emerald-50 to-teal-50'}`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-1`}>
                                        Kundenbindungsrate
                                    </h4>
                                    <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                        12-Monats-Durchschnitt
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-emerald-500 mb-1">94.2%</div>
                                    <div className="flex items-center space-x-1 text-sm text-emerald-500">
                                        <TrendingUp className="w-4 h-4" />
                                        <span>+2.8%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Advanced Business Intelligence */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Real-time Activity Feed */}
                <GlassCard dark={dark} className="xl:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            Live Business Activity
                        </h3>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className={`text-sm ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                                Echtzeit Updates
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                        {[
                            {
                                icon: Calendar,
                                text: 'Anna Müller hat Termin für Freitag 14:00 gebucht',
                                time: 'vor 2 Min',
                                color: 'indigo',
                                value: '€85',
                                priority: 'high'
                            },
                            {
                                icon: Star,
                                text: 'Max Schmidt hat 5-Sterne Bewertung hinterlassen',
                                time: 'vor 8 Min',
                                color: 'amber',
                                value: '+10 Punkte',
                                priority: 'medium'
                            },
                            {
                                icon: CreditCard,
                                text: 'Zahlung von €120 erhalten (Julia Weber)',
                                time: 'vor 15 Min',
                                color: 'emerald',
                                value: '€120',
                                priority: 'high'
                            },
                            {
                                icon: UserPlus,
                                text: 'Neuer Kunde registriert: Thomas Klein',
                                time: 'vor 23 Min',
                                color: 'purple',
                                value: 'Neukunde',
                                priority: 'medium'
                            },
                            {
                                icon: Crown,
                                text: 'Sarah Müller ist jetzt VIP-Kunde (€1000+ Umsatz)',
                                time: 'vor 1 Std',
                                color: 'amber',
                                value: 'VIP Status',
                                priority: 'high'
                            },
                            {
                                icon: MessageSquare,
                                text: 'Automatische SMS-Erinnerung an 5 Kunden gesendet',
                                time: 'vor 2 Std',
                                color: 'cyan',
                                value: '5 SMS',
                                priority: 'low'
                            }
                        ].map((activity, idx) => (
                            <div key={idx} className={`flex items-start space-x-4 p-4 rounded-xl ${
                                dark ? 'hover:bg-white/[0.05]' : 'hover:bg-gray-50'
                            } transition-all cursor-pointer group relative overflow-hidden`}>
                                {activity.priority === 'high' && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 to-pink-500" />
                                )}

                                <div className={`p-3 rounded-xl ${
                                    activity.color === 'indigo' ? 'bg-indigo-500/20 text-indigo-500' :
                                        activity.color === 'amber' ? 'bg-amber-500/20 text-amber-500' :
                                            activity.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-500' :
                                                activity.color === 'purple' ? 'bg-purple-500/20 text-purple-500' :
                                                    'bg-cyan-500/20 text-cyan-500'
                                } group-hover:scale-110 transition-transform`}>
                                    <activity.icon className="w-5 h-5" />
                                </div>

                                <div className="flex-1">
                                    <p className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'} mb-1`}>
                                        {activity.text}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className={`text-xs ${dark ? 'text-white/40' : 'text-gray-500'}`}>
                                            {activity.time}
                                        </p>
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                            activity.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-600' :
                                                activity.color === 'amber' ? 'bg-amber-500/20 text-amber-600' :
                                                    dark ? 'bg-white/10 text-white/70' : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            {activity.value}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Quick Action Center */}
                <GlassCard dark={dark}>
                    <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-6`}>
                        Schnellaktionen
                    </h3>

                    <div className="space-y-4">
                        {[
                            {
                                icon: Calendar,
                                label: 'Termin buchen',
                                description: 'Schneller Checkout',
                                color: 'indigo',
                                urgent: false
                            },
                            {
                                icon: UserPlus,
                                label: 'Kunde hinzufügen',
                                description: 'Mit CRM Integration',
                                color: 'emerald',
                                urgent: false
                            },
                            {
                                icon: CreditCard,
                                label: 'Zahlung erfassen',
                                description: 'Bar, Karte, App',
                                color: 'purple',
                                urgent: true
                            },
                            {
                                icon: MessageSquare,
                                label: 'SMS Kampagne',
                                description: 'Personalisiert senden',
                                color: 'cyan',
                                urgent: false
                            },
                            {
                                icon: Gift,
                                label: 'Gutschein erstellen',
                                description: 'Digital & Print',
                                color: 'rose',
                                urgent: false
                            },
                            {
                                icon: BarChart3,
                                label: 'Report generieren',
                                description: 'AI-powered Insights',
                                color: 'amber',
                                urgent: false
                            }
                        ].map((action, idx) => (
                            <button
                                key={idx}
                                className={`w-full p-4 rounded-xl text-left transition-all duration-200 hover:scale-105 active:scale-95 group relative overflow-hidden ${
                                    dark ? 'bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08]' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                                }`}
                            >
                                {action.urgent && (
                                    <div className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                                )}

                                <div className="flex items-start space-x-3">
                                    <div className={`p-2 rounded-lg ${
                                        action.color === 'indigo' ? 'bg-indigo-500/20 text-indigo-500' :
                                            action.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-500' :
                                                action.color === 'purple' ? 'bg-purple-500/20 text-purple-500' :
                                                    action.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-500' :
                                                        action.color === 'rose' ? 'bg-rose-500/20 text-rose-500' :
                                                            'bg-amber-500/20 text-amber-500'
                                    } group-hover:scale-110 transition-transform`}>
                                        <action.icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'} mb-1`}>
                                            {action.label}
                                        </p>
                                        <p className={`text-xs ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                                            {action.description}
                                        </p>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 ${dark ? 'text-white/30' : 'text-gray-400'} group-hover:translate-x-1 transition-transform`} />
                                </div>
                            </button>
                        ))}
                    </div>
                </GlassCard>
            </div>

            {/* Performance Comparison & Benchmarks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <GlassCard dark={dark} glow>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            Branchenvergleich
                        </h3>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            dark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'
                        }`}>
                            Top 15%
                        </span>
                    </div>

                    <div className="space-y-6">
                        {[
                            { metric: 'Umsatz pro Kunde', value: '€287', benchmark: '€195', performance: 'above' },
                            { metric: 'Kundenbindungsrate', value: '94.2%', benchmark: '78%', performance: 'above' },
                            { metric: 'Durchschnittliche Wartezeit', value: '3 Min', benchmark: '8 Min', performance: 'above' },
                            { metric: 'Terminausfallrate', value: '2.1%', benchmark: '12%', performance: 'above' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                <div>
                                    <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {item.metric}
                                    </p>
                                    <p className={`text-sm ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                                        Branchenschnitt: {item.benchmark}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className={`text-xl font-bold ${item.performance === 'above' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {item.value}
                                    </p>
                                    {item.performance === 'above' && (
                                        <div className="flex items-center space-x-1 text-emerald-500">
                                            <TrendingUp className="w-3 h-3" />
                                            <span className="text-xs">Überdurchschnittlich</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard dark={dark} glow>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            Nächste Meilensteine
                        </h3>
                        <button className={`text-sm font-medium ${dark ? 'text-indigo-400' : 'text-indigo-600'} hover:underline`}>
                            Alle Ziele
                        </button>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                goal: '€30k Monatsumsatz',
                                current: 24580,
                                target: 30000,
                                deadline: '31. Jan',
                                priority: 'high'
                            },
                            {
                                goal: '50 Neukunden',
                                current: 23,
                                target: 50,
                                deadline: '28. Feb',
                                priority: 'medium'
                            },
                            {
                                goal: '1000 Social Follower',
                                current: 756,
                                target: 1000,
                                deadline: '15. Mär',
                                priority: 'low'
                            }
                        ].map((goal, idx) => {
                            const progress = (goal.current / goal.target) * 100;
                            return (
                                <div key={idx} className={`p-4 rounded-xl ${
                                    dark ? 'bg-white/[0.05]' : 'bg-gray-50'
                                }`}>
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            {goal.goal}
                                        </h4>
                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                            goal.priority === 'high' ? 'bg-rose-500/20 text-rose-500' :
                                                goal.priority === 'medium' ? 'bg-amber-500/20 text-amber-500' :
                                                    'bg-emerald-500/20 text-emerald-500'
                                        }`}>
                                            {goal.deadline}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            {goal.current.toLocaleString()} / {goal.target.toLocaleString()}
                                        </span>
                                        <span className={`text-sm font-semibold ${
                                            progress >= 80 ? 'text-emerald-500' :
                                                progress >= 50 ? 'text-amber-500' : 'text-rose-500'
                                        }`}>
                                            {Math.round(progress)}%
                                        </span>
                                    </div>
                                    <div className={`h-2 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ${
                                                progress >= 80 ? 'bg-emerald-500' :
                                                    progress >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                                            }`}
                                            style={{ width: `${Math.min(progress, 100)}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

// Advanced Loyalty Program Component
const LoyaltyProgram = ({ dark }) => {
    const [loyaltyTiers] = useState([
        {
            name: 'Bronze',
            minSpend: 0,
            customers: 89,
            benefits: ['5% Rabatt', 'Geburtstags-Bonus'],
            color: 'amber',
            icon: Medal
        },
        {
            name: 'Silber',
            minSpend: 500,
            customers: 45,
            benefits: ['10% Rabatt', 'Prioritäts-Buchung', 'Kostenlose Beratung'],
            color: 'gray',
            icon: Award
        },
        {
            name: 'Gold',
            minSpend: 1000,
            customers: 23,
            benefits: ['15% Rabatt', 'VIP-Behandlung', 'Exklusive Events'],
            color: 'amber',
            icon: Crown
        },
        {
            name: 'Platin',
            minSpend: 2000,
            customers: 8,
            benefits: ['20% Rabatt', 'Persönlicher Stylist', 'Haus-Service'],
            color: 'indigo',
            icon: Gem
        }
    ]);

    const [pointsDistribution] = useState([
        { action: 'Service-Buchung', points: 10, multiplier: '€1 = 1 Punkt' },
        { action: 'Empfehlung', points: 100, multiplier: 'Pro neuer Kunde' },
        { action: 'Social Media Share', points: 25, multiplier: 'Pro Post' },
        { action: 'Bewertung abgeben', points: 50, multiplier: 'Pro Bewertung' },
        { action: 'Geburtstag', points: 200, multiplier: 'Jährlich' }
    ]);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-2`}>
                        Treueprogramm Management
                    </h2>
                    <p className={`text-lg ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                        Kundenbindung durch intelligente Belohnungen
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700 transition-all">
                        <Crown className="w-4 h-4 inline mr-2" />
                        VIP Kunden
                    </button>
                    <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all">
                        <Plus className="w-4 h-4 inline mr-2" />
                        Neue Aktion
                    </button>
                </div>
            </div>

            {/* Program Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <GlassCard dark={dark}>
                    <div className="text-center">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 inline-block mb-4">
                            <Users className="w-8 h-8 text-indigo-500" />
                        </div>
                        <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-1`}>165</p>
                        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>Aktive Mitglieder</p>
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="text-center">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 inline-block mb-4">
                            <Gift className="w-8 h-8 text-emerald-500" />
                        </div>
                        <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-1`}>€2,340</p>
                        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>Punkte-Wert</p>
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="text-center">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 inline-block mb-4">
                            <Repeat className="w-8 h-8 text-amber-500" />
                        </div>
                        <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-1`}>87%</p>
                        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>Wiederkehr-Rate</p>
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="text-center">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 inline-block mb-4">
                            <TrendingUp className="w-8 h-8 text-rose-500" />
                        </div>
                        <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-1`}>+23%</p>
                        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>Umsatz-Steigerung</p>
                    </div>
                </GlassCard>
            </div>

            {/* Loyalty Tiers */}
            <GlassCard dark={dark}>
                <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-8`}>
                    Treue-Stufen & Verteilung
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {loyaltyTiers.map((tier, idx) => (
                        <div key={idx} className={`p-6 rounded-2xl border transition-all hover:scale-105 cursor-pointer ${
                            dark ? 'bg-white/[0.05] border-white/[0.12] hover:bg-white/[0.08]' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        }`}>
                            <div className="text-center">
                                <div className={`p-4 rounded-2xl inline-block mb-4 ${
                                    tier.color === 'amber' ? 'bg-amber-500/20' :
                                        tier.color === 'gray' ? 'bg-gray-500/20' :
                                            'bg-indigo-500/20'
                                }`}>
                                    <tier.icon className={`w-8 h-8 ${
                                        tier.color === 'amber' ? 'text-amber-500' :
                                            tier.color === 'gray' ? 'text-gray-500' :
                                                'text-indigo-500'
                                    }`} />
                                </div>
                                <h4 className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-2`}>
                                    {tier.name}
                                </h4>
                                <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'} mb-4`}>
                                    ab €{tier.minSpend}
                                </p>
                                <div className={`text-2xl font-bold mb-4 ${
                                    tier.color === 'amber' ? 'text-amber-500' :
                                        tier.color === 'gray' ? 'text-gray-500' :
                                            'text-indigo-500'
                                }`}>
                                    {tier.customers}
                                </div>
                                <div className="space-y-2">
                                    {tier.benefits.map((benefit, benefitIdx) => (
                                        <p key={benefitIdx} className={`text-xs ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                                            • {benefit}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>

            {/* Points System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <GlassCard dark={dark}>
                    <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-6`}>
                        Punkte-System
                    </h3>

                    <div className="space-y-4">
                        {pointsDistribution.map((item, idx) => (
                            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl ${
                                dark ? 'bg-white/[0.05]' : 'bg-gray-50'
                            }`}>
                                <div>
                                    <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {item.action}
                                    </p>
                                    <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                        {item.multiplier}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-bold text-indigo-500">
                                        +{item.points}
                                    </div>
                                    <div className={`text-xs ${dark ? 'text-white/40' : 'text-gray-500'}`}>
                                        Punkte
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard dark={dark}>
                    <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-6`}>
                        Aktuelle Kampagnen
                    </h3>

                    <div className="space-y-6">
                        {[
                            {
                                title: 'Doppelte Punkte Weekend',
                                description: 'Sa & So: 2x Punkte auf alle Services',
                                status: 'active',
                                participants: 34,
                                revenue: 890
                            },
                            {
                                title: 'Freunde werben',
                                description: '200 Bonus-Punkte pro Empfehlung',
                                status: 'active',
                                participants: 12,
                                revenue: 450
                            },
                            {
                                title: 'Social Media Challenge',
                                description: '50 Punkte pro Instagram Story',
                                status: 'draft',
                                participants: 0,
                                revenue: 0
                            }
                        ].map((campaign, idx) => (
                            <div key={idx} className={`p-4 rounded-xl border ${
                                dark ? 'bg-white/[0.05] border-white/[0.12]' : 'bg-gray-50 border-gray-200'
                            }`}>
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h4 className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-1`}>
                                            {campaign.title}
                                        </h4>
                                        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            {campaign.description}
                                        </p>
                                    </div>
                                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                                        campaign.status === 'active'
                                            ? 'bg-emerald-500/20 text-emerald-600'
                                            : 'bg-amber-500/20 text-amber-600'
                                    }`}>
                                        {campaign.status === 'active' ? 'Aktiv' : 'Entwurf'}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            Teilnehmer:
                                        </span>
                                        <span className={`ml-2 font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            {campaign.participants}
                                        </span>
                                    </div>
                                    <div>
                                        <span className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            Umsatz:
                                        </span>
                                        <span className={`ml-2 font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            €{campaign.revenue}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

// Mobile Navigation Component
const MobileNav = ({ activeView, setActiveView, dark }) => {
    const mainItems = [
        { id: 'overview', icon: Home, label: 'Start' },
        { id: 'appointments', icon: Calendar, label: 'Termine' },
        { id: 'quick-booking', icon: Plus, label: '', isAction: true },
        { id: 'customers', icon: Users, label: 'Kunden' },
        { id: 'loyalty', icon: Crown, label: 'Loyalität' }
    ];

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden ${
            dark ? 'bg-black/95' : 'bg-white/95'
        } backdrop-blur-2xl border-t ${
            dark ? 'border-white/[0.08]' : 'border-gray-200/50'
        } safe-area-bottom shadow-2xl shadow-black/20`}>
            <div className="grid grid-cols-5 items-center py-2">
                {mainItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveView(item.id)}
                        className={`
                            relative flex flex-col items-center justify-center py-3 px-2
                            ${item.isAction
                            ? ''
                            : activeView === item.id
                                ? dark ? 'text-white' : 'text-gray-900'
                                : dark ? 'text-white/40' : 'text-gray-400'
                        }
                            transition-all duration-300
                        `}
                    >
                        {item.isAction ? (
                            <div className={`
                                absolute -top-8 p-4 rounded-full shadow-2xl
                                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                                text-white transform hover:scale-110 transition-transform
                                border-4 ${dark ? 'border-black' : 'border-white'}
                            `}>
                                <item.icon className="w-6 h-6" />
                            </div>
                        ) : (
                            <>
                                <item.icon className={`w-5 h-5 mb-1 transition-transform ${
                                    activeView === item.id ? 'scale-110' : ''
                                }`} />
                                <span className="text-xs font-medium">{item.label}</span>
                                {activeView === item.id && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-500 rounded-full" />
                                )}
                            </>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Main Dashboard Component
const ProfessionalSalonDashboard = () => {
    const [dark, setDarkMode] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    const [activeView, setActiveView] = useState('overview');
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);

    const viewTitles = {
        overview: { title: 'Business Intelligence', subtitle: 'AI-gestützte Einblicke in dein Salon-Imperium' },
        loyalty: { title: 'Treueprogramm', subtitle: 'Kundenbindung durch intelligente Belohnungen' },
        insights: { title: 'AI Insights', subtitle: 'Künstliche Intelligenz optimiert dein Business' },
        realtime: { title: 'Live Analytics', subtitle: 'Echtzeit-Monitoring deiner Performance' }
    };

    const renderActiveView = () => {
        switch (activeView) {
            case 'overview':
                return <OverviewDashboard dark={dark} />;
            case 'loyalty':
                return <LoyaltyProgram dark={dark} />;
            default:
                return <OverviewDashboard dark={dark} />;
        }
    };

    return (
        <div className={`min-h-screen font-sans transition-all duration-500 ${
            dark
                ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white'
                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
        }`}>
            {/* Background Pattern */}
            <div className="fixed inset-0 z-0">
                <div className={`absolute inset-0 ${
                    dark
                        ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]'
                        : 'bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]'
                }`} />
            </div>

            <Sidebar
                dark={dark}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                activeView={activeView}
                setActiveView={setActiveView}
            />

            <div className={`relative z-10 transition-all duration-500 ${collapsed ? 'lg:pl-20' : 'lg:pl-80'}`}>
                <Header
                    dark={dark}
                    setDarkMode={setDarkMode}
                    title={viewTitles[activeView]?.title || 'SalonElite Dashboard'}
                    subtitle={viewTitles[activeView]?.subtitle}
                    showNotifications={showNotifications}
                    setShowNotifications={setShowNotifications}
                    notificationCount={7}
                />

                <main className="p-8 pb-32 lg:pb-8 relative">
                    {renderActiveView()}
                </main>
            </div>

            <MobileNav activeView={activeView} setActiveView={setActiveView} dark={dark} />

            {/* Custom Styles */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(99, 102, 241, 0.3);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(99, 102, 241, 0.5);
                }

                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }

                .safe-area-bottom {
                    padding-bottom: env(safe-area-inset-bottom);
                }

                @supports (backdrop-filter: blur(0)) {
                    .backdrop-blur-xl {
                        backdrop-filter: blur(24px);
                    }
                    .backdrop-blur-2xl {
                        backdrop-filter: blur(40px);
                    }
                    .backdrop-blur-3xl {
                        backdrop-filter: blur(64px);
                    }
                }
            `}</style>
        </div>
    );
};

export default ProfessionalSalonDashboard;