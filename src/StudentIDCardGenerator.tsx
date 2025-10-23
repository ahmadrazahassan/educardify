import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DesignControls from "./components/DesignControls";
import CollegeInfoForm from "./components/CollegeInfoForm";
import StudentInfoForm from "./components/StudentInfoForm";
import ImageUploadForm from "./components/ImageUploadForm";
import ActionsPanel from "./components/ActionsPanel";
import StudentIDCard from "./components/StudentIDCard";

export default function StudentIDCardGenerator({ hideHero = false }: { hideHero?: boolean }) {
  // Pakistani Names Data
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

  const pakistaniCities = [
    "Karachi, Sindh", "Lahore, Punjab", "Islamabad, Federal Capital",
    "Rawalpindi, Punjab", "Faisalabad, Punjab", "Multan, Punjab",
    "Peshawar, KPK", "Quetta, Balochistan", "Sialkot, Punjab",
    "Gujranwala, Punjab", "Hyderabad, Sindh", "Abbottabad, KPK"
  ];

  const pakistaniUniversities = [
    "University of Karachi", "Lahore University of Management Sciences (LUMS)",
    "National University of Sciences and Technology (NUST)", "University of Punjab",
    "University of Engineering and Technology, Lahore", "University of Central Punjab (UCP)",
    "COMSATS University Islamabad", "International Islamic University Islamabad",
    "Quaid-i-Azam University", "University of Peshawar", "University of Balochistan",
    "University of Sindh", "Bahauddin Zakariya University", "University of Agriculture, Faisalabad",
    "Punjab University College of Information Technology", "FAST National University",
    "Institute of Business Administration (IBA), Karachi", "Lahore College for Women University",
    "University of Sargodha", "Government College University, Faisalabad",
    "University of Gujrat", "University of Malakand", "Kohat University of Science and Technology",
    "University of Swat", "Hazara University", "University of Haripur",
    "Islamia University, Bahawalpur", "The Islamia University of Bahawalpur",
    "University of Veterinary and Animal Sciences", "Pir Mehr Ali Shah Arid Agriculture University",
    "Sukkur Institute of Business Administration", "Mehran University of Engineering and Technology",
    "NED University of Engineering and Technology", "Dawood University of Engineering and Technology",
    "Sindh Madressatul Islam University", "Shah Abdul Latif University",
    "Government College University, Lahore", "Air University Islamabad"
  ];

  // Form state
  const [name, setName] = useState("Ahmed Ali");
  const [className, setClassName] = useState("Computer Science");
  const [dob, setDob] = useState("15 Jan 2002");
  const [phone, setPhone] = useState("+92 300 1234567");
  const [address, setAddress] = useState("Karachi, Sindh");
  const [studentEmail, setStudentEmail] = useState("aa123456@university.edu.pk");
  const [issueDate, setIssueDate] = useState(
    new Date().toLocaleDateString("en-GB")
  );
  const [studentID, setStudentID] = useState("AA123456");
  const [gender, setGender] = useState("Male");
  const [academicYear, setAcademicYear] = useState("2024-2025");

  // College Info
  const [collegeName, setCollegeName] = useState("University of Karachi");
  const [collegeDepartment, setCollegeDepartment] = useState("Faculty of Science");
  const [collegeLocation, setCollegeLocation] = useState("Karachi, Pakistan");

  // New Features State
  const [selectedUniversity, setSelectedUniversity] = useState("University of Karachi");
  const [cardTemplate, setCardTemplate] = useState("modern");
  const [batchData, setBatchData] = useState<any[]>([]);
  const [isBatchMode, setIsBatchMode] = useState(false);

  // Image state
  const [logoSrc, setLogoSrc] = useState("");
  const [photoSrc, setPhotoSrc] = useState("");
  const [signatureSrc, setSignatureSrc] = useState("");

  // Design state
  const [accentColor, setAccentColor] = useState("#0ea5e9");
  const [textColor, setTextColor] = useState("#1e293b");
  const [cardWidth, setCardWidth] = useState(750);
  const [cardHeight, setCardHeight] = useState(470);
  const [designTheme, setDesignTheme] = useState("modern");

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
    const randomUniversity = pakistaniUniversities[Math.floor(Math.random() * pakistaniUniversities.length)];
    setSelectedUniversity(randomUniversity);
    setCollegeName(randomUniversity);
  };

  // Random generation function
  const generateRandomStudent = () => {
    // Randomly select gender
    const randomGender = Math.random() > 0.5 ? "Male" : "Female";
    setGender(randomGender);

    // Select random name based on gender
    const randomName = randomGender === "Male" 
      ? pakistaniBoyNames[Math.floor(Math.random() * pakistaniBoyNames.length)]
      : pakistaniGirlNames[Math.floor(Math.random() * pakistaniGirlNames.length)];
    setName(randomName);

    // Generate student ID from name (first letter of first name + first letter of last name + 6 random digits)
    const nameParts = randomName.split(" ");
    const firstInitial = nameParts[0][0].toUpperCase();
    const lastInitial = nameParts[nameParts.length - 1][0].toUpperCase();
    const randomDigits = Math.floor(100000 + Math.random() * 900000); // 6-digit number
    const newStudentID = `${firstInitial}${lastInitial}${randomDigits}`;
    setStudentID(newStudentID);

    // Generate email based on student ID
    const newEmail = `${newStudentID.toLowerCase()}@university.edu.pk`;
    setStudentEmail(newEmail);

    // Generate random date of birth (between 1998 and 2006 for typical students)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const randomMonth = months[Math.floor(Math.random() * months.length)];
    const randomDay = Math.floor(1 + Math.random() * 28);
    const randomYear = Math.floor(1998 + Math.random() * 9); // 1998-2006
    const newDob = `${randomDay.toString().padStart(2, '0')} ${randomMonth} ${randomYear}`;
    setDob(newDob);

    // Generate random Pakistani phone number
    const operators = ["300", "301", "302", "303", "304", "305", "320", "321", "322", "333", "334", "335"];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const randomPhoneNumber = Math.floor(1000000 + Math.random() * 9000000);
    const newPhone = `+92 ${randomOperator} ${randomPhoneNumber}`;
    setPhone(newPhone);

    // Select random address
    const randomAddress = pakistaniCities[Math.floor(Math.random() * pakistaniCities.length)];
    setAddress(randomAddress);

    // Select random university
    const randomUniversity = pakistaniUniversities[Math.floor(Math.random() * pakistaniUniversities.length)];
    setSelectedUniversity(randomUniversity);
    setCollegeName(randomUniversity);
  };

  // Calculate expiry date (4 years after issue date)
  const calculateExpiryDate = (issueDateStr: string): string => {
    try {
      // Parse DD/MM/YYYY format
      const parts = issueDateStr.split('/');
      if (parts.length === 3) {
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1; // Month is 0-indexed
        const year = parseInt(parts[2]);
        const issueDate = new Date(year, month, day);
        issueDate.setFullYear(issueDate.getFullYear() + 4);
        return issueDate.toLocaleDateString("en-GB");
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
      link.download = `student-id-${name.replace(/\s+/g, "-").toLowerCase()}.png`;
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

  // PDF Export - Rebuilt from scratch using jsPDF directly
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
      pdf.save(`student-id-${name.replace(/\s+/g, "-").toLowerCase()}.pdf`);

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
      const randomGender = Math.random() > 0.5 ? "Male" : "Female";
      const randomName = randomGender === "Male"
        ? pakistaniBoyNames[Math.floor(Math.random() * pakistaniBoyNames.length)]
        : pakistaniGirlNames[Math.floor(Math.random() * pakistaniGirlNames.length)];

      const nameParts = randomName.split(" ");
      const firstInitial = nameParts[0][0].toUpperCase();
      const lastInitial = nameParts[nameParts.length - 1][0].toUpperCase();
      const randomDigits = Math.floor(100000 + Math.random() * 900000);
      const newStudentID = `${firstInitial}${lastInitial}${randomDigits}`;

      const randomUniversity = pakistaniUniversities[Math.floor(Math.random() * pakistaniUniversities.length)];
      const randomAddress = pakistaniCities[Math.floor(Math.random() * pakistaniCities.length)];

      newBatchData.push({
        name: randomName,
        studentID: newStudentID,
        gender: randomGender,
        university: randomUniversity,
        address: randomAddress,
        email: `${newStudentID.toLowerCase()}@university.edu.pk`,
        phone: `+92 ${["300", "301", "302", "303", "304", "305"][Math.floor(Math.random() * 6)]} ${Math.floor(1000000 + Math.random() * 9000000)}`,
        dob: `${Math.floor(1 + Math.random() * 28).toString().padStart(2, '0')} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun"][Math.floor(Math.random() * 6)]} ${Math.floor(1998 + Math.random() * 9)}`
      });
    }

    setBatchData(newBatchData);
    setIsBatchMode(true);
  };

  // Download Batch as CSV
  const handleDownloadBatchCSV = () => {
    if (batchData.length === 0) return;

    const csvHeaders = "Name,Student ID,Gender,University,Address,Email,Phone,DOB\n";
    const csvContent = batchData.map(student =>
      `"${student.name}","${student.studentID}","${student.gender}","${student.university}","${student.address}","${student.email}","${student.phone}","${student.dob}"`
    ).join("\n");

    const blob = new Blob([csvHeaders + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "student-batch-data.csv";
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
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                Free Tool
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Student ID Card Generator
            </h1>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Create professional student ID cards instantly
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
                  collegeName={collegeName}
                  collegeDepartment={collegeDepartment}
                  collegeLocation={collegeLocation}
                  pakistaniUniversities={pakistaniUniversities}
                  selectedUniversity={selectedUniversity}
                  onCollegeNameChange={setCollegeName}
                  onCollegeDepartmentChange={setCollegeDepartment}
                  onCollegeLocationChange={setCollegeLocation}
                  onUniversitySelect={(university) => {
                    setSelectedUniversity(university);
                    setCollegeName(university);
                  }}
                  onRandomUniversity={generateRandomUniversity}
                />

                <StudentInfoForm
                  name={name}
                  className={className}
                  dob={dob}
                  phone={phone}
                  address={address}
                  studentID={studentID}
                  studentEmail={studentEmail}
                  gender={gender}
                  academicYear={academicYear}
                  issueDate={issueDate}
                  onNameChange={setName}
                  onClassNameChange={setClassName}
                  onDobChange={setDob}
                  onPhoneChange={setPhone}
                  onAddressChange={setAddress}
                  onStudentIDChange={setStudentID}
                  onStudentEmailChange={setStudentEmail}
                  onGenderChange={setGender}
                  onAcademicYearChange={setAcademicYear}
                  onIssueDateChange={setIssueDate}
                  onGenerateRandom={generateRandomStudent}
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
                          <p className="text-xs text-slate-600 font-semibold">{batchData.length} student records generated</p>
                        </div>
                      </div>

                      <div className="max-h-96 overflow-y-auto space-y-3">
                        {batchData.map((student, index) => (
                          <div key={index} className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border-2 border-slate-300 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">Name</div>
                                <div className="text-sm font-black text-slate-900">{student.name}</div>
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">ID</div>
                                <div className="text-sm font-black text-blue-900">{student.studentID}</div>
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">University</div>
                                <div className="text-sm font-semibold text-slate-900">{student.university}</div>
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
                    <StudentIDCard
                      ref={cardRef}
                      width={cardWidth}
                      height={cardHeight}
                      accentColor={accentColor}
                      textColor={textColor}
                      collegeName={collegeName}
                      collegeDepartment={collegeDepartment}
                      collegeLocation={collegeLocation}
                      academicYear={academicYear}
                      logoSrc={logoSrc}
                      photoSrc={photoSrc}
                      signatureSrc={signatureSrc}
                      studentID={studentID}
                      gender={gender}
                      name={name}
                      className={className}
                      dob={dob}
                      studentEmail={studentEmail}
                      phone={phone}
                      address={address}
                      issueDate={issueDate}
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
