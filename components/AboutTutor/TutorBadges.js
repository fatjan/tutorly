import { ShieldCheckIcon} from 'lucide-react';

const TutorBadges = () => {
    return (
        <div className="flex flex-row justify-between space-x-2 border-b border-gray-200 py-4">
            <div className="flex flex-col items-center">
                <ShieldCheckIcon className="w-6 h-6 fill-black text-white" />
                <span className="text-sm text-gray-500">verified</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-md text-black-500 font-bold">★ 5</span>
                <span className="text-sm text-gray-500">rating</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-md text-black-500 font-bold">$ 3</span>
                <span className="text-sm text-gray-500">per lesson</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-md text-black-500 font-bold">33</span>
                <span className="text-sm text-gray-500">reviews</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-md text-black-500 font-bold">689</span>
                <span className="text-sm text-gray-500">lessons</span>
            </div>
        </div>
    )
}

export default TutorBadges;