// src/views/ServicesManagement.jsx
import React, { useState } from 'react';
import GlassCard from '../components/ui/GlassCard';
import { Plus, Edit, Trash2 } from '../lib/icons';

const ServicesManagement = ({ dark }) => {
    const [services, setServices] = useState([
        { id: 1, name: 'Herrenschnitt', duration: 30, price: 35, category: 'Schnitt' },
        { id: 2, name: 'Damenschnitt', duration: 45, price: 55, category: 'Schnitt' },
        { id: 3, name: 'Färben (kurz)', duration: 90, price: 65, category: 'Farbe' },
        { id: 4, name: 'Färben (lang)', duration: 120, price: 95, category: 'Farbe' },
        { id: 5, name: 'Strähnen', duration: 120, price: 85, category: 'Farbe' },
        { id: 6, name: 'Bartpflege', duration: 30, price: 25, category: 'Bart' },
        { id: 7, name: 'Hochzeitsfrisur', duration: 90, price: 120, category: 'Styling' },
        { id: 8, name: 'Dauerwelle', duration: 150, price: 110, category: 'Behandlung' }
    ]);

    const categories = [...new Set(services.map(s => s.category))];
    const [activeCategory, setActiveCategory] = useState('Alle');

    const filteredServices = services.filter(s => activeCategory === 'Alle' || s.category === activeCategory);


    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Service-Verwaltung
                </h2>
                <button className={`
                    px-4 py-2 rounded-lg font-medium transition-all
                    ${dark
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-900'
                }
                `}>
                    <Plus className="w-4 h-4 inline mr-2" />
                    Neuer Service
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Service Categories */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Kategorien
                    </h3>
                    <div className="space-y-2">
                        <button
                            onClick={() => setActiveCategory('Alle')}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                activeCategory === 'Alle' ? (dark ? 'bg-blue-500/20 text-white' : 'bg-blue-50 text-blue-900') : (dark ? 'hover:bg-white/10 text-white/80' : 'hover:bg-gray-100 text-gray-700')
                            }`}>
                            Alle Services ({services.length})
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                    activeCategory === category ? (dark ? 'bg-blue-500/20 text-white' : 'bg-blue-50 text-blue-900') : (dark ? 'hover:bg-white/10 text-white/80' : 'hover:bg-gray-100 text-gray-700')
                                }`}
                            >
                                {category} ({services.filter(s => s.category === category).length})
                            </button>
                        ))}
                    </div>
                </GlassCard>

                {/* Services List */}
                <div className="lg:col-span-3">
                    <GlassCard dark={dark} padding={false}>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                <tr className={`border-b ${dark ? 'border-white/10' : 'border-gray-200'}`}>
                                    <th className={`text-left py-3 px-4 font-medium ${
                                        dark ? 'text-white/60' : 'text-gray-600'
                                    }`}>Service</th>
                                    <th className={`text-left py-3 px-4 font-medium ${
                                        dark ? 'text-white/60' : 'text-gray-600'
                                    }`}>Kategorie</th>
                                    <th className={`text-left py-3 px-4 font-medium ${
                                        dark ? 'text-white/60' : 'text-gray-600'
                                    }`}>Dauer</th>
                                    <th className={`text-left py-3 px-4 font-medium ${
                                        dark ? 'text-white/60' : 'text-gray-600'
                                    }`}>Preis</th>
                                    <th className={`text-right py-3 px-4 font-medium ${
                                        dark ? 'text-white/60' : 'text-gray-600'
                                    }`}>Aktionen</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredServices.map((service) => (
                                    <tr
                                        key={service.id}
                                        className={`border-b ${
                                            dark ? 'border-white/5 hover:bg-white/5' : 'border-gray-100 hover:bg-gray-50'
                                        } transition-colors`}
                                    >
                                        <td className={`py-3 px-4 font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            {service.name}
                                        </td>
                                        <td className={`py-3 px-4 ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                                <span className={`px-2 py-1 text-xs rounded-full ${
                                                    dark ? 'bg-white/10' : 'bg-gray-100'
                                                }`}>
                                                    {service.category}
                                                </span>
                                        </td>
                                        <td className={`py-3 px-4 ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                            {service.duration} Min
                                        </td>
                                        <td className={`py-3 px-4 font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            €{service.price.toFixed(2)}
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            <button className={`p-1 rounded ${
                                                dark ? 'hover:bg-white/10 text-white/80' : 'hover:bg-gray-200 text-gray-700'
                                            } mr-1`}>
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className={`p-1 rounded ${
                                                dark ? 'hover:bg-white/10 text-white/80' : 'hover:bg-gray-200 text-gray-700'
                                            }`}>
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default ServicesManagement;