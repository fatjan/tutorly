import ReviewCard from "./ReviewCard";

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            flag: "🇬🇧",
            postedDate: "2024-01-01",
            avatar: "https://via.placeholder.com/150",
            rating: 5,
            text: "This tutor is amazing! I learned so much in just one session."
        },
        {
            id: 2,
            name: "Jane Doe",
            flag: "🇬🇧",
            postedDate: "2024-01-01",
            avatar: "https://via.placeholder.com/150",
            rating: 4,
            text: "This tutor is great! I learned a lot in the sessions."
        },
        {
            id: 3,
            name: "John Doe",
            flag: "🇬🇧",
            postedDate: "2024-01-01",
            avatar: "https://via.placeholder.com/150",
            rating: 5,
            text: "This tutor is amazing! I learned so much in just one session."
        },
        {
            id: 4,
            name: "John Doe",
            flag: "🇬🇧",
            postedDate: "2024-01-01",
            avatar: "https://via.placeholder.com/150",
            rating: 5,
            text: "This tutor is amazing! I learned so much in just one session."
        },
        {
            id: 5,
            name: "John Doe",
            flag: "🇬🇧",
            postedDate: "2024-01-01",
            avatar: "https://via.placeholder.com/150",
            rating: 5,
            text: "This tutor is amazing! I learned so much in just one session."
        },
    ]
    return (
        <div className="flex flex-col justify-between py-2">
            <h1 className="text-lg font-bold mb-4">★ 3 - 44 reviews</h1>
            <div className="flex flex-row gap-4 overflow-x-auto max-w-full">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
            <button 
                    className="text-md text-gray-500 border-2 border-gray-200 rounded-md px-2 py-1 font-bold mt-4"
                >
                Show all 44 reviews
            </button>
        </div>
    )
}

export default Reviews;