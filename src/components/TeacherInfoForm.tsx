interface TeacherInfoFormProps {
  name: string;
  designation: string;
  qualification: string;
  email: string;
  phone: string;
  teacherID: string;
  dateOfJoining: string;
  bloodGroup: string;
  emergencyContact: string;
  academicYear: string;
  issueDate: string;
  onNameChange: (value: string) => void;
  onDesignationChange: (value: string) => void;
  onQualificationChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onTeacherIDChange: (value: string) => void;
  onDateOfJoiningChange: (value: string) => void;
  onBloodGroupChange: (value: string) => void;
  onEmergencyContactChange: (value: string) => void;
  onAcademicYearChange: (value: string) => void;
  onIssueDateChange: (value: string) => void;
  onGenerateRandom: () => void;
}

export default function TeacherInfoForm({
  name,
  designation,
  qualification,
  email,
  phone,
  teacherID,
  dateOfJoining,
  bloodGroup,
  emergencyContact,
  academicYear,
  issueDate,
  onNameChange,
  onDesignationChange,
  onQualificationChange,
  onEmailChange,
  onPhoneChange,
  onTeacherIDChange,
  onDateOfJoiningChange,
  onBloodGroupChange,
  onEmergencyContactChange,
  onAcademicYearChange,
  onIssueDateChange,
  onGenerateRandom,
}: TeacherInfoFormProps) {
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const currentYear = new Date().getFullYear();
  const academicYears = [
    `${currentYear}-${currentYear + 1}`,
    `${currentYear - 1}-${currentYear}`,
    `${currentYear + 1}-${currentYear + 2}`,
  ];

  return (
    <div className="bg-white/50 backdrop-blur-2xl p-5 rounded-3xl shadow-xl border-2 border-slate-200/60">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-900">Teacher Information</h2>
            <p className="text-xs text-slate-600 font-semibold">Enter faculty member details</p>
          </div>
        </div>
        <button
          onClick={onGenerateRandom}
          className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-sm font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
        >
          Generate Random
        </button>
      </div>

      <div className="space-y-3.5">
        {/* Teacher Name */}
        <div>
          <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
            Teacher Full Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
            placeholder="Dr. James Anderson"
          />
        </div>

        {/* Teacher ID and Blood Group */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
              Employee ID *
            </label>
            <input
              type="text"
              value={teacherID}
              onChange={(e) => onTeacherIDChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
              placeholder="FAC-2024-001"
            />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
              Blood Group
            </label>
            <select
              value={bloodGroup}
              onChange={(e) => onBloodGroupChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
            >
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Designation and Qualification */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
              Title/Position *
            </label>
            <input
              type="text"
              value={designation}
              onChange={(e) => onDesignationChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
              placeholder="Associate Professor"
            />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
              Degree/Credential *
            </label>
            <input
              type="text"
              value={qualification}
              onChange={(e) => onQualificationChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
              placeholder="PhD"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
            Official Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
            placeholder="j.anderson@university.edu"
          />
        </div>

        {/* Phone and Emergency Contact */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
              Contact Number *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => onPhoneChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
              Emergency Contact
            </label>
            <input
              type="tel"
              value={emergencyContact}
              onChange={(e) => onEmergencyContactChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
              placeholder="(555) 987-6543"
            />
          </div>
        </div>

        {/* Date of Joining */}
        <div>
          <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
            Date of Hire *
          </label>
          <input
            type="text"
            value={dateOfJoining}
            onChange={(e) => onDateOfJoiningChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
            placeholder="MM/DD/YYYY"
          />
        </div>

        {/* Academic Year and Issue Date */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
              Academic Year *
            </label>
            <select
              value={academicYear}
              onChange={(e) => onAcademicYearChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
            >
              {academicYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wide">
              Card Issue Date *
            </label>
            <input
              type="text"
              value={issueDate}
              onChange={(e) => onIssueDateChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold text-slate-900 bg-white/80"
              placeholder="MM/DD/YYYY"
            />
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-4 p-3 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <div className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xs text-blue-900 font-semibold">
              The issue date must be within the current academic year or no more than 90 days from today to meet institutional requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

