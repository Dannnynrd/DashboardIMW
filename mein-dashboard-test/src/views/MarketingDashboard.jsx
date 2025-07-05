// src/views/MarketingDashboard.jsx
import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { Megaphone, Instagram, Facebook, Globe, Star } from '../lib/icons';

const MarketingDashboard = ({ dark }) => {
    const socialMediaStats = {
        instagram: { followers: 1234, engagement: 8.5, posts: 156 },
        facebook: { followers: 892, engagement: 5.2, posts: 98 },
        google: { reviews: 189, rating: 4.9, responses: 95 }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Marketing & Social Media
                </h2>
                <button className={`
                    px-4 py-2 rounded-lg font-medium transition-all text-sm
                    ${dark
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-900'
                }
                `}>
                    <Megaphone className="w-4 h-4 inline mr-2" />
                    Neue Kampagne
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Instagram */}
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            Instagram
                        </h3>
                        <Instagram className="w-5 h-5 text-pink-500" />
                    </div>
                    <div className="space-y-3">
                        <div>
                            <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {socialMediaStats.instagram.followers.toLocaleString('de-DE')}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Follower (+124 diese Woche)
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                <p className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {socialMediaStats.instagram.engagement}%
                                </p>
                                <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Engagement Rate
                                </p>
                            </div>
                            <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                <p className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {socialMediaStats.instagram.posts}
                                </p>
                                <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Posts
                                </p>
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Facebook */}
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            Facebook
                        </h3>
                        <Facebook className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="space-y-3">
                        <div>
                            <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {socialMediaStats.facebook.followers.toLocaleString('de-DE')}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Follower (+56 diese Woche)
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                <p className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {socialMediaStats.facebook.engagement}%
                                </p>
                                <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Engagement Rate
                                </p>
                            </div>
                            <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                <p className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {socialMediaStats.facebook.posts}
                                </p>
                                <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Posts
                                </p>
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Google Reviews */}
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            Google Business
                        </h3>
                        <Globe className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="space-y-3">
                        <div>
                            <div className="flex items-center space-x-2">
                                <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {socialMediaStats.google.rating}
                                </p>
                                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            </div>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                {socialMediaStats.google.reviews} Bewertungen
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                <p className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {socialMediaStats.google.responses}%
                                </p>
                                <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Antwortrate
                                </p>
                            </div>
                            <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                <p className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    24h
                                </p>
                                <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Antwortzeit
                                </p>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Campaign Performance */}
            <GlassCard dark={dark}>
                <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                    Aktuelle Kampagnen
                </h3>
                <div className="space-y-3">
                    {[
                        { name: 'Sommer-Special 20% Rabatt', status: 'active', reach: 3420, conversions: 28, revenue: 2100 },
                        { name: 'Neue Kunden Willkommenspaket', status: 'active', reach: 1890, conversions: 15, revenue: 825 },
                        { name: 'Instagram Gewinnspiel', status: 'completed', reach: 5200, conversions: 42, revenue: 3150 }
                    ].map((campaign, idx) => (
                        <div key={idx} className={`p-4 rounded-lg border ${
                            campaign.status === 'active'
                                ? dark ? 'bg-green-500/10 border-green-500/30' : 'bg-green-50 border-green-300'
                                : dark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
                        }`}>
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {campaign.name}
                                    </p>
                                    <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                        Reichweite: {campaign.reach.toLocaleString('de-DE')} • Conversions: {campaign.conversions}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className={`font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        €{campaign.revenue.toLocaleString('de-DE')}
                                    </p>
                                    {campaign.status === 'active' && (
                                        <span className="text-xs text-green-500 font-medium">
                                            Aktiv
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default MarketingDashboard;