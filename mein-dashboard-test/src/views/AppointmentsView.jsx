// src/views/AppointmentsView.jsx
import React, { useState } from 'react';
import GlassCard from '../components/ui/GlassCard';
import { Plus, Phone, FileText, Edit, Trash2 } from '../lib/icons';

const AppointmentsView = ({ dark }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewMode, setViewMode] = useState('day'); // day, week, month
    const [showAddModal, setShowAddModal] = useState(false);
    const [appointments, setAppointments] = useState([
        { id: 1, time: '09:00', duration: 2, client: 'Anna Müller', service: 'Färben & Schnitt', price: 120, status: 'confirmed', phone: '0170-1234567', notes: 'Bevorzugt Naturfarben' },
        { id: 2, time: '11:30', duration: 1, client: 'Max Schmidt', service: 'Herrenschnitt', price: 35, status: 'confirmed', phone: '0171-2345678' },
        { id: 3, time: '14:00', duration: 1.5, client: 'Julia Weber', service: 'Styling', price: 65, status: 'pending', phone: '0172-3456789', notes: 'Hochzeitsfrisur' },
        { id: 4, time: '16:00', duration: 1, client: 'Thomas Klein', service: 'Bartpflege', price: 45, status: 'confirmed', phone: '0173-4567890' }
    ]);

    // Simple Calendar Logic
    const today = new Date();
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const startingDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // 0=Monday, 6=Sunday
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
        calendarDays.push({ key: `empty-${i}`, day: null });
    }
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
        const isToday = date.toDateString() === today.toDateString();
        const isSelected = date.toDateString() === selectedDate.toDateString();
        calendarDays.push({ key: i, day: i, isToday, isSelected });
    }

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
                    <button
                        onClick={() => setShowAddModal(true)}
                        className={`
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
                        {calendarDays.map(d => {
                            const hasAppointments = d.day && [5, 12, 15, 19, 26].includes(d.day); // Mock data

                            return (
                                <button
                                    key={d.key}
                                    className={`
                                        aspect-square rounded-lg flex items-center justify-center text-sm
                                        ${!d.day ? 'cursor-default' :
                                        d.isSelected ? (dark ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white') :
                                            d.isToday ? (dark ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-900') :
                                                (dark ? 'text-white/60 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-50')
                                    } transition-colors relative
                                    `}
                                    onClick={() => d.day && setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), d.day))}
                                    disabled={!d.day}
                                >
                                    {d.day}
                                    {hasAppointments && !d.isSelected && (
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
                                                {appointment.notes && (
                                                    <div className="flex items-center space-x-1">
                                                        <FileText className={`w-3 h-3 ${dark ? 'text-white/40' : 'text-gray-400'}`} />
                                                        <span className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                            {appointment.notes}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                €{appointment.price}
                                            </p>
                                            <div className="flex space-x-1 mt-2">
                                                <button className={`p-1 rounded ${
                                                    dark ? 'hover:bg-white/10 text-white/80' : 'hover:bg-gray-200 text-gray-700'
                                                }`}>
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button className={`p-1 rounded ${
                                                    dark ? 'hover:bg-white/10 text-white/80' : 'hover:bg-gray-200 text-gray-700'
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

export default AppointmentsView;