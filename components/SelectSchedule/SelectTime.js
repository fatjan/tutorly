import { Sun, Sunset } from 'lucide-react';

export default function SelectTime({times}) {
    const afternoonTimes = times.slice(0, 4);
    const eveningTimes = times.slice(4, 8);
    return (
        <div>
            <div className="flex flex-col justify-center">
                <div className="flex items-left space-x-2">
                    <Sun className="w-6 h-6" />
                    <div>Afternoon</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    {afternoonTimes.map((time, index) => (
                        <div key={index}>
                            <button className="border border-gray-300 rounded-lg m-1 p-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-100">
                                {time}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-2">
                    <Sunset className="w-6 h-6" />
                    <div>Evening</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    {eveningTimes.map((time, index) => (
                        <div key={index}>
                            <button className="border border-gray-300 rounded-lg m-1 p-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-100">
                                {time}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}