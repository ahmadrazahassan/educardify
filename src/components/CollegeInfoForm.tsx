interface CollegeInfoFormProps {
  collegeName: string;
  collegeDepartment: string;
  collegeLocation: string;
  pakistaniUniversities: string[];
  selectedUniversity: string;
  onCollegeNameChange: (name: string) => void;
  onCollegeDepartmentChange: (department: string) => void;
  onCollegeLocationChange: (location: string) => void;
  onUniversitySelect: (university: string) => void;
  onRandomUniversity: () => void;
}

export default function CollegeInfoForm({
  collegeName,
  collegeDepartment,
  collegeLocation,
  pakistaniUniversities,
  selectedUniversity,
  onCollegeNameChange,
  onCollegeDepartmentChange,
  onCollegeLocationChange,
  onUniversitySelect,
  onRandomUniversity,
}: CollegeInfoFormProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-900 tracking-tight">College Information</h3>
        <p className="text-xs text-slate-400 mt-1">Institution details</p>
      </div>

      <div className="space-y-4">
        {/* Pakistani Universities Selection */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider">
              Universities
            </label>
            <button
              onClick={onRandomUniversity}
              className="px-3 py-1.5 bg-purple-600 text-white text-xs font-medium rounded-xl hover:bg-purple-700 hover:shadow-sm transition-all duration-200"
            >
              Random
            </button>
          </div>
          <select
            value={selectedUniversity}
            onChange={(e) => onUniversitySelect(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          >
            <option value="">Select a university...</option>
            {pakistaniUniversities.map((university, index) => (
              <option key={index} value={university}>
                {university}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
            College Name
          </label>
          <input
            type="text"
            value={collegeName}
            onChange={(e) => onCollegeNameChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
            Department
          </label>
          <input
            type="text"
            value={collegeDepartment}
            onChange={(e) => onCollegeDepartmentChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
            Location
          </label>
          <input
            type="text"
            value={collegeLocation}
            onChange={(e) => onCollegeLocationChange(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}

