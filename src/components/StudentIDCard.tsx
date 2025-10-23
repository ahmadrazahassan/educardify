import { forwardRef } from 'react';

interface StudentIDCardProps {
  width: number;
  height: number;
  accentColor: string;
  textColor: string;
  collegeName: string;
  collegeDepartment: string;
  collegeLocation: string;
  academicYear: string;
  logoSrc: string;
  photoSrc: string;
  signatureSrc: string;
  studentID: string;
  gender: string;
  name: string;
  className: string;
  dob: string;
  studentEmail: string;
  phone: string;
  address: string;
  issueDate: string;
  template: string;
  calculateExpiryDate: (date: string) => string;
}

const StudentIDCard = forwardRef<HTMLDivElement, StudentIDCardProps>(
  (
    {
      width,
      height,
      accentColor,
      textColor,
      collegeName,
      collegeDepartment,
      collegeLocation,
      academicYear,
      logoSrc,
      photoSrc,
      signatureSrc,
      studentID,
      gender,
      name,
      className,
      dob,
      studentEmail,
      phone,
      address,
      issueDate,
      template,
      calculateExpiryDate,
    },
    ref
  ) => {
  // Template-specific styling and layout
  const getTemplateStyles = () => {
    switch (template) {
      case 'modern':
        return {
          cardClass: 'relative rounded-2xl shadow-2xl overflow-hidden bg-white/90 backdrop-blur-2xl border-4 border-white',
          headerClass: 'relative px-4 py-2 rounded-t-2xl z-10',
          photoSize: { width: 100, height: 130 },
        };
      case 'compact':
        return {
          cardClass: 'relative rounded-xl shadow-xl overflow-hidden bg-white/95 backdrop-blur-xl border-2 border-slate-200',
          headerClass: 'relative px-3 py-2 rounded-t-xl z-10',
          photoSize: { width: 80, height: 100 },
        };
      default: // classic
        return {
          cardClass: 'relative rounded-3xl shadow-2xl overflow-hidden bg-white/80 backdrop-blur-2xl border-4 border-white',
          headerClass: 'relative px-4 py-3 rounded-t-3xl z-10',
          photoSize: { width: 120, height: 150 },
        };
    }
  };

  const templateStyles = getTemplateStyles();

  return (
    <div className="w-full flex justify-center items-start">
      <div className="relative">
          {/* Subtle Background Glow */}
          <div className="absolute -inset-4 bg-slate-200/50 rounded-3xl blur-2xl opacity-50"></div>

        <div
          ref={ref}
          style={{ width: `${width}px`, height: `${height}px` }}
          className={templateStyles.cardClass}
        >
          {/* Watermark Background - College/University Logo */}
          {logoSrc && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={logoSrc}
                  alt="watermark"
                  className="opacity-[0.06]"
                  style={{
                    width: '65%',
                    height: '65%',
                    objectFit: 'contain',
                    transform: 'rotate(-15deg)',
                    filter: 'grayscale(20%)',
                  }}
                />
              </div>
            </div>
          )}
          
           {/* Minimal Header */}
          <div
            style={{
              backgroundColor: accentColor,
            }}
            className={templateStyles.headerClass}
          >
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-xl p-1.5 shadow-md border border-white"
                  style={{ width: 45, height: 45 }}
                >
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt="logo"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-[8px]">
                      LOGO
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-white text-sm font-bold leading-tight drop-shadow-sm">
                    {collegeName}
                  </div>
                  <div className="text-white/90 text-[10px] font-semibold mt-0.5">
                    {collegeDepartment}
                  </div>
                  <div className="text-white/80 text-[9px] font-medium">
                    {collegeLocation}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="text-white text-xs font-black bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  STUDENT CARD
                </div>
                <div className="text-white/90 text-[9px] font-semibold">{academicYear}</div>
              </div>
            </div>
          </div>

          {/* Minimal Body - Two Column Layout */}
          <div className="p-4 flex gap-4 relative z-10">
            {/* Left: Student Photo */}
            <div className="flex-shrink-0">
              <div
                className="rounded-2xl overflow-hidden shadow-lg border-3"
                style={{
                  width: templateStyles.photoSize.width,
                  height: templateStyles.photoSize.height,
                  borderColor: accentColor,
                }}
              >
                {photoSrc ? (
                  <img
                    src={photoSrc}
                    alt="student"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-semibold">
                    Photo
                  </div>
                )}
              </div>

              {/* ID and Gender Badge - Minimal */}
              <div className="mt-2.5 space-y-2">
                <div
                  className="text-center py-2 px-3 rounded-xl text-white shadow-lg border border-white/30"
                  style={{
                    backgroundColor: accentColor,
                  }}
                >
                  <div className="text-[8px] font-bold uppercase tracking-wide text-white/80">Student ID</div>
                  <div className="text-xs font-black mt-0.5">{studentID}</div>
                </div>
                <div className="bg-blue-50 border-2 border-blue-400 px-2.5 py-1.5 rounded-xl text-center shadow-sm">
                  <div className="text-[9px] text-blue-700 font-black uppercase tracking-wide">Gender</div>
                  <div className="text-xs font-black text-blue-900 mt-0.5">{gender}</div>
                </div>
              </div>
            </div>

            {/* Right: Student Details - Minimal */}
            <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  {/* Name - Compact */}
                  <div className="bg-white/60 backdrop-blur-sm p-2.5 rounded-xl border-2 border-slate-300 shadow-sm">
                    <div
                      className="text-[9px] font-black uppercase tracking-wide"
                      style={{ color: accentColor }}
                    >
                      Student Name
                    </div>
                    <div className="text-base font-black mt-0.5 leading-tight" style={{ color: textColor }}>
                      {name}
                    </div>
                  </div>

                  {/* Minimal Grid for Details */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/50 backdrop-blur-sm p-2 rounded-xl border-2 border-slate-300 shadow-sm">
                      <div className="text-[8px] font-black text-slate-700 uppercase tracking-wide">Class</div>
                      <div className="text-xs font-black mt-0.5" style={{ color: textColor }}>
                        {className}
                      </div>
                    </div>

                    <div className="bg-white/50 backdrop-blur-sm p-2 rounded-xl border-2 border-slate-300 shadow-sm">
                      <div className="text-[8px] font-black text-slate-700 uppercase tracking-wide">Date of Birth</div>
                      <div className="text-xs font-black mt-0.5" style={{ color: textColor }}>
                        {dob}
                      </div>
                    </div>

                    <div className="col-span-2 bg-blue-50 backdrop-blur-sm p-2 rounded-xl border-2 border-blue-400 shadow-sm">
                      <div className="text-[8px] font-black text-blue-700 uppercase tracking-wide">Email</div>
                      <div className="text-[10px] font-bold mt-0.5 break-all text-blue-900">
                        {studentEmail}
                      </div>
                    </div>

                    <div className="col-span-2 bg-green-50 backdrop-blur-sm p-2 rounded-xl border-2 border-green-400 shadow-sm">
                      <div className="text-[8px] font-black text-green-700 uppercase tracking-wide">Phone</div>
                      <div className="text-xs font-black mt-0.5 text-green-900">{phone}</div>
                    </div>

                    <div className="col-span-2 bg-orange-50 backdrop-blur-sm p-2 rounded-xl border-2 border-orange-400 shadow-sm">
                      <div className="text-[8px] font-black text-orange-700 uppercase tracking-wide">Address</div>
                      <div className="text-xs font-black mt-0.5 text-orange-900">{address}</div>
                    </div>
                  </div>
                </div>

              {/* Minimal Bottom Info Bar */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t-2 border-slate-300">
                <div className="flex gap-2">
                  <div className="bg-purple-50 backdrop-blur-sm px-3 py-1.5 rounded-xl border-2 border-purple-400 shadow-sm">
                    <div className="text-[7px] text-purple-700 font-black tracking-wide uppercase">Card Issue Date</div>
                    <div className="text-[10px] font-black mt-0.5 text-purple-900">{issueDate}</div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm px-3 py-1.5 rounded-xl border-2 border-red-400 shadow-sm">
                    <div className="text-[7px] text-red-700 font-black tracking-wide uppercase">Card Expiry Date</div>
                    <div className="text-[10px] font-black mt-0.5 text-red-900">
                      {calculateExpiryDate(issueDate)}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  {signatureSrc ? (
                    <div className="flex flex-col items-center bg-white/70 backdrop-blur-sm p-2 rounded-xl border-2 border-slate-300 shadow-sm">
                      <img
                        src={signatureSrc}
                        alt="signature"
                        className="h-8 w-auto object-contain"
                        style={{ maxWidth: '70px' }}
                      />
                      <div className="text-[8px] text-slate-700 mt-0.5 font-black uppercase tracking-wide">
                        Principal
                      </div>
                    </div>
                  ) : (
                    <div className="text-[9px] text-slate-500 font-bold bg-slate-100 px-3 py-1.5 rounded-xl border-2 border-slate-300">
                      No signature
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Subtle Minimal Decorative Elements */}
          <div
            className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full opacity-10"
            style={{ backgroundColor: accentColor }}
          />
          <div
            className="absolute bottom-2 right-5 w-1 h-1 rounded-full opacity-10"
            style={{ backgroundColor: accentColor }}
          />
          </div>
        </div>
      </div>
    );
  }
);

StudentIDCard.displayName = 'StudentIDCard';

export default StudentIDCard;

