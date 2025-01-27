const TutorSpeak = () => {
    return (
        <div className="flex flex-col justify-between border-b border-gray-200 py-5 space-y-2">
            <h1 className="text-lg font-bold mb-4">I speak</h1>
            <p className="text-md text-black-500">
                <span className="mr-2">
                    English
                </span>
                <button className="bg-blue-200 border border-gray-200 rounded-md px-2 py-1 font-bold">
                    Native
                </button>
            </p>
            <p className="text-md text-black-500">
                <span className="mr-2">
                    French
                </span>
                <button className="bg-green-200 border border-gray-200 rounded-md px-2 py-1 font-bold">
                    Native
                </button>
            </p>
            <p className="text-md text-black-500">
                <span className="mr-2">
                    Spanish
                </span>
                <button className="bg-red-500 border border-gray-200 rounded-md px-2 py-1 font-bold">
                    Native
                </button>
            </p>
        </div>
    )
}

export default TutorSpeak;