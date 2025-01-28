'use client';

import Calendar from '@/components/SelectSchedule/Calendar';
import SelectTime from '@/components/SelectSchedule/SelectTime';

export default function SelectSchedulePage() {
    return (
        <div className="min-h-screen bg-white px-4 pt-2">
            <Calendar />
            <SelectTime times={['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30']} />
        </div>
    );
}