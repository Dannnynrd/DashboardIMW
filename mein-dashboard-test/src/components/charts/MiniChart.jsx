// src/components/charts/MiniChart.jsx
import React from 'react';

const MiniChart = ({ data, color = 'blue', height = 40, dark }) => {
    if (!data || data.length === 0) return null;
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

export default MiniChart;