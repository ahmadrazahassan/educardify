interface TuitionFeeReceiptProps {
  receiptNumber: string;
  receiptDate: string;
  studentName: string;
  studentID: string;
  className: string;
  studentDOB: string;
  collegeName: string;
  collegeAddress: string;
  collegeLogo: string;
  tuitionFee: string;
  admissionFee: string;
  labFee: string;
  libraryFee: string;
  examFee: string;
  otherFee: string;
  discount: string;
  paymentMethod: string;
  academicYear: string;
  semester: string;
  receivedBy: string;
  studentEmail: string;
  transactionID: string;
}

export default function TuitionFeeReceipt({
  receiptNumber,
  receiptDate,
  studentName,
  studentID,
  className,
  studentDOB,
  collegeName,
  collegeAddress,
  collegeLogo,
  tuitionFee,
  admissionFee,
  labFee,
  libraryFee,
  examFee,
  otherFee,
  discount,
  paymentMethod,
  academicYear,
  semester,
  receivedBy,
  studentEmail,
  transactionID,
}: TuitionFeeReceiptProps) {
  // Generate random old date (10-20 days ago)
  const getGeneratedDate = () => {
    const daysAgo = Math.floor(10 + Math.random() * 11); // 10-20 days
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  // Get university domain from college name
  const getUniversityDomain = () => {
    if (!collegeName) return 'university';
    // Remove common words and spaces, take first word or abbreviation
    const name = collegeName.toLowerCase()
      .replace(/university of /gi, '')
      .replace(/university/gi, '')
      .replace(/\s+/g, '')
      .trim();
    return name || 'university';
  };

  // Calculate total
  const calculateTotal = () => {
    const fees = [
      parseFloat(tuitionFee) || 0,
      parseFloat(admissionFee) || 0,
      parseFloat(labFee) || 0,
      parseFloat(libraryFee) || 0,
      parseFloat(examFee) || 0,
      parseFloat(otherFee) || 0,
    ];
    const subtotal = fees.reduce((sum, fee) => sum + fee, 0);
    const discountAmount = parseFloat(discount) || 0;
    return subtotal - discountAmount;
  };

  const total = calculateTotal();
  const subtotal = calculateTotal() + (parseFloat(discount) || 0);

  return (
    <div className="w-[1000px] bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden relative">
      {/* Watermark Logo */}
      {collegeLogo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src={collegeLogo}
            alt="Watermark"
            className="w-96 h-96 object-contain opacity-5"
          />
        </div>
      )}

      {/* Content with higher z-index */}
      <div className="relative z-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {collegeLogo && (
              <img
                src={collegeLogo}
                alt="College Logo"
                className="w-16 h-16 object-contain bg-white rounded-xl p-2"
              />
            )}
            <div>
              <h1 className="text-xl font-bold">{collegeName || "College Name"}</h1>
              <p className="text-blue-100 text-xs mt-1">{collegeAddress || "College Address"}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-xl">
              <p className="text-xs font-semibold text-blue-100">RECEIPT NO.</p>
              <p className="text-base font-bold">{receiptNumber || "0000"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Receipt Title */}
      <div className="bg-slate-50 border-b-2 border-slate-200 py-2">
        <h2 className="text-center text-lg font-bold text-slate-800 uppercase tracking-wide">
          Tuition Fee Receipt
        </h2>
        <p className="text-center text-xs text-slate-500 mt-0.5">Official Transaction Record</p>
      </div>

      {/* Student & Receipt Info */}
      <div className="p-4 grid grid-cols-3 gap-4 border-b border-slate-200">
        <div className="space-y-2">
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
            <p className="text-xs font-semibold text-slate-500 uppercase">Class/Program</p>
            <p className="text-sm font-bold text-slate-900">{className || "Class Name"}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Email Address</p>
            <p className="text-sm font-bold text-slate-900">{studentEmail || "student@university.edu.pk"}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Receipt Date</p>
            <p className="text-sm font-bold text-slate-900">{receiptDate || "DD/MM/YYYY"}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Academic Year</p>
            <p className="text-sm font-bold text-slate-900">{academicYear || "2024-2025"}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Semester</p>
            <p className="text-sm font-bold text-slate-900">{semester || "Fall 2024"}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Transaction ID</p>
            <p className="text-xs font-bold text-blue-600">{transactionID || `TXN-${receiptNumber}-0000`}</p>
          </div>
        </div>
      </div>

      {/* Fee Details Table */}
      <div className="p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-slate-300">
              <th className="text-left py-3 px-2 text-sm font-bold text-slate-700 uppercase">Description</th>
              <th className="text-right py-3 px-2 text-sm font-bold text-slate-700 uppercase">Amount (PKR)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {tuitionFee && parseFloat(tuitionFee) > 0 && (
              <tr>
                <td className="py-3 px-2 text-slate-800 font-medium">Tuition Fee</td>
                <td className="py-3 px-2 text-right text-slate-900 font-semibold">{parseFloat(tuitionFee).toLocaleString()}</td>
              </tr>
            )}
            {admissionFee && parseFloat(admissionFee) > 0 && (
              <tr>
                <td className="py-3 px-2 text-slate-800 font-medium">Admission Fee</td>
                <td className="py-3 px-2 text-right text-slate-900 font-semibold">{parseFloat(admissionFee).toLocaleString()}</td>
              </tr>
            )}
            {labFee && parseFloat(labFee) > 0 && (
              <tr>
                <td className="py-3 px-2 text-slate-800 font-medium">Lab Fee</td>
                <td className="py-3 px-2 text-right text-slate-900 font-semibold">{parseFloat(labFee).toLocaleString()}</td>
              </tr>
            )}
            {libraryFee && parseFloat(libraryFee) > 0 && (
              <tr>
                <td className="py-3 px-2 text-slate-800 font-medium">Library Fee</td>
                <td className="py-3 px-2 text-right text-slate-900 font-semibold">{parseFloat(libraryFee).toLocaleString()}</td>
              </tr>
            )}
            {examFee && parseFloat(examFee) > 0 && (
              <tr>
                <td className="py-3 px-2 text-slate-800 font-medium">Exam Fee</td>
                <td className="py-3 px-2 text-right text-slate-900 font-semibold">{parseFloat(examFee).toLocaleString()}</td>
              </tr>
            )}
            {otherFee && parseFloat(otherFee) > 0 && (
              <tr>
                <td className="py-3 px-2 text-slate-800 font-medium">Other Charges</td>
                <td className="py-3 px-2 text-right text-slate-900 font-semibold">{parseFloat(otherFee).toLocaleString()}</td>
              </tr>
            )}
            
            {/* Subtotal */}
            <tr className="border-t-2 border-slate-300">
              <td className="py-3 px-2 text-slate-800 font-bold">Subtotal</td>
              <td className="py-3 px-2 text-right text-slate-900 font-bold">{subtotal.toLocaleString()}</td>
            </tr>
            
            {/* Discount */}
            {discount && parseFloat(discount) > 0 && (
              <tr className="text-green-600">
                <td className="py-3 px-2 font-bold">Discount</td>
                <td className="py-3 px-2 text-right font-bold">- {parseFloat(discount).toLocaleString()}</td>
              </tr>
            )}
            
            {/* Total */}
            <tr className="border-t-2 border-slate-400 bg-slate-50">
              <td className="py-4 px-2 text-lg font-black text-slate-900 uppercase">Total Amount</td>
              <td className="py-4 px-2 text-right text-xl font-black text-blue-600">PKR {total.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment Method & Footer */}
      <div className="px-4 pb-4 space-y-3">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
          <p className="text-xs font-semibold text-blue-700 uppercase mb-1">Payment Method</p>
          <p className="text-base font-bold text-blue-900">{paymentMethod || "Cash/Bank Transfer"}</p>
        </div>

        <div className="flex items-end justify-between pt-3 border-t border-slate-200">
          <div>
            <p className="text-xs text-slate-500 mb-2">Received By:</p>
            <div className="border-b-2 border-slate-400 w-48 pb-1">
              <p className="text-sm font-bold text-slate-900">{receivedBy || "Cashier Name"}</p>
            </div>
            <p className="text-xs text-slate-400 mt-1">Accounts Department</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 mb-2">Authorized Signature</p>
            <div className="w-48 h-16 flex items-end justify-center">
              <p className="text-xs font-bold text-slate-400 italic">Digitally Generated</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-3 space-y-2">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-xs font-semibold text-yellow-800 uppercase mb-1">Important Notes:</p>
            <ul className="text-xs text-yellow-700 space-y-0.5 text-left">
              <li>• This is a computer-generated receipt and does not require a physical signature.</li>
              <li>• Please keep this receipt for your records and future reference.</li>
              <li>• Fees once paid are non-refundable and non-transferable.</li>
              <li>• In case of any discrepancy, please contact the accounts office within 7 days.</li>
              <li>• This receipt is valid only if the payment has been cleared by the bank.</li>
            </ul>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <p className="text-xs font-semibold text-slate-700 mb-1">Contact Information:</p>
            <p className="text-xs text-slate-600">
              Accounts Department: accounts@{getUniversityDomain()}.edu.pk | Phone: +92-21-99261300
            </p>
            <p className="text-xs text-slate-600">
              Office Hours: Monday - Friday, 9:00 AM - 5:00 PM
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-200">
            <p className="text-xs text-slate-400">
              Generated on: {getGeneratedDate()}
            </p>
            <p className="text-xs text-slate-400">
              Receipt ID: {receiptNumber}
            </p>
          </div>
          
          <p className="text-xs text-slate-400 italic">
            This is an official document. Please verify authenticity at verify.{getUniversityDomain()}.edu.pk
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
