import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import TuitionFeeReceipt from "./components/TuitionFeeReceipt";
import Header from "./components/Header";

export default function TuitionFeeReceiptGenerator({ hideHero = false }: { hideHero?: boolean }) {
  const receiptRef = useRef<HTMLDivElement>(null);

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
    "International Islamic University Islamabad", "University of Peshawar",
    "University of Balochistan", "University of Sindh", "Bahauddin Zakariya University",
    "University of Agriculture, Faisalabad", "Government College University, Lahore",
    "Lahore College for Women University", "University of Sargodha", "University of Gujrat",
    "University of Malakand", "Kohat University of Science and Technology",
    "University of Swat", "Hazara University", "University of Haripur",
    "Islamia University, Bahawalpur", "University of Veterinary and Animal Sciences",
    "Mehran University of Engineering and Technology"
  ];

  const programs = [
    "BS Computer Science", "BS Software Engineering", "BS Information Technology",
    "BS Business Administration", "BS Accounting & Finance", "BS Economics",
    "BS Psychology", "BS English", "BS Mathematics", "BS Physics"
  ];

  const paymentMethods = ["Cash", "Bank Transfer", "Cheque", "Online Payment", "Credit/Debit Card"];

  // Receipt State
  const [receiptNumber, setReceiptNumber] = useState("FEE-2025-0001");
  const [receiptDate, setReceiptDate] = useState(new Date().toLocaleDateString('en-GB'));
  const [studentName, setStudentName] = useState("Muhammad Ahmed Khan");
  const [studentID, setStudentID] = useState("CS-2024-001");
  const [className, setClassName] = useState("BS Computer Science");
  const [studentDOB, setStudentDOB] = useState("15 Jan 2002");
  const [collegeName, setCollegeName] = useState("University of Karachi");
  const [collegeAddress, setCollegeAddress] = useState("University Road, Karachi, Pakistan");
  const [collegeLogo, setCollegeLogo] = useState("");
  const [studentEmail, setStudentEmail] = useState("ahmed.khan@university.edu.pk");
  const [transactionID, setTransactionID] = useState("TXN-FEE-2025-0001-1234");
  
  // Fee State
  const [tuitionFee, setTuitionFee] = useState("50000");
  const [admissionFee, setAdmissionFee] = useState("10000");
  const [labFee, setLabFee] = useState("5000");
  const [libraryFee, setLibraryFee] = useState("2000");
  const [examFee, setExamFee] = useState("3000");
  const [otherFee, setOtherFee] = useState("1000");
  const [discount, setDiscount] = useState("5000");
  
  // Other Info
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [academicYear, setAcademicYear] = useState("2024-2025");
  const [semester, setSemester] = useState("Fall 2024");
  const [receivedBy, setReceivedBy] = useState("Accounts Department");

  // Logo Upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCollegeLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Download as PNG
  const handleDownload = async () => {
    if (!receiptRef.current) return;
    try {
      const canvas = await html2canvas(receiptRef.current, {
        scale: 6,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        width: receiptRef.current.offsetWidth,
        height: receiptRef.current.offsetHeight,
        windowWidth: receiptRef.current.offsetWidth,
        windowHeight: receiptRef.current.offsetHeight,
        imageTimeout: 0,
        logging: false
      });
      const link = document.createElement("a");
      link.download = `fee-receipt-${receiptNumber}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Error generating image. Please try again.");
    }
  };

  // PDF Export
  const handlePDFExport = async () => {
    if (!receiptRef.current) return;

    try {
      const element = receiptRef.current;
      await new Promise(resolve => setTimeout(resolve, 1000));

      const { jsPDF } = await import('jspdf');

      const canvas = await html2canvas(element, {
        scale: 4,
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

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const imgData = canvas.toDataURL('image/png', 1.0);

      const mmWidth = (imgWidth / 96) * 25.4;
      const mmHeight = (imgHeight / 96) * 25.4;

      const margin = 5;
      const pdfWidth = mmWidth + (2 * margin);
      const pdfHeight = mmHeight + (2 * margin);

      const pdf = new jsPDF({
        orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
        compress: true
      });

      pdf.addImage(imgData, 'PNG', margin, margin, mmWidth, mmHeight, undefined, 'FAST');
      pdf.save(`fee-receipt-${receiptNumber}.pdf`);

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  // Print
  const handlePrint = () => {
    window.print();
  };

  // Generate Random Receipt
  const generateRandomReceipt = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const randomGender = Math.random() > 0.5;
    const randomName = randomGender 
      ? pakistaniBoyNames[Math.floor(Math.random() * pakistaniBoyNames.length)]
      : pakistaniGirlNames[Math.floor(Math.random() * pakistaniGirlNames.length)];
    
    const nameParts = randomName.split(" ");
    const firstInitial = nameParts[0][0].toUpperCase();
    const lastInitial = nameParts[nameParts.length - 1][0].toUpperCase();
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    const newStudentID = `${firstInitial}${lastInitial}${randomDigits}`;

    const randomUniversity = pakistaniUniversities[Math.floor(Math.random() * pakistaniUniversities.length)];
    
    // Get university domain
    const universityDomain = randomUniversity.toLowerCase()
      .replace(/university of /gi, '')
      .replace(/university/gi, '')
      .replace(/\s+/g, '')
      .trim() || 'university';

    // Generate realistic transaction ID
    const txnSuffix = Math.floor(1000 + Math.random() * 9000);
    const newTransactionID = `TXN-FEE-2025-${randomNum}-${txnSuffix}`;

    // Generate random DOB (18-25 years old)
    const birthYear = Math.floor(1999 + Math.random() * 8); // 1999-2006
    const birthMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][Math.floor(Math.random() * 12)];
    const birthDay = Math.floor(1 + Math.random() * 28);
    const randomDOB = `${birthDay.toString().padStart(2, '0')} ${birthMonth} ${birthYear}`;

    setReceiptNumber(`FEE-2025-${randomNum}`);
    setReceiptDate(new Date().toLocaleDateString('en-GB'));
    setStudentName(randomName);
    setStudentID(newStudentID);
    setClassName(programs[Math.floor(Math.random() * programs.length)]);
    setStudentDOB(randomDOB);
    setStudentEmail(`${newStudentID.toLowerCase()}@${universityDomain}.edu.pk`);
    setCollegeName(randomUniversity);
    setCollegeAddress(`${randomUniversity} Campus, Pakistan`);
    setTransactionID(newTransactionID);
    setTuitionFee((Math.floor(40000 + Math.random() * 60000)).toString());
    setAdmissionFee((Math.floor(5000 + Math.random() * 15000)).toString());
    setLabFee((Math.floor(2000 + Math.random() * 8000)).toString());
    setLibraryFee((Math.floor(1000 + Math.random() * 5000)).toString());
    setExamFee((Math.floor(2000 + Math.random() * 5000)).toString());
    setOtherFee((Math.floor(500 + Math.random() * 3000)).toString());
    setDiscount((Math.floor(2000 + Math.random() * 8000)).toString());
  };

  // Generate Random College Info
  const generateRandomCollege = () => {
    const university = pakistaniUniversities[Math.floor(Math.random() * pakistaniUniversities.length)];
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const txnSuffix = Math.floor(1000 + Math.random() * 9000);
    const newTransactionID = `TXN-FEE-2025-${randomNum}-${txnSuffix}`;
    
    // Get university domain for email
    const universityDomain = university.toLowerCase()
      .replace(/university of /gi, '')
      .replace(/university/gi, '')
      .replace(/\s+/g, '')
      .trim() || 'university';
    
    setCollegeName(university);
    setCollegeAddress(`${university} Campus, Pakistan`);
    setReceiptNumber(`FEE-2025-${randomNum}`);
    setTransactionID(newTransactionID);
    // Update email to match new university
    setStudentEmail(`${studentID.toLowerCase()}@${universityDomain}.edu.pk`);
  };

  // Generate Random Fees
  const generateRandomFees = () => {
    setTuitionFee((Math.floor(40000 + Math.random() * 60000)).toString());
    setAdmissionFee((Math.floor(5000 + Math.random() * 15000)).toString());
    setLabFee((Math.floor(2000 + Math.random() * 8000)).toString());
    setLibraryFee((Math.floor(1000 + Math.random() * 5000)).toString());
    setExamFee((Math.floor(2000 + Math.random() * 5000)).toString());
    setOtherFee((Math.floor(500 + Math.random() * 3000)).toString());
    setDiscount((Math.floor(2000 + Math.random() * 8000)).toString());
  };

  // Generate Random Payment Info
  const generateRandomPayment = () => {
    setPaymentMethod(paymentMethods[Math.floor(Math.random() * paymentMethods.length)]);
    setReceivedBy(`Cashier ${Math.floor(1 + Math.random() * 10)}`);
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
              <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                Free Tool
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Tuition Fee Receipt Generator
            </h1>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Create professional fee receipts instantly
            </p>
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
                    onClick={generateRandomReceipt}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 hover:shadow-sm transition-all duration-200 font-medium text-xs"
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
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Student ID</label>
                    <input
                      type="text"
                      value={studentID}
                      onChange={(e) => setStudentID(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Class/Program</label>
                    <input
                      type="text"
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Date of Birth</label>
                    <input
                      type="text"
                      value={studentDOB}
                      onChange={(e) => setStudentDOB(e.target.value)}
                      placeholder="DD MMM YYYY"
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Student Email</label>
                    <input
                      type="email"
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Academic Year</label>
                    <input
                      type="text"
                      value={academicYear}
                      onChange={(e) => setAcademicYear(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Semester</label>
                    <input
                      type="text"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* College Information */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 tracking-tight">College Information</h3>
                    <p className="text-xs text-slate-400 mt-1">Institution details</p>
                  </div>
                  <button
                    onClick={generateRandomCollege}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 hover:shadow-sm transition-all duration-200 font-medium text-xs"
                  >
                    Generate
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">College Name</label>
                    <input
                      type="text"
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">College Address</label>
                    <input
                      type="text"
                      value={collegeAddress}
                      onChange={(e) => setCollegeAddress(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">College Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="w-full text-sm text-slate-600 file:mr-3 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer file:shadow-sm transition-all cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Receipt Number</label>
                    <input
                      type="text"
                      value={receiptNumber}
                      onChange={(e) => setReceiptNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Receipt Date</label>
                    <input
                      type="text"
                      value={receiptDate}
                      onChange={(e) => setReceiptDate(e.target.value)}
                      placeholder="DD/MM/YYYY"
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Fee Details */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Fee Details</h3>
                    <p className="text-xs text-slate-400 mt-1">Enter fee amounts in PKR</p>
                  </div>
                  <button
                    onClick={generateRandomFees}
                    className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 hover:shadow-sm transition-all duration-200 font-medium text-xs"
                  >
                    Generate
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Tuition Fee</label>
                    <input
                      type="number"
                      value={tuitionFee}
                      onChange={(e) => setTuitionFee(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Admission Fee</label>
                    <input
                      type="number"
                      value={admissionFee}
                      onChange={(e) => setAdmissionFee(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Lab Fee</label>
                    <input
                      type="number"
                      value={labFee}
                      onChange={(e) => setLabFee(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Library Fee</label>
                    <input
                      type="number"
                      value={libraryFee}
                      onChange={(e) => setLibraryFee(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Exam Fee</label>
                    <input
                      type="number"
                      value={examFee}
                      onChange={(e) => setExamFee(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Other Charges</label>
                    <input
                      type="number"
                      value={otherFee}
                      onChange={(e) => setOtherFee(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Discount</label>
                    <input
                      type="number"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Payment & Actions */}
              <div className="space-y-6">
                {/* Payment Info */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Payment Information</h3>
                      <p className="text-xs text-slate-400 mt-1">Payment details</p>
                    </div>
                    <button
                      onClick={generateRandomPayment}
                      className="bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700 hover:shadow-sm transition-all duration-200 font-medium text-xs"
                    >
                      Generate
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Payment Method</label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium text-slate-900 text-sm shadow-sm cursor-pointer"
                      >
                        <option>Cash</option>
                        <option>Bank Transfer</option>
                        <option>Cheque</option>
                        <option>Online Payment</option>
                        <option>Credit/Debit Card</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Received By</label>
                      <input
                        type="text"
                        value={receivedBy}
                        onChange={(e) => setReceivedBy(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium text-slate-900 text-sm shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Actions</h3>
                    <p className="text-xs text-slate-400 mt-1">Export receipt</p>
                  </div>

                  <div className="space-y-2.5">
                    <button
                      onClick={handleDownload}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-2xl hover:bg-blue-700 hover:shadow-md transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PNG
                    </button>

                    <button
                      onClick={handlePDFExport}
                      className="w-full bg-purple-600 text-white py-3 px-4 rounded-2xl hover:bg-purple-700 hover:shadow-md transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Export PDF
                    </button>

                    <button
                      onClick={handlePrint}
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-2xl hover:bg-green-700 hover:shadow-md transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      Print
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Receipt Preview */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Receipt Preview</h3>
                <p className="text-xs text-slate-400 mt-1">Live preview of your receipt</p>
              </div>

              <div className="flex justify-center">
                <div ref={receiptRef}>
                  <TuitionFeeReceipt
                    receiptNumber={receiptNumber}
                    receiptDate={receiptDate}
                    studentName={studentName}
                    studentID={studentID}
                    className={className}
                    studentDOB={studentDOB}
                    collegeName={collegeName}
                    collegeAddress={collegeAddress}
                    collegeLogo={collegeLogo}
                    tuitionFee={tuitionFee}
                    admissionFee={admissionFee}
                    labFee={labFee}
                    libraryFee={libraryFee}
                    examFee={examFee}
                    otherFee={otherFee}
                    discount={discount}
                    paymentMethod={paymentMethod}
                    academicYear={academicYear}
                    semester={semester}
                    receivedBy={receivedBy}
                    studentEmail={studentEmail}
                    transactionID={transactionID}
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
