import { BadgeCheck, TrendingUp } from 'lucide-react';

const TutorRefundable = () => {
    return (
        <div className="flex flex-col border-b border-gray-200 space-y-2 py-4">
            <div className="flex flex-row space-x-2">
                <div className="flex flex-col items-start space-x-2">
                    <BadgeCheck className="w-6 h-6 fill-black text-white" />
                </div>
                <div className="flex flex-col items-left">
                    <p className="text-sm text-gray-500 font-bold">100% refundable</p>
                    <p className="text-sm text-gray-500">Try another tutor for free or get a refund of your unused balance.</p>
                </div>
            </div>
            <div className="flex flex-row space-x-2">
                <div className="flex flex-col items-start space-x-2">
                    <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-left">
                    <p className="text-sm text-gray-500 font-bold">High demand</p>
                    <p className="text-sm text-gray-500">21 lessons booked in the last 48 hours.</p>
                </div>
            </div>
        </div>
    )
}

export default TutorRefundable;