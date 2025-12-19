/**
 * TEACHER OFFICIAL LETTER GENERATOR - SheerID Verified
 * 
 * ✅ SHEERID REQUIREMENTS MET:
 * 1. ✓ Full Name - Teacher's name in letter body and throughout
 * 2. ✓ Institution Name/Logo - LARGE logo (144px) and prominent institution name (text-4xl)
 * 3. ✓ Official Letterhead - Full institutional header with contact details
 * 4. ✓ Valid Date - Letter date defaults to TODAY (within 90 days requirement ✓)
 * 5. ✓ Professional Format - USA institutional letter standard
 * 6. ✓ Teacher Role/Title - Position clearly stated (Professor, Associate Professor, etc.)
 * 7. ✓ Signature - Professional signature section with signatory name/title
 * 8. ✓ Reference Number - Unique document reference for authenticity
 * 
 * LETTER TYPES AVAILABLE:
 * - Employment Offer Letter (with salary, start date, position)
 * - Employment Verification Letter (confirms current employment)
 * - Appointment Letter (faculty appointment confirmation)
 * - Reference/Recommendation Letter (academic reference)
 * 
 * DATE VALIDATION:
 * - Letter Date: Automatically set to current date (within 90 days requirement ✓)
 * - Start Date: Can be set to any appropriate date
 * 
 * QUALITY REQUIREMENTS:
 * - Official letterhead with large logo (144px height)
 * - Institution name in 4xl font (36px) - EXTRA PROMINENT
 * - Multiple security features (watermarks, verification codes, official seals)
 * - Professional formatting with proper margins
 * - Clear, readable text throughout
 */

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TeacherOfficialLetter from "./components/TeacherOfficialLetter";

export default function TeacherOfficialLetterGenerator({ hideHero = false }: { hideHero?: boolean }) {
  // USA Teacher Names Data
  const usaMaleTeacherNames = [
    "Dr. James Anderson", "Prof. Michael Johnson", "Dr. Robert Williams", "Dr. David Brown",
    "Dr. John Davis", "Prof. William Miller", "Dr. Richard Wilson", "Dr. Thomas Moore",
  ];

  const usaFemaleTeacherNames = [
    "Dr. Jennifer Smith", "Prof. Emily Johnson", "Dr. Sarah Williams", "Dr. Jessica Brown",
    "Dr. Lisa Jones", "Prof. Karen Garcia", "Dr. Nancy Miller", "Dr. Ashley Hernandez",
  ];

  const usaSchools = [
    "Harvard University", "Stanford University", "Massachusetts Institute of Technology",
    "Yale University", "Princeton University", "Columbia University",
    "University of Chicago", "University of Pennsylvania", "Duke University",
  ];

  const departments = [
    "Department of Computer Science", "Department of Mathematics", "Department of Physics",
    "Department of Chemistry", "Department of English", "Department of History",
    "Department of Biology", "Department of Business Administration", "Department of Education",
  ];

  const titles = [
    "Professor", "Associate Professor", "Assistant Professor", "Senior Lecturer",
    "Lecturer", "Adjunct Professor", "Clinical Professor", "Research Professor",
  ];

  const signatoryTitles = [
    "President", "Provost", "Dean of Faculty", "Department Chair",
    "Vice President for Academic Affairs", "Director of Human Resources",
  ];

  // Form state
  const [letterType, setLetterType] = useState<'employment' | 'verification' | 'appointment' | 'reference'>('employment');
  const [institutionName, setInstitutionName] = useState("Harvard University");
  const [institutionAddress, setInstitutionAddress] = useState("Massachusetts Hall");
  const [institutionCity, setInstitutionCity] = useState("Cambridge, MA 02138");
  const [institutionPhone, setInstitutionPhone] = useState("(617) 495-1000");
  const [institutionEmail, setInstitutionEmail] = useState("info@harvard.edu");
  const [institutionWebsite, setInstitutionWebsite] = useState("www.harvard.edu");
  
  const [teacherName, setTeacherName] = useState("Dr. James Anderson");
  const [teacherTitle, setTeacherTitle] = useState("Associate Professor");
  const [teacherDepartment, setTeacherDepartment] = useState("Department of Computer Science");
  // Start date within current academic year for SheerID compliance
  const [teacherStartDate, setTeacherStartDate] = useState("August 15, 2025");
  const [teacherSalary, setTeacherSalary] = useState("85,000");
  
  const [recipientName] = useState("");
  const [recipientTitle] = useState("");
  const [recipientOrganization] = useState("");
  
  const [signatoryName, setSignatoryName] = useState("Dr. Lawrence Bacow");
  const [signatoryTitle, setSignatoryTitle] = useState("President");
  // Letter date defaults to TODAY for SheerID compliance (within 90 days requirement)
  const [letterDate, setLetterDate] = useState(new Date().toISOString().split('T')[0]);
  const [referenceNumber, setReferenceNumber] = useState("HR-2025-" + Math.floor(1000 + Math.random() * 9000));
  
  // Image state
  const [logoSrc, setLogoSrc] = useState("");
  const [signatureSrc, setSignatureSrc] = useState("");
  
  // Design state
  const [accentColor] = useState("#1e40af");

  const letterRef = useRef<HTMLDivElement>(null);

  // Random generation function
  const generateRandomLetter = () => {
    const isMale = Math.random() > 0.5;
    const randomName = isMale
      ? usaMaleTeacherNames[Math.floor(Math.random() * usaMaleTeacherNames.length)]
      : usaFemaleTeacherNames[Math.floor(Math.random() * usaFemaleTeacherNames.length)];
    setTeacherName(randomName);

    const randomSchool = usaSchools[Math.floor(Math.random() * usaSchools.length)];
    setInstitutionName(randomSchool);

    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    setTeacherDepartment(randomDepartment);

    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    setTeacherTitle(randomTitle);

    const randomSignatoryTitle = signatoryTitles[Math.floor(Math.random() * signatoryTitles.length)];
    setSignatoryTitle(randomSignatoryTitle);

    const randomSalary = Math.floor(70000 + Math.random() * 80000);
    setTeacherSalary(randomSalary.toLocaleString());

    // Use current year for reference number
    const currentYear = new Date().getFullYear();
    setReferenceNumber(`HR-${currentYear}-` + Math.floor(1000 + Math.random() * 9000));
  };

  // Handle file uploads
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setLogoSrc(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignatureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setSignatureSrc(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Download as PNG
  const handleDownload = async () => {
    if (!letterRef.current) return;
    try {
      const canvas = await html2canvas(letterRef.current, {
        scale: 3,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        width: letterRef.current.offsetWidth,
        height: letterRef.current.offsetHeight,
      });
      const link = document.createElement("a");
      link.download = `official-letter-${letterType}-${teacherName.replace(/\s+/g, "-").toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Error generating image. Please try again.");
    }
  };

  // Print
  const handlePrint = () => {
    window.print();
  };

  // PDF Export
  const handlePDFExport = async () => {
    if (!letterRef.current) return;

    try {
      const element = letterRef.current;
      await new Promise(resolve => setTimeout(resolve, 1000));

      const { jsPDF } = await import('jspdf');

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'letter',
      });

      pdf.addImage(imgData, 'PNG', 0, 0, 8.5, 11, undefined, 'FAST');
      pdf.save(`official-letter-${letterType}-${teacherName.replace(/\s+/g, "-").toLowerCase()}.pdf`);

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <>
      {!hideHero && <Header />}

      <div className={hideHero ? "" : "pt-20 pb-12 px-4 md:px-8"}>
        <div className={hideHero ? "" : "max-w-7xl mx-auto"}>
          {/* Hero Section */}
          {!hideHero && (
            <div className="text-center mb-12 py-8">
              <div className="inline-block mb-4">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-full">
                  Professional Tool
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                Official Teacher Letter Generator
              </h1>
              <p className="text-slate-500 text-base max-w-xl mx-auto">
                Create professional official letters instantly
              </p>
            </div>
          )}

          {/* Controls */}
          <div className="flex flex-col gap-6">
            {/* Actions Panel */}
            <div className="bg-white/50 backdrop-blur-2xl p-6 rounded-3xl shadow-xl border-2 border-slate-200/60">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black text-slate-900">Actions</h2>
                <button
                  onClick={generateRandomLetter}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-sm font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
                >
                  Generate Random
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button
                  onClick={handleDownload}
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
                >
                  📥 Download PNG
                </button>
                <button
                  onClick={handlePDFExport}
                  className="px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
                >
                  📄 Export PDF
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
                >
                  🖨️ Print
                </button>
                <button
                  onClick={() => {
                    setLogoSrc("");
                    setSignatureSrc("");
                  }}
                  className="px-4 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
                >
                  🔄 Reset Images
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Forms */}
              <div className="w-full lg:w-1/3 space-y-4">
                {/* Letter Type Selection */}
                <div className="bg-white/50 backdrop-blur-2xl p-5 rounded-3xl shadow-xl border-2 border-slate-200/60">
                  <h2 className="text-xl font-black text-slate-900 mb-4">Letter Type</h2>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setLetterType('employment')}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        letterType === 'employment'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Employment
                    </button>
                    <button
                      onClick={() => setLetterType('verification')}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        letterType === 'verification'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Verification
                    </button>
                    <button
                      onClick={() => setLetterType('appointment')}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        letterType === 'appointment'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Appointment
                    </button>
                    <button
                      onClick={() => setLetterType('reference')}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        letterType === 'reference'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Reference
                    </button>
                  </div>
                </div>

                {/* Institution Info */}
                <div className="bg-white/50 backdrop-blur-2xl p-5 rounded-3xl shadow-xl border-2 border-slate-200/60">
                  <h2 className="text-xl font-black text-slate-900 mb-4">Institution Information</h2>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      placeholder="Institution Name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="text"
                      value={institutionAddress}
                      onChange={(e) => setInstitutionAddress(e.target.value)}
                      placeholder="Address"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="text"
                      value={institutionCity}
                      onChange={(e) => setInstitutionCity(e.target.value)}
                      placeholder="City, State ZIP"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="text"
                      value={institutionPhone}
                      onChange={(e) => setInstitutionPhone(e.target.value)}
                      placeholder="Phone"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="text"
                      value={institutionEmail}
                      onChange={(e) => setInstitutionEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="text"
                      value={institutionWebsite}
                      onChange={(e) => setInstitutionWebsite(e.target.value)}
                      placeholder="Website"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Teacher Info */}
                <div className="bg-white/50 backdrop-blur-2xl p-5 rounded-3xl shadow-xl border-2 border-slate-200/60">
                  <h2 className="text-xl font-black text-slate-900 mb-4">Teacher Information</h2>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={teacherName}
                      onChange={(e) => setTeacherName(e.target.value)}
                      placeholder="Teacher Name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="text"
                      value={teacherTitle}
                      onChange={(e) => setTeacherTitle(e.target.value)}
                      placeholder="Title/Position"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="text"
                      value={teacherDepartment}
                      onChange={(e) => setTeacherDepartment(e.target.value)}
                      placeholder="Department"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="text"
                      value={teacherStartDate}
                      onChange={(e) => setTeacherStartDate(e.target.value)}
                      placeholder="Start Date"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    {letterType === 'employment' && (
                      <input
                        type="text"
                        value={teacherSalary}
                        onChange={(e) => setTeacherSalary(e.target.value)}
                        placeholder="Annual Salary"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                      />
                    )}
                  </div>
                </div>

                {/* Signatory Info */}
                <div className="bg-white/50 backdrop-blur-2xl p-5 rounded-3xl shadow-xl border-2 border-slate-200/60">
                  <h2 className="text-xl font-black text-slate-900 mb-4">Signatory Information</h2>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={signatoryName}
                      onChange={(e) => setSignatoryName(e.target.value)}
                      placeholder="Signatory Name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="text"
                      value={signatoryTitle}
                      onChange={(e) => setSignatoryTitle(e.target.value)}
                      placeholder="Signatory Title"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="date"
                      value={letterDate}
                      onChange={(e) => setLetterDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                    <input
                      type="text"
                      value={referenceNumber}
                      onChange={(e) => setReferenceNumber(e.target.value)}
                      placeholder="Reference Number"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Image Uploads */}
                <div className="bg-white/50 backdrop-blur-2xl p-5 rounded-3xl shadow-xl border-2 border-slate-200/60">
                  <h2 className="text-xl font-black text-slate-900 mb-4">Upload Images</h2>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Institution Logo</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="w-full px-4 py-2 rounded-xl border-2 border-slate-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Signature</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSignatureUpload}
                        className="w-full px-4 py-2 rounded-xl border-2 border-slate-300 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Letter Preview */}
              <div className="w-full lg:w-2/3">
                <TeacherOfficialLetter
                  ref={letterRef}
                  letterType={letterType}
                  institutionName={institutionName}
                  institutionAddress={institutionAddress}
                  institutionCity={institutionCity}
                  institutionPhone={institutionPhone}
                  institutionEmail={institutionEmail}
                  institutionWebsite={institutionWebsite}
                  logoSrc={logoSrc}
                  teacherName={teacherName}
                  teacherTitle={teacherTitle}
                  teacherDepartment={teacherDepartment}
                  teacherStartDate={teacherStartDate}
                  teacherSalary={teacherSalary}
                  recipientName={recipientName}
                  recipientTitle={recipientTitle}
                  recipientOrganization={recipientOrganization}
                  signatureSrc={signatureSrc}
                  signatoryName={signatoryName}
                  signatoryTitle={signatoryTitle}
                  letterDate={letterDate}
                  referenceNumber={referenceNumber}
                  accentColor={accentColor}
                />
              </div>
            </div>
          </div>

          {!hideHero && <Footer />}
        </div>
      </div>
    </>
  );
}

