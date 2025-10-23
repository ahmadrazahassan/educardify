import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ClassSchedule from "./components/ClassSchedule";
import Header from "./components/Header";

export default function ClassScheduleGenerator({ hideHero = false }: { hideHero?: boolean }) {
  const scheduleRef = useRef<HTMLDivElement>(null);

  // Pakistani Data
  const pakistaniBoyNames = [
    "Ahmed Ali", "Muhammad Hassan", "Ali Raza", "Usman Ahmed", "Hamza Khan",
    "Abdullah Shah", "Bilal Ahmed", "Zain ul Abideen", "Faisal Mahmood", "Imran Ali",
    "Arslan Ahmed", "Kamran Hussain", "Saad Khan", "Tariq Mehmood", "Shahid Iqbal",
    "Nadeem Abbas", "Rashid Ali", "Junaid Ahmed", "Asif Malik", "Zahid Hassan",
    "Omer Farooq", "Ibrahim Siddiqui", "Adnan Sheikh", "Fahad Aziz", "Salman Haider",
    "Waqas Ahmed", "Rizwan Ali", "Talha Hussain", "Haris Khan", "Yasir Mahmood"
  ];

  const pakistaniGirlNames = [
    "Ayesha Khan", "Fatima Ahmed", "Zainab Hassan", "Maryam Ali", "Aisha Malik",
    "Sana Fatima", "Hira Sheikh", "Aliza Ahmed", "Nida Khan", "Amna Hassan",
    "Khadija Siddiqui", "Rabia Aziz", "Mahnoor Ali", "Samreen Ahmed", "Nimra Hussain",
    "Anum Fatima", "Sidra Khan", "Farah Ahmed", "Bushra Ali", "Laiba Hassan",
    "Rida Malik", "Iqra Sheikh", "Hafsa Ahmed", "Zunaira Khan", "Sara Aziz",
    "Mehwish Ali", "Noor Fatima", "Sadia Hassan", "Arooj Khan", "Javeria Ahmed"
  ];

  const pakistaniUniversities = [
    "University of Karachi", "Lahore University of Management Sciences (LUMS)",
    "National University of Sciences and Technology (NUST)", "University of Punjab",
    "COMSATS University Islamabad", "Quaid-i-Azam University",
    "Institute of Business Administration (IBA), Karachi", "FAST National University",
    "University of Engineering and Technology, Lahore", "University of Central Punjab",
    "International Islamic University Islamabad", "University of Peshawar"
  ];

  const programs = [
    "BS Computer Science", "BS Software Engineering", "BS Information Technology",
    "BS Business Administration", "BS Accounting & Finance", "BS Economics",
    "BS Psychology", "BS English", "BS Mathematics", "BS Physics"
  ];

  const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

  // Course data by program
  const coursesByProgram: { [key: string]: string[] } = {
    "BS Computer Science": [
      "Data Structures", "Algorithms", "Database Systems", "Operating Systems",
      "Computer Networks", "Software Engineering", "Web Development", "Artificial Intelligence",
      "Machine Learning", "Computer Graphics", "Compiler Construction", "Digital Logic Design",
      "Computer Architecture", "Theory of Automata", "Discrete Mathematics", "Object Oriented Programming"
    ],
    "BS Software Engineering": [
      "Software Design", "Requirements Engineering", "Software Testing", "Agile Development",
      "DevOps", "Mobile App Development", "Cloud Computing", "Software Architecture",
      "Project Management", "Quality Assurance", "UI/UX Design", "Software Metrics",
      "Software Configuration Management", "Software Maintenance", "Formal Methods", "Software Process"
    ],
    "BS Information Technology": [
      "IT Infrastructure", "Network Security", "System Administration", "IT Project Management",
      "Database Management", "Web Technologies", "Cyber Security", "IT Service Management",
      "Business Intelligence", "Data Analytics", "IT Governance", "Enterprise Systems",
      "Network Administration", "Server Management", "IT Audit", "Information Security"
    ],
    "BS Business Administration": [
      "Principles of Management", "Marketing Management", "Financial Accounting", "Business Statistics",
      "Human Resource Management", "Strategic Management", "Operations Management", "Business Law",
      "Entrepreneurship", "International Business", "Business Ethics", "Supply Chain Management",
      "Organizational Behavior", "Business Communication", "Financial Management", "Consumer Behavior"
    ],
    "BS Accounting & Finance": [
      "Financial Accounting", "Cost Accounting", "Management Accounting", "Auditing",
      "Corporate Finance", "Investment Analysis", "Financial Markets", "Taxation",
      "Financial Reporting", "Banking & Finance", "Risk Management", "Portfolio Management"
    ],
    "BS Economics": [
      "Microeconomics", "Macroeconomics", "Econometrics", "Development Economics",
      "International Economics", "Public Finance", "Monetary Economics", "Labor Economics",
      "Environmental Economics", "Game Theory", "Economic History", "Mathematical Economics"
    ]
  };

  const rooms = ["Room 101", "Room 102", "Room 103", "Room 201", "Room 202", "Room 203", "Room 301", "Room 302", "Lab A", "Lab B", "Lab C", "Lab D", "Auditorium", "Seminar Hall", "Conference Room"];
  const instructors = [
    "Dr. Ahmed Khan", "Prof. Sarah Ali", "Dr. Muhammad Raza", "Ms. Fatima Hassan",
    "Dr. Usman Shah", "Prof. Ayesha Malik", "Dr. Ali Ahmed", "Ms. Zainab Khan",
    "Dr. Hassan Ali", "Prof. Maryam Sheikh", "Dr. Bilal Ahmed", "Ms. Hira Fatima",
    "Dr. Kamran Hussain", "Prof. Nida Siddiqui", "Dr. Tariq Mahmood", "Ms. Amna Hassan",
    "Dr. Shahid Iqbal", "Prof. Rabia Aziz", "Dr. Nadeem Abbas", "Ms. Mahnoor Ali"
  ];

  // Student State
  const [studentName, setStudentName] = useState("Ahmed Ali");
  const [studentID, setStudentID] = useState("CS-2025-001");
  const [studentDOB, setStudentDOB] = useState("15 Jan 2002");
  const [program, setProgram] = useState("BS Computer Science");
  const [semester, setSemester] = useState("3rd");
  const [section, setSection] = useState("A");

  // University State
  const [universityName, setUniversityName] = useState("University of Karachi");
  const [universityLogo, setUniversityLogo] = useState("");
  const [academicYear, setAcademicYear] = useState("2025-2026");
  const [sessionType, setSessionType] = useState("Fall 2025");

  // Schedule State - Default schedule
  const [schedule, setSchedule] = useState([
    { day: "Monday", time: "08:00 - 09:30", course: "Data Structures", instructor: "Dr. Ahmed Khan", room: "Room 101", credits: "3" },
    { day: "Monday", time: "10:00 - 11:30", course: "Database Systems", instructor: "Prof. Sarah Ali", room: "Lab A", credits: "3" },
    { day: "Monday", time: "12:00 - 01:30", course: "Operating Systems", instructor: "Dr. Muhammad Raza", room: "Room 201", credits: "3" },
    { day: "Tuesday", time: "08:00 - 09:30", course: "Computer Networks", instructor: "Ms. Fatima Hassan", room: "Room 102", credits: "3" },
    { day: "Tuesday", time: "10:00 - 11:30", course: "Software Engineering", instructor: "Dr. Usman Shah", room: "Room 202", credits: "3" },
    { day: "Tuesday", time: "02:00 - 03:30", course: "Artificial Intelligence", instructor: "Dr. Ali Ahmed", room: "Room 301", credits: "3" },
    { day: "Wednesday", time: "08:00 - 09:30", course: "Data Structures", instructor: "Dr. Ahmed Khan", room: "Room 101", credits: "3" },
    { day: "Wednesday", time: "10:00 - 11:30", course: "Web Development", instructor: "Prof. Ayesha Malik", room: "Lab B", credits: "3" },
    { day: "Thursday", time: "08:00 - 09:30", course: "Database Systems", instructor: "Prof. Sarah Ali", room: "Lab A", credits: "3" },
    { day: "Thursday", time: "10:00 - 11:30", course: "Operating Systems", instructor: "Dr. Muhammad Raza", room: "Room 201", credits: "3" },
    { day: "Thursday", time: "12:00 - 01:30", course: "Machine Learning", instructor: "Dr. Hassan Ali", room: "Lab C", credits: "4" },
    { day: "Friday", time: "08:00 - 09:30", course: "Computer Networks", instructor: "Ms. Fatima Hassan", room: "Room 102", credits: "3" },
    { day: "Friday", time: "10:00 - 11:30", course: "Software Engineering", instructor: "Dr. Usman Shah", room: "Room 202", credits: "3" },
  ]);

  // Logo Upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUniversityLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Generate Random Schedule
  const generateRandomSchedule = () => {
    const randomGender = Math.random() > 0.5;
    const randomName = randomGender
      ? pakistaniBoyNames[Math.floor(Math.random() * pakistaniBoyNames.length)]
      : pakistaniGirlNames[Math.floor(Math.random() * pakistaniGirlNames.length)];

    const nameParts = randomName.split(" ");
    const firstInitial = nameParts[0][0].toUpperCase();
    const lastInitial = nameParts[nameParts.length - 1][0].toUpperCase();
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    const newStudentID = `${firstInitial}${lastInitial}${randomDigits}`;

    const randomProgram = programs[Math.floor(Math.random() * programs.length)];
    const randomSemester = semesters[Math.floor(Math.random() * semesters.length)];
    const randomSection = ["A", "B", "C", "D"][Math.floor(Math.random() * 4)];
    const randomUniversity = pakistaniUniversities[Math.floor(Math.random() * pakistaniUniversities.length)];

    // Generate random DOB (18-25 years old)
    const birthYear = Math.floor(1999 + Math.random() * 8); // 1999-2006
    const birthMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][Math.floor(Math.random() * 12)];
    const birthDay = Math.floor(1 + Math.random() * 28);
    const randomDOB = `${birthDay.toString().padStart(2, '0')} ${birthMonth} ${birthYear}`;

    setStudentName(randomName);
    setStudentID(newStudentID);
    setStudentDOB(randomDOB);
    setProgram(randomProgram);
    setSemester(randomSemester);
    setSection(randomSection);
    setUniversityName(randomUniversity);

    // Generate random schedule based on program
    const availableCourses = coursesByProgram[randomProgram] || coursesByProgram["BS Computer Science"];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const times = ["08:00 - 09:30", "10:00 - 11:30", "12:00 - 01:30", "02:00 - 03:30"];
    
    const newSchedule = [];
    const usedSlots = new Set();
    const coursesPerWeek = Math.floor(5 + Math.random() * 6); // 5-10 classes per week

    for (let i = 0; i < coursesPerWeek; i++) {
      let day, time, slot;
      do {
        day = days[Math.floor(Math.random() * days.length)];
        time = times[Math.floor(Math.random() * times.length)];
        slot = `${day}-${time}`;
      } while (usedSlots.has(slot));

      usedSlots.add(slot);

      const course = availableCourses[Math.floor(Math.random() * availableCourses.length)];
      const instructor = instructors[Math.floor(Math.random() * instructors.length)];
      const room = rooms[Math.floor(Math.random() * rooms.length)];
      const credits = ["3", "3", "3", "4", "2"][Math.floor(Math.random() * 5)];

      newSchedule.push({ day, time, course, instructor, room, credits });
    }

    // Sort by day and time
    const dayOrder = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5 };
    newSchedule.sort((a, b) => {
      if (dayOrder[a.day as keyof typeof dayOrder] !== dayOrder[b.day as keyof typeof dayOrder]) {
        return dayOrder[a.day as keyof typeof dayOrder] - dayOrder[b.day as keyof typeof dayOrder];
      }
      return a.time.localeCompare(b.time);
    });

    setSchedule(newSchedule);
  };

  // Download as PNG
  const handleDownload = async () => {
    if (!scheduleRef.current) return;
    try {
      const canvas = await html2canvas(scheduleRef.current, {
        scale: 3,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.download = `class-schedule-${studentID}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  // Download as PDF
  const handleDownloadPDF = async () => {
    if (!scheduleRef.current) return;
    try {
      const canvas = await html2canvas(scheduleRef.current, {
        scale: 3,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`class-schedule-${studentID}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <>
      {!hideHero && <Header />}

      <div className={hideHero ? "" : "pt-20 pb-12 px-4 md:px-8"}>
        <div className={hideHero ? "" : "max-w-7xl mx-auto"}>
          {!hideHero && (
            <div className="text-center mb-12 py-8">
              <div className="inline-block mb-4">
                <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
                  Free Tool
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                Class Schedule Generator
              </h1>
              <p className="text-slate-500 text-base max-w-xl mx-auto">
                Create professional class schedules instantly
              </p>

              <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                  <div className="w-1 h-1 rounded-full bg-green-500"></div>
                  <span className="text-xs text-slate-600">Customizable</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-slate-600">Print Ready</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                  <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                  <span className="text-xs text-slate-600">Professional</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {/* Forms Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Student Information */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Student Information</h3>
                    <p className="text-xs text-slate-400 mt-1">Student details</p>
                  </div>
                  <button
                    onClick={generateRandomSchedule}
                    className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 hover:shadow-sm transition-all duration-200 font-medium text-xs"
                  >
                    Generate
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Student Name</label>
                    <input
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Student ID</label>
                    <input
                      type="text"
                      value={studentID}
                      onChange={(e) => setStudentID(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Date of Birth</label>
                    <input
                      type="text"
                      value={studentDOB}
                      onChange={(e) => setStudentDOB(e.target.value)}
                      placeholder="DD MMM YYYY"
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Program</label>
                    <input
                      type="text"
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Semester</label>
                      <input
                        type="text"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Section</label>
                      <input
                        type="text"
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* University Information */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 tracking-tight">University Information</h3>
                    <p className="text-xs text-slate-400 mt-1">University details</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">University Name</label>
                    <input
                      type="text"
                      value={universityName}
                      onChange={(e) => setUniversityName(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">University Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="w-full text-sm text-slate-600 file:mr-3 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer file:shadow-sm transition-all cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Academic Year</label>
                    <input
                      type="text"
                      value={academicYear}
                      onChange={(e) => setAcademicYear(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Session</label>
                    <input
                      type="text"
                      value={sessionType}
                      onChange={(e) => setSessionType(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Panel */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleDownload}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-200 font-medium text-sm flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PNG
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 hover:shadow-lg transition-all duration-200 font-medium text-sm flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Download PDF
                </button>
              </div>
            </div>

            {/* Schedule Preview */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Schedule Preview</h3>
                <p className="text-xs text-slate-400 mt-1">Live preview of your class schedule</p>
              </div>

              <div className="flex justify-center">
                <div ref={scheduleRef}>
                  <ClassSchedule
                    studentName={studentName}
                    studentID={studentID}
                    studentDOB={studentDOB}
                    program={program}
                    semester={semester}
                    section={section}
                    universityName={universityName}
                    universityLogo={universityLogo}
                    academicYear={academicYear}
                    sessionType={sessionType}
                    schedule={schedule}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
