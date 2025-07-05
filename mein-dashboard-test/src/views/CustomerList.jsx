// src/views/CustomerList.jsx
import React, { useState } from 'react';
import GlassCard from '../components/ui/GlassCard';
import { UserPlus, Search, Star, Calendar, MessageSquare, Users } from '../lib/icons';


const CustomerList = ({ dark }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [customers, setCustomers] = useState([
        { id: 1, name: 'Anna Müller', phone: '0170-1234567', visits: 24, totalSpent: 2890, lastVisit: '12.06.2024', rating: 5, favorite: true },
        { id: 2, name: 'Max Schmidt', phone: '0171-2345678', visits: 18, totalSpent: 630, lastVisit: '10.06.2024', rating: 5 },
        { id: 3, name: 'Julia Weber', phone: '0172-3456789', visits: 12, totalSpent: 1450, lastVisit: '08.06.2024', rating: 4.5 },
        { id: 4, name: 'Thomas Klein', phone: '0173-4567890', visits: 36, totalSpent: 3240, lastVisit: '14.06.2024', rating: 5, favorite: true },
        { id: 5, name: 'Sarah Becker', phone: '0174-5678901', visits: 8, totalSpent: 560, lastVisit: '05.06.2024', rating: 4 }
    ]);
    const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);


    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm)
    );

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Kundenverwaltung
                </h2>
                <button className={`
                    px-4 py-2 rounded-lg font-medium transition-all
                    ${dark
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-900'
                }
                `}>
                    <UserPlus className="w-4 h-4 inline mr-2" />
                    Neuer Kunde
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Customer List */}
                <div className="lg:col-span-2">
                    <GlassCard dark={dark}>
                        <div className="mb-4">
                            <div className="relative">
                                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                                    dark ? 'text-white/40' : 'text-gray-400'
                                }`} />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Kunde suchen..."
                                    className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                                        dark
                                            ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                                            : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400'
                                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            {filteredCustomers.map((customer) => (
                                <div
                                    key={customer.id}
                                    onClick={() => setSelectedCustomer(customer)}
                                    className={`
                                        p-4 rounded-lg border cursor-pointer transition-all
                                        ${selectedCustomer?.id === customer.id
                                        ? dark
                                            ? 'bg-blue-500/20 border-blue-500/40'
                                            : 'bg-blue-50 border-blue-300'
                                        : dark
                                            ? 'bg-white/5 border-white/10 hover:bg-white/10'
                                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                                    }
                                    `}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-medium ${
                                                dark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-700'
                                            }`}>
                                                {customer.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                    {customer.name}
                                                </p>
                                                <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                    {customer.phone}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            {customer.favorite && (
                                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                            )}
                                            <div className="text-right">
                                                <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                    €{customer.totalSpent.toLocaleString('de-DE')}
                                                </p>
                                                <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                    {customer.visits} Besuche
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>

                {/* Customer Details */}
                <GlassCard dark={dark}>
                    {selectedCustomer ? (
                        <>
                            <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                                Kundendetails
                            </h3>

                            <div className="space-y-4">
                                <div className={`text-center p-4 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium mx-auto mb-3 ${
                                        dark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-700'
                                    }`}>
                                        {selectedCustomer.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <p className={`font-semibold text-lg ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {selectedCustomer.name}
                                    </p>
                                    <div className="flex items-center justify-center space-x-1 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < Math.floor(selectedCustomer.rating)
                                                        ? 'text-yellow-500 fill-yellow-500'
                                                        : (dark ? 'text-white/20' : 'text-gray-300')
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            Telefon
                                        </span>
                                        <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            {selectedCustomer.phone}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            Besuche
                                        </span>
                                        <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            {selectedCustomer.visits}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            Ausgegeben
                                        </span>
                                        <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            €{selectedCustomer.totalSpent.toLocaleString('de-DE')}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            Letzter Besuch
                                        </span>
                                        <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            {selectedCustomer.lastVisit}
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-4 space-y-2">
                                    <button className={`w-full py-2 rounded-lg ${
                                        dark
                                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                                    } transition-colors`}>
                                        <Calendar className="w-4 h-4 inline mr-2" />
                                        Termin buchen
                                    </button>
                                    <button className={`w-full py-2 rounded-lg border ${
                                        dark
                                            ? 'border-white/20 text-white hover:bg-white/10'
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                    } transition-colors`}>
                                        <MessageSquare className="w-4 h-4 inline mr-2" />
                                        Nachricht senden
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className={`text-center py-12 ${dark ? 'text-white/40' : 'text-gray-400'}`}>
                            <Users className="w-12 h-12 mx-auto mb-4" />
                            <p>Kunde auswählen für Details</p>
                        </div>
                    )}
                </GlassCard>
            </div>
        </div>
    );
};

export default CustomerList;