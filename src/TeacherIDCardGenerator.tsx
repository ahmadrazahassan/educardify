/**
 * TEACHER ID CARD GENERATOR - SheerID Verified
 * 
 * ✅ SHEERID REQUIREMENTS MET:
 * 1. ✓ Full Name - Displayed prominently on card
 * 2. ✓ Institution Name/Logo - Large, clear institution name and logo area
 * 3. ✓ Valid Date - Issue date defaults to TODAY, Expiry date calculated as +1 year
 * 4. ✓ Academic Year - Current academic year displayed (e.g., 2024-2025)
 * 5. ✓ Professional Design - USA-style horizontal layout with security features
 * 6. ✓ Role/Title - Teacher designation/title clearly displayed
 * 7. ✓ Employee ID - Unique faculty ID number
 * 
 * DATE VALIDATION:
 * - Issue Date: Automatically set to current date (within 90 days requirement ✓)
 * - Expiry Date: Issue date + 1 year (shows active employment ✓)
 * - Academic Year: Current or upcoming academic year ✓
 * 
 * QUALITY REQUIREMENTS:
 * - High resolution export (PNG/PDF)
 * - All corners visible, no cropping
 * - Clear, readable text
 * - Professional USA institutional design
 */

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DesignControls from "./components/DesignControls";
import CollegeInfoForm from "./components/CollegeInfoForm";
import TeacherInfoForm from "./components/TeacherInfoForm";
import ImageUploadForm from "./components/ImageUploadForm";
import ActionsPanel from "./components/ActionsPanel";
import TeacherIDCard from "./components/TeacherIDCard";

export default function TeacherIDCardGenerator({ hideHero = false }: { hideHero?: boolean }) {
  // USA Teacher Names Data
  const usaMaleTeacherNames = [
    "Dr. James Anderson", "Prof. Michael Johnson", "Dr. Robert Williams", "Mr. David Brown",
    "Dr. John Davis", "Prof. William Miller", "Dr. Richard Wilson", "Mr. Thomas Moore",
    "Dr. Christopher Taylor", "Prof. Daniel Anderson", "Dr. Matthew Thomas", "Mr. Joseph Jackson",
    "Dr. Charles White", "Prof. Steven Harris", "Dr. Paul Martin", "Mr. Mark Thompson",
    "Dr. Donald Garcia", "Prof. Kenneth Martinez", "Dr. Brian Robinson", "Mr. Kevin Clark"
  ];

  const usaFemaleTeacherNames = [
    "Dr. Jennifer Smith", "Prof. Emily Johnson", "Dr. Sarah Williams", "Ms. Jessica Brown",
    "Dr. Lisa Jones", "Prof. Karen Garcia", "Dr. Nancy Miller", "Ms. Betty Davis",
    "Dr. Margaret Rodriguez", "Prof. Sandra Martinez", "Dr. Ashley Hernandez", "Ms. Kimberly Lopez",
    "Dr. Donna Gonzalez", "Prof. Carol Wilson", "Dr. Michelle Anderson", "Ms. Amanda Thomas",
    "Dr. Patricia Taylor", "Prof. Linda Moore", "Dr. Elizabeth Jackson", "Ms. Barbara White"
  ];

  const usaCities = [
    "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX",
    "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX", "San Diego, CA",
    "Dallas, TX", "San Jose, CA", "Austin, TX", "Jacksonville, FL",
    "Fort Worth, TX", "Columbus, OH", "San Francisco, CA", "Charlotte, NC",
    "Indianapolis, IN", "Seattle, WA", "Denver, CO", "Boston, MA"
  ];

  const usaSchools = [
    "Harvard University", "Stanford University", "Massachusetts Institute of Technology",
    "University of California, Berkeley", "Yale University", "Princeton University",
    "Columbia University", "University of Chicago", "University of Pennsylvania",
    "California Institute of Technology", "Johns Hopkins University", "Northwestern University",
    "Duke University", "Dartmouth College", "Brown University", "Vanderbilt University",
    "Rice University", "Washington University in St. Louis", "Cornell University",
    "University of Notre Dame", "UCLA", "Emory University", "University of California, San Diego",
    "Georgetown University", "University of Southern California", "Carnegie Mellon University",
    "University of Virginia", "University of Michigan", "Wake Forest University",
    "New York University", "Boston College", "University of North Carolina at Chapel Hill",
    "University of Rochester", "Brandeis University", "College of William & Mary",
    "Georgia Institute of Technology", "University of California, Irvine", "Tulane University",
    "Boston University", "University of Texas at Austin", "University of Florida",
    "Ohio State University", "Pennsylvania State University", "University of Washington"
  ];

  const designations = [
    "Professor", "Associate Professor", "Assistant Professor", "Instructor",
    "Lecturer", "Adjunct Professor", "Department Chair", "Dean",
    "Senior Lecturer", "Clinical Professor", "Research Professor"
  ];

  const qualifications = [
    "PhD", "EdD", "MD", "JD", "DBA", "PhD in Education",
    "PhD in Computer Science", "PhD in Mathematics", "PhD in Physics", "PhD in Chemistry",
    "PhD in English", "PhD in History", "MS", "MA", "MBA"
  ];

  const departments = [
    "Department of Computer Science", "Department of Mathematics", "Department of Physics",
    "Department of Chemistry", "Department of English", "Department of History",
    "Department of Biology", "Department of Business Administration", "Department of Education",
    "Department of Engineering", "Department of Psychology", "Department of Economics",
    "School of Medicine", "School of Law", "School of Arts and Sciences"
  ];

  // Form state
  const [name, setName] = useState("Dr. James Anderson");
  const [designation, setDesignation] = useState("Associate Professor");
  const [qualification, setQualification] = useState("PhD");
  const [email, setEmail] = useState("j.anderson@university.edu");
  const [phone, setPhone] = useState("(555) 123-4567");
  const [teacherID, setTeacherID] = useState("FAC-2024-001");
  const [dateOfJoining, setDateOfJoining] = useState("08/15/2020");
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [emergencyContact, setEmergencyContact] = useState("(555) 987-6543");
  // Current academic year (2025-2026 for December 2025)
  const [academicYear, setAcademicYear] = useState("2025-2026");
  // Issue date defaults to TODAY for SheerID compliance (within 90 days requirement)
  const [issueDate, setIssueDate] = useState(
    new Date().toLocaleDateString("en-US")
  );

  // Institution Info
  const [institutionName, setInstitutionName] = useState("Harvard University");
  const [department, setDepartment] = useState("Department of Computer Science");
  const [location, setLocation] = useState("Cambridge, MA");

  // New Features State
  const [selectedUniversity, setSelectedUniversity] = useState("Harvard University");
  const [cardTemplate, setCardTemplate] = useState("classic");
  const [batchData, setBatchData] = useState<any[]>([]);
  const [isBatchMode, setIsBatchMode] = useState(false);

  // Image state
  const [logoSrc, setLogoSrc] = useState("");
  const [photoSrc, setPhotoSrc] = useState("");
  const [signatureSrc, setSignatureSrc] = useState("");

  // Design state
  const [accentColor, setAccentColor] = useState("#1e40af");
  const [textColor, setTextColor] = useState("#1e293b");
  const [cardWidth, setCardWidth] = useState(850);
  const [cardHeight, setCardHeight] = useState(540);
  const [designTheme, setDesignTheme] = useState("professional");

  const cardRef = useRef<HTMLDivElement>(null);

  // Design themes
  const themes = {
    modern: {
      primary: "#0ea5e9",
      secondary: "#0284c7",
      text: "#1e293b",
    },
    professional: {
      primary: "#1e40af",
      secondary: "#1e3a8a",
      text: "#1e293b",
    },
    elegant: {
      primary: "#7c3aed",
      secondary: "#6d28d9",
      text: "#312e81",
    },
    corporate: {
      primary: "#059669",
      secondary: "#047857",
      text: "#064e3b",
    },
    classic: {
      primary: "#dc2626",
      secondary: "#b91c1c",
      text: "#7f1d1d",
    },
  };

  // Apply theme
  const applyTheme = (themeName: keyof typeof themes) => {
    setDesignTheme(themeName);
    setAccentColor(themes[themeName].primary);
    setTextColor(themes[themeName].text);
  };

  // Random university function
  const generateRandomUniversity = () => {
    const randomSchool = usaSchools[Math.floor(Math.random() * usaSchools.length)];
    setSelectedUniversity(randomSchool);
    setInstitutionName(randomSchool);
  };

  // Random generation function
  const generateRandomTeacher = () => {
    // Randomly select gender
    const isMale = Math.random() > 0.5;
    
    // Select random name based on gender
    const randomName = isMale
      ? usaMaleTeacherNames[Math.floor(Math.random() * usaMaleTeacherNames.length)]
      : usaFemaleTeacherNames[Math.floor(Math.random() * usaFemaleTeacherNames.length)];
    setName(randomName);

    // Generate teacher ID
    const currentYear = new Date().getFullYear();
    const randomNumber = Math.floor(1 + Math.random() * 999);
    const newTeacherID = `FAC-${currentYear}-${randomNumber.toString().padStart(3, '0')}`;
    setTeacherID(newTeacherID);

    // Generate email based on name
    const nameParts = randomName.replace(/Dr\.|Prof\.|Mr\.|Ms\./g, '').trim().split(" ");
    const firstName = nameParts[0].toLowerCase();
    const lastName = nameParts[nameParts.length - 1].toLowerCase();
    const firstInitial = firstName.charAt(0);
    const newEmail = `${firstInitial}.${lastName}@university.edu`;
    setEmail(newEmail);

    // Select random designation
    const randomDesignation = designations[Math.floor(Math.random() * designations.length)];
    setDesignation(randomDesignation);

    // Select random qualification
    const randomQualification = qualifications[Math.floor(Math.random() * qualifications.length)];
    setQualification(randomQualification);

    // Generate random USA phone number
    const areaCode = Math.floor(200 + Math.random() * 800);
    const prefix = Math.floor(200 + Math.random() * 800);
    const lineNumber = Math.floor(1000 + Math.random() * 9000);
    const newPhone = `(${areaCode}) ${prefix}-${lineNumber}`;
    setPhone(newPhone);

    // Generate emergency contact
    const emergencyArea = Math.floor(200 + Math.random() * 800);
    const emergencyPrefix = Math.floor(200 + Math.random() * 800);
    const emergencyLine = Math.floor(1000 + Math.random() * 9000);
    const newEmergencyContact = `(${emergencyArea}) ${emergencyPrefix}-${emergencyLine}`;
    setEmergencyContact(newEmergencyContact);

    // Generate random date of joining (between 2010 and 2023) - USA format MM/DD/YYYY
    const randomMonth = Math.floor(1 + Math.random() * 12);
    const randomDay = Math.floor(1 + Math.random() * 28);
    const randomYear = Math.floor(2010 + Math.random() * 14); // 2010-2023
    const newDoj = `${randomMonth.toString().padStart(2, '0')}/${randomDay.toString().padStart(2, '0')}/${randomYear}`;
    setDateOfJoining(newDoj);

    // Random blood group
    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    const randomBloodGroup = bloodGroups[Math.floor(Math.random() * bloodGroups.length)];
    setBloodGroup(randomBloodGroup);

    // Select random school and department
    const randomSchool = usaSchools[Math.floor(Math.random() * usaSchools.length)];
    setSelectedUniversity(randomSchool);
    setInstitutionName(randomSchool);

    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    setDepartment(randomDepartment);

    // Select random location
    const randomLocation = usaCities[Math.floor(Math.random() * usaCities.length)];
    setLocation(randomLocation);
  };

  // Calculate expiry date (1 year after issue date for USA teachers)
  const calculateExpiryDate = (issueDateStr: string): string => {
    try {
      // Parse MM/DD/YYYY format (USA format)
      const parts = issueDateStr.split('/');
      if (parts.length === 3) {
        const month = parseInt(parts[0]) - 1; // Month is 0-indexed
        const day = parseInt(parts[1]);
        const year = parseInt(parts[2]);
        const issueDate = new Date(year, month, day);
        issueDate.setFullYear(issueDate.getFullYear() + 1);
        return issueDate.toLocaleDateString("en-US");
      }
      return "N/A";
    } catch {
      return "N/A";
    }
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

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPhotoSrc(ev.target?.result as string);
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
    if (!cardRef.current) return;
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 6, // Ultra high quality scale
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
        windowWidth: cardRef.current.offsetWidth,
        windowHeight: cardRef.current.offsetHeight,
        imageTimeout: 0,
        logging: false
      });
      const link = document.createElement("a");
      link.download = `teacher-id-${name.replace(/\s+/g, "-").toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png", 1.0); // Maximum quality
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
    if (!cardRef.current) return;

    try {
      const element = cardRef.current;

      // Wait for all images to load
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Import jsPDF
      const { jsPDF } = await import('jspdf');

      // Capture the card as high-quality canvas
      const canvas = await html2canvas(element, {
        scale: 4, // Very high quality
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        width: element.offsetWidth,
        height: element.offsetHeight,
        windowWidth: element.offsetWidth,
        windowHeight: element.offsetHeight,
        imageTimeout: 0,
        logging: false
      });

      // Get canvas dimensions
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Convert to image data
      const imgData = canvas.toDataURL('image/png', 1.0);

      // Calculate dimensions in mm (convert pixels to mm at 96 DPI)
      const mmWidth = (imgWidth / 96) * 25.4;
      const mmHeight = (imgHeight / 96) * 25.4;

      // Add small margins (5mm on each side)
      const margin = 5;
      const pdfWidth = mmWidth + (2 * margin);
      const pdfHeight = mmHeight + (2 * margin);

      // Create PDF with custom size matching the card
      const pdf = new jsPDF({
        orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
        compress: true
      });

      // Add image to PDF with small margins
      pdf.addImage(imgData, 'PNG', margin, margin, mmWidth, mmHeight, undefined, 'FAST');

      // Save PDF
      pdf.save(`teacher-id-${name.replace(/\s+/g, "-").toLowerCase()}.pdf`);

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  // Batch Generation
  const handleBatchGeneration = () => {
    const batchSize = 10; // Generate 10 cards at once
    const newBatchData: any[] = [];

    for (let i = 0; i < batchSize; i++) {
      const isMale = Math.random() > 0.5;
      const randomName = isMale
        ? usaMaleTeacherNames[Math.floor(Math.random() * usaMaleTeacherNames.length)]
        : usaFemaleTeacherNames[Math.floor(Math.random() * usaFemaleTeacherNames.length)];

      const currentYear = new Date().getFullYear();
      const randomNumber = Math.floor(1 + Math.random() * 999);
      const newTeacherID = `FAC-${currentYear}-${randomNumber.toString().padStart(3, '0')}`;

      const randomSchool = usaSchools[Math.floor(Math.random() * usaSchools.length)];
      const randomDesignation = designations[Math.floor(Math.random() * designations.length)];
      const randomQualification = qualifications[Math.floor(Math.random() * qualifications.length)];

      const nameParts = randomName.replace(/Dr\.|Prof\.|Mr\.|Ms\./g, '').trim().split(" ");
      const firstName = nameParts[0].toLowerCase();
      const lastName = nameParts[nameParts.length - 1].toLowerCase();
      const firstInitial = firstName.charAt(0);

      const areaCode = Math.floor(200 + Math.random() * 800);
      const prefix = Math.floor(200 + Math.random() * 800);
      const lineNumber = Math.floor(1000 + Math.random() * 9000);

      newBatchData.push({
        name: randomName,
        teacherID: newTeacherID,
        designation: randomDesignation,
        qualification: randomQualification,
        university: randomSchool,
        email: `${firstInitial}.${lastName}@university.edu`,
        phone: `(${areaCode}) ${prefix}-${lineNumber}`,
        doj: `${Math.floor(1 + Math.random() * 12).toString().padStart(2, '0')}/${Math.floor(1 + Math.random() * 28).toString().padStart(2, '0')}/${Math.floor(2010 + Math.random() * 14)}`
      });
    }

    setBatchData(newBatchData);
    setIsBatchMode(true);
  };

  // Download Batch as CSV
  const handleDownloadBatchCSV = () => {
    if (batchData.length === 0) return;

    const csvHeaders = "Name,Teacher ID,Designation,Qualification,University,Email,Phone,Date of Joining\n";
    const csvContent = batchData.map(teacher =>
      `"${teacher.name}","${teacher.teacherID}","${teacher.designation}","${teacher.qualification}","${teacher.university}","${teacher.email}","${teacher.phone}","${teacher.doj}"`
    ).join("\n");

    const blob = new Blob([csvHeaders + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "teacher-batch-data.csv";
    link.click();
  };

  return (
    <>
      {!hideHero && <Header />}

      {/* Main Content with proper spacing for fixed header */}
      <div className={hideHero ? "" : "pt-20 pb-12 px-4 md:px-8"}>
      <div className={hideHero ? "" : "max-w-7xl mx-auto"}>
          {/* Hero Section - Simple & Modern */}
          {!hideHero && (
          <div className="text-center mb-12 py-8">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
                Free Tool
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Teacher ID Card Generator
            </h1>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Create professional teacher ID cards instantly
            </p>
            
            {/* Feature Pills - Simple */}
            <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                <div className="w-1 h-1 rounded-full bg-green-500"></div>
                <span className="text-xs text-slate-600">No Watermarks</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                <span className="text-xs text-slate-600">Unlimited</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                <span className="text-xs text-slate-600">Privacy First</span>
              </div>
            </div>
          </div>
          )}

          <div className="flex flex-col gap-6">
            {/* Design Controls and Actions - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <DesignControls
                  designTheme={designTheme}
                  accentColor={accentColor}
                  textColor={textColor}
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  cardTemplate={cardTemplate}
                  onThemeChange={applyTheme}
                  onAccentColorChange={setAccentColor}
                  onTextColorChange={setTextColor}
                  onCardWidthChange={setCardWidth}
                  onCardHeightChange={setCardHeight}
                  onTemplateChange={setCardTemplate}
                  />
                </div>
              <div className="lg:col-span-1">
                <ActionsPanel
                  onDownload={handleDownload}
                  onPrint={handlePrint}
                  onPDFExport={handlePDFExport}
                  onBatchGeneration={handleBatchGeneration}
                  onDownloadBatchCSV={handleDownloadBatchCSV}
                  batchData={batchData}
                />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left: Form inputs */}
              <div className="w-full lg:w-1/3 space-y-4">
                <CollegeInfoForm
                  collegeName={institutionName}
                  collegeDepartment={department}
                  collegeLocation={location}
                  pakistaniUniversities={usaSchools}
                  selectedUniversity={selectedUniversity}
                  onCollegeNameChange={setInstitutionName}
                  onCollegeDepartmentChange={setDepartment}
                  onCollegeLocationChange={setLocation}
                  onUniversitySelect={(university) => {
                    setSelectedUniversity(university);
                    setInstitutionName(university);
                  }}
                  onRandomUniversity={generateRandomUniversity}
                />

                <TeacherInfoForm
                  name={name}
                  designation={designation}
                  qualification={qualification}
                  email={email}
                  phone={phone}
                  teacherID={teacherID}
                  dateOfJoining={dateOfJoining}
                  bloodGroup={bloodGroup}
                  emergencyContact={emergencyContact}
                  academicYear={academicYear}
                  issueDate={issueDate}
                  onNameChange={setName}
                  onDesignationChange={setDesignation}
                  onQualificationChange={setQualification}
                  onEmailChange={setEmail}
                  onPhoneChange={setPhone}
                  onTeacherIDChange={setTeacherID}
                  onDateOfJoiningChange={setDateOfJoining}
                  onBloodGroupChange={setBloodGroup}
                  onEmergencyContactChange={setEmergencyContact}
                  onAcademicYearChange={setAcademicYear}
                  onIssueDateChange={setIssueDate}
                  onGenerateRandom={generateRandomTeacher}
                />
          </div>

          {/* Right: Live preview and Upload Images */}
              <div className="w-full lg:w-2/3 space-y-6">
                {/* Show batch results if in batch mode */}
                {isBatchMode && batchData.length > 0 && (
                  <div className="w-full">
                    <div className="bg-white/50 backdrop-blur-2xl p-6 rounded-3xl shadow-xl border-2 border-slate-200/60">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="text-xl font-black text-slate-900">Batch Results</h2>
                          <p className="text-xs text-slate-600 font-semibold">{batchData.length} teacher records generated</p>
                        </div>
                      </div>

                      <div className="max-h-96 overflow-y-auto space-y-3">
                        {batchData.map((teacher, index) => (
                          <div key={index} className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border-2 border-slate-300 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">Name</div>
                                <div className="text-sm font-black text-slate-900">{teacher.name}</div>
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">ID</div>
                                <div className="text-sm font-black text-blue-900">{teacher.teacherID}</div>
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">Designation</div>
                                <div className="text-sm font-semibold text-slate-900">{teacher.designation}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex justify-center">
                        <button
                          onClick={() => setIsBatchMode(false)}
                          className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
                        >
                          Clear Batch & Return to Single Mode
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Show single card preview if not in batch mode */}
                {!isBatchMode && (
                  <>
                    <TeacherIDCard
                      ref={cardRef}
                      width={cardWidth}
                      height={cardHeight}
                      accentColor={accentColor}
                      textColor={textColor}
                      institutionName={institutionName}
                      department={department}
                      location={location}
                      academicYear={academicYear}
                      logoSrc={logoSrc}
                      photoSrc={photoSrc}
                      signatureSrc={signatureSrc}
                      teacherID={teacherID}
                      name={name}
                      designation={designation}
                      qualification={qualification}
                      email={email}
                      phone={phone}
                      dateOfJoining={dateOfJoining}
                      issueDate={issueDate}
                      bloodGroup={bloodGroup}
                      emergencyContact={emergencyContact}
                      template={cardTemplate}
                      calculateExpiryDate={calculateExpiryDate}
                    />

                    <ImageUploadForm
                      onLogoUpload={handleLogoUpload}
                      onPhotoUpload={handlePhotoUpload}
                      onSignatureUpload={handleSignatureUpload}
                    />
                  </>
                )}
              </div>
            </div>
          </div>

        {!hideHero && <Footer />}
        </div>
      </div>
    </>
  );
}

