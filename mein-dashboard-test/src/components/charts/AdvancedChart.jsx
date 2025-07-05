// src/components/charts/AdvancedChart.jsx
import React, { useState, useEffect, useRef } from 'react';

const AdvancedChart = ({ type = 'line', data, labels, dark, height = 200 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
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
        if (type === 'line' && data && data.length > 0) {
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');

            ctx.fillStyle = gradient;
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 2;

            ctx.beginPath();
            const maxValue = Math.max(...data);
            data.forEach((value, index) => {
                const x = (width / (data.length - 1)) * index;
                const y = height - (value / maxValue) * height;

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
                const y = height - (value / maxValue) * height;

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

export default AdvancedChart;