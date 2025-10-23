interface ClassScheduleProps {
  studentName: string;
  studentID: string;
  studentDOB: string;
  program: string;
  semester: string;
  section: string;
  universityName: string;
  universityLogo: string;
  academicYear: string;
  sessionType: string;
  schedule: Array<{
    day: string;
    time: string;
    course: string;
    instructor: string;
    room: string;
    credits: string;
  }>;
}

export default function ClassSchedule({
  studentName,
  studentID,
  studentDOB,
  program,
  semester,
  section,
  universityName,
  universityLogo,
  academicYear,
  sessionType,
  schedule,
}: ClassScheduleProps) {
  // Calculate total credits
  const totalCredits = (() => {
    const uniqueCourses = new Set<string>();
    return schedule
      .filter(item => {
        if (uniqueCourses.has(item.course)) return false;
        uniqueCourses.add(item.course);
        return true;
      })
      .reduce((sum, item) => sum + parseInt(item.credits || "0"), 0);
  })();

  // Calculate unique courses
  const uniqueCourses = new Set(schedule.map(item => item.course)).size;

  // Calculate total contact hours
  const totalContactHours = schedule.length * 1.5; // Each slot is 1.5 hours

  // Group schedule by day
  const scheduleByDay: { [key: string]: typeof schedule } = {};
  schedule.forEach(item => {
    if (!scheduleByDay[item.day]) {
      scheduleByDay[item.day] = [];
    }
    scheduleByDay[item.day].push(item);
  });

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="w-[1100px] bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden relative">
      {/* Watermark Logo */}
      {universityLogo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src={universityLogo}
            alt="Watermark"
            className="w-96 h-96 object-contain opacity-5"
          />
        </div>
      )}

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {universityLogo && (
                <img
                  src={universityLogo}
                  alt="University Logo"
                  className="w-16 h-16 object-contain bg-white rounded-xl p-2"
                />
              )}
              <div>
                <h1 className="text-xl font-bold">{universityName || "University Name"}</h1>
                <p className="text-purple-100 text-xs mt-1">Academic Schedule</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-xl">
                <p className="text-xs font-semibold text-purple-100">ACADEMIC YEAR</p>
                <p className="text-base font-bold">{academicYear || "2025-2026"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="bg-slate-50 border-b-2 border-slate-200 py-2">
          <h2 className="text-center text-lg font-bold text-slate-800 uppercase tracking-wide">
            Class Schedule
          </h2>
          <p className="text-center text-xs text-slate-500 mt-0.5">{sessionType || "Fall 2025"}</p>
        </div>

        {/* Student Info */}
        <div className="p-4 grid grid-cols-5 gap-3 border-b border-slate-200 bg-slate-50">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Student Name</p>
            <p className="text-sm font-bold text-slate-900">{studentName || "Student Name"}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Student ID</p>
            <p className="text-sm font-bold text-slate-900">{studentID || "000000"}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Date of Birth</p>
            <p className="text-sm font-bold text-slate-900">{studentDOB || "DD MMM YYYY"}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Program</p>
            <p className="text-sm font-bold text-slate-900">{program || "Program Name"}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Semester / Section</p>
            <p className="text-sm font-bold text-slate-900">{semester || "1st"} - {section || "A"}</p>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="border border-slate-300 px-3 py-2 text-left text-xs font-bold uppercase">Day</th>
                <th className="border border-slate-300 px-3 py-2 text-left text-xs font-bold uppercase">Time</th>
                <th className="border border-slate-300 px-3 py-2 text-left text-xs font-bold uppercase">Course</th>
                <th className="border border-slate-300 px-3 py-2 text-left text-xs font-bold uppercase">Instructor</th>
                <th className="border border-slate-300 px-3 py-2 text-left text-xs font-bold uppercase">Room</th>
                <th className="border border-slate-300 px-3 py-2 text-center text-xs font-bold uppercase">Credits</th>
              </tr>
            </thead>
            <tbody>
              {days.map((day, dayIndex) => {
                const daySchedule = scheduleByDay[day] || [];
                if (daySchedule.length === 0) {
                  return (
                    <tr key={day} className={dayIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700">{day}</td>
                      <td colSpan={5} className="border border-slate-300 px-3 py-2 text-sm text-slate-400 italic text-center">
                        No classes scheduled
                      </td>
                    </tr>
                  );
                }

                return daySchedule.map((item, index) => (
                  <tr key={`${day}-${index}`} className={dayIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    {index === 0 && (
                      <td
                        rowSpan={daySchedule.length}
                        className="border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 align-top"
                      >
                        {day}
                      </td>
                    )}
                    <td className="border border-slate-300 px-3 py-2 text-xs text-slate-700">{item.time}</td>
                    <td className="border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-900">{item.course}</td>
                    <td className="border border-slate-300 px-3 py-2 text-xs text-slate-700">{item.instructor}</td>
                    <td className="border border-slate-300 px-3 py-2 text-xs text-slate-700">{item.room}</td>
                    <td className="border border-slate-300 px-3 py-2 text-xs text-center font-semibold text-purple-600">{item.credits}</td>
                  </tr>
                ));
              })}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="px-4 pb-4 grid grid-cols-4 gap-3">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
            <p className="text-xs font-semibold text-purple-700 uppercase mb-1">Total Credit Hours</p>
            <p className="text-2xl font-bold text-purple-900">{totalCredits}</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="text-xs font-semibold text-blue-700 uppercase mb-1">Total Classes/Week</p>
            <p className="text-2xl font-bold text-blue-900">{schedule.length}</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-3">
            <p className="text-xs font-semibold text-green-700 uppercase mb-1">Unique Courses</p>
            <p className="text-2xl font-bold text-green-900">{uniqueCourses}</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
            <p className="text-xs font-semibold text-orange-700 uppercase mb-1">Contact Hours/Week</p>
            <p className="text-2xl font-bold text-orange-900">{totalContactHours}</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="px-4 pb-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <p className="text-xs font-semibold text-slate-700 uppercase mb-2">Class Timings</p>
              <div className="space-y-1 text-xs text-slate-600">
                <p>• Morning Session: 08:00 AM - 12:00 PM</p>
                <p>• Afternoon Session: 12:00 PM - 04:00 PM</p>
                <p>• Each Class Duration: 1 hour 30 minutes</p>
                <p>• Break Between Classes: 30 minutes</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <p className="text-xs font-semibold text-slate-700 uppercase mb-2">Attendance Policy</p>
              <div className="space-y-1 text-xs text-slate-600">
                <p>• Minimum Required: 75% attendance</p>
                <p>• Late Arrival: After 15 minutes = Absent</p>
                <p>• Medical Leave: Requires documentation</p>
                <p>• Attendance Tracking: Biometric/Manual</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="px-4 pb-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-xs font-semibold text-yellow-800 uppercase mb-1">Important Notes:</p>
            <ul className="text-xs text-yellow-700 space-y-0.5">
              <li>• Students must attend all scheduled classes as per university policy.</li>
              <li>• Any changes to the schedule will be notified through official channels.</li>
              <li>• Minimum 75% attendance is mandatory for appearing in final examinations.</li>
              <li>• Please arrive 10 minutes before class starts to avoid being marked late.</li>
              <li>• Mobile phones must be on silent mode during class hours.</li>
              <li>• For any queries, please contact the academic office or your class coordinator.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Generated on: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
            </p>
            <p className="text-xs text-slate-500">
              This is a computer-generated schedule
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
