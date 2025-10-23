interface StudentInfoFormProps {
  name: string;
  className: string;
  dob: string;
  phone: string;
  address: string;
  studentID: string;
  studentEmail: string;
  gender: string;
  academicYear: string;
  issueDate: string;
  onNameChange: (name: string) => void;
  onClassNameChange: (className: string) => void;
  onDobChange: (dob: string) => void;
  onPhoneChange: (phone: string) => void;
  onAddressChange: (address: string) => void;
  onStudentIDChange: (studentID: string) => void;
  onStudentEmailChange: (studentEmail: string) => void;
  onGenderChange: (gender: string) => void;
  onAcademicYearChange: (academicYear: string) => void;
  onIssueDateChange: (issueDate: string) => void;
  onGenerateRandom: () => void;
}

export default function StudentInfoForm({
  name,
  className,
  dob,
  phone,
  address,
  studentID,
  studentEmail,
  gender,
  academicYear,
  issueDate,
  onNameChange,
  onClassNameChange,
  onDobChange,
  onPhoneChange,
  onAddressChange,
  onStudentIDChange,
  onStudentEmailChange,
  onGenderChange,
  onAcademicYearChange,
  onIssueDateChange,
  onGenerateRandom,
}: StudentInfoFormProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Student Information</h3>
          <p className="text-xs text-slate-400 mt-1">Personal details</p>
        </div>
        <button
          onClick={onGenerateRandom}
          className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 hover:shadow-sm transition-all duration-200 font-medium text-xs"
        >
          Generate
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Class/Program</label>
          <input
            type="text"
            value={className}
            onChange={(e) => onClassNameChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Date of Birth</label>
          <input
            type="text"
            value={dob}
            onChange={(e) => onDobChange(e.target.value)}
            placeholder="15 Jan 2000"
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => onAddressChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Student ID</label>
          <input
            type="text"
            value={studentID}
            onChange={(e) => onStudentIDChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Email</label>
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => onStudentEmailChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Gender</label>
          <select
            value={gender}
            onChange={(e) => onGenderChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm cursor-pointer"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Academic Year</label>
          <input
            type="text"
            value={academicYear}
            onChange={(e) => onAcademicYearChange(e.target.value)}
            placeholder="2024-2025"
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Issue Date</label>
          <input
            type="text"
            value={issueDate}
            onChange={(e) => onIssueDateChange(e.target.value)}
            placeholder="DD/MM/YYYY"
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}

