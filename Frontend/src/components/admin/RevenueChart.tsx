import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, ArrowRight } from 'lucide-react';

interface ChartData {
  date: string;
  bookings: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          {new Date(label).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {payload[0].value.toLocaleString()} Bookings
        </p>
      </div>
    );
  }
  return null;
};

export default function RevenueChart({ chartData }: { chartData: ChartData[] }) {
  const [hoveredData, setHoveredData] = useState<ChartData | null>(null);
  
  const sortedChartData = chartData.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
  });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getPercentageChange = () => {
    if (sortedChartData.length < 2) return 0;
    const latest = sortedChartData[sortedChartData.length - 1].bookings;
    const previous = sortedChartData[sortedChartData.length - 2].bookings;
    return ((latest - previous) / previous) * 100;
  };

  const percentageChange = getPercentageChange();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            Bookings Overview
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Daily booking statistics
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full ${
          percentageChange >= 0 
            ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
            : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
        }`}>
          <span className="text-sm font-medium">
            {percentageChange >= 0 ? '+' : ''}{percentageChange.toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={sortedChartData}
            onMouseMove={(data: any) => {
              if (data.activePayload) {
                setHoveredData(data.activePayload[0].payload);
              }
            }}
            onMouseLeave={() => setHoveredData(null)}
          >
            <defs>
              <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              tick={{ fill: '#6B7280' }}
              tickLine={{ stroke: '#6B7280' }}
            />
            <YAxis
              tick={{ fill: '#6B7280' }}
              tickLine={{ stroke: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="bookings"
              stroke="#22C55E"
              fill="url(#colorBookings)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <Link
        to="/admin/dashboard/detailed-report"
        className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-200 group"
      >
        View Detailed Report
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}