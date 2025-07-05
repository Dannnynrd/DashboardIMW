// src/components/ai/AIAssistant.jsx
import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { Bot, X, Send, Brain } from '../../lib/icons';


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
        setMessages(prev => [...prev, { type: 'user', text: messageText }]);
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
                <GlassCard dark={dark} className="w-96 mb-4" blur="xl" padding={false}>
                    <div className="p-4">
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

export default AIAssistant;