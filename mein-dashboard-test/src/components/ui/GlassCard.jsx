// src/components/ui/GlassCard.jsx
import React from 'react';

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

export default GlassCard;