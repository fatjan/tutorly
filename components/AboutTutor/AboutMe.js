import TutorSpeak from "@/components/AboutTutor/TutorSpeak";
import SeeMySchedule from "@/components/AboutTutor/SeeMySchedule";

const AboutMe = ({ tutor }) => {
    return (
        <>
            <div className="flex flex-col justify-between border-b border-gray-200 py-4">
                <h1 className="text-lg font-bold mb-4">About Me</h1>
                <p className="text-md text-gray-500 font-bold">{tutor.description}</p>
                <p className="text-md text-gray-500">
                    {tutor.description}
                </p>
                <button 
                    className="text-md text-gray-500 border-2 border-gray-200 rounded-md px-2 py-1 font-bold my-4"
                >
                    Read more
                </button>
            </div>
            <TutorSpeak />
            <SeeMySchedule />
        </>
    )
}

export default AboutMe;