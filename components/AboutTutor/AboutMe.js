import TutorSpeak from "@/components/AboutTutor/TutorSpeak";
import SeeMySchedule from "@/components/AboutTutor/SeeMySchedule";

const AboutMe = () => {
    return (
        <>
            <div className="flex flex-col justify-between border-b border-gray-200 py-4">
                <h1 className="text-lg font-bold mb-4">About Me</h1>
                <p className="text-md text-gray-500 font-bold">Certified native French tutor with 10 years of experience making learning fun and easy.</p>
                <p className="text-md text-gray-500">
                    Hi, I'm Nathan. I'm a certified native French tutor with 10 years of experience making learning fun and easy.
                    I'm a certified native French tutor with 10 years of experience making learning fun and easy.
                    I'm a certified native French tutor with 10 years of experience making learning fun and easy.
                    I'm a certified native French tutor with 10 years of experience making learning fun and easy.
                    I'm a certified native French tutor with 10 years of experience making learning fun and easy.
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