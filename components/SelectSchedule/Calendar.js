'use client';

import { useState } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [duration, setDuration] = useState(25); // 25 or 50 minutes

    const days = Array.from({ length: 7 }, (_, i) => addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), i));

    const activeButtonClass = 'bg-white text-black border border-gray-300 rounded-lg';
    const inactiveButtonClass = 'bg-black-100 text-gray-700';

    return (
        <div className="mx-auto w-full md:w-md lg:w-lg xl:w-xl mb-4 mt-20">
            {/* Duration Selector */}
            <div id="duration-selector" className="flex bg-gray-100 rounded-lg overflow-hidden mb-4">
                <button
                    onClick={() => setDuration(25)}
                    className={`w-1/2 py-2 text-center font-medium font-bold ${
                        duration === 25 ? activeButtonClass : inactiveButtonClass
                    }`}
                >
                    25 min
                </button>
                <button
                    onClick={() => setDuration(50)}
                    className={`w-1/2 py-2 text-center font-medium font-bold ${
                        duration === 50 ? activeButtonClass : inactiveButtonClass
                    }`}
                >
                    50 min
                </button>
            </div>

            {/* Calendar */}
            <div id="calendar" className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">December 2024</h2>
                    <button className="text-black-500 font-medium underline">Today</button>
                </div>

                <div className="grid grid-cols-7 text-center text-gray-500 mb-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>

                <div className="grid grid-cols-7 text-center">
                    {days.map((day, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedDate(day)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                                selectedDate && format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                                    ? 'bg-pink-500 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {day.getDate()}
                        </button>
                    ))}
                </div>

                <p className="text-sm text-gray-500 mt-4 text-center">
                    In your time zone, Asia/Singapore (GMT +8:00)
                </p>
            </div>
        </div>
    );
}
