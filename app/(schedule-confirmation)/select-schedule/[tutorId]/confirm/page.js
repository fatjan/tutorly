const ConfirmSchedule = () => {
    const tutorName = 'John Doe';
    const tutorDuration = '25 minutes';
    const tutorDate = '2025-01-01';
    const tutorTime = '10:00';
    return (
        <div className="min-h-screen bg-pink-500 px-4 pt-2">
            <h1>We'll tell {tutorName} you're ready to start!</h1>
            <p>Your first lesson is {tutorDate} at {tutorTime} for a {tutorDuration} lesson.</p>
        </div>
    );
}

export default ConfirmSchedule;