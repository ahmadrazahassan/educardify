import { forwardRef, useEffect, useRef } from 'react';

interface TeacherIDCardProps {
  width: number;
  height: number;
  accentColor: string;
  textColor: string;
  institutionName: string;
  department: string;
  location: string;
  academicYear: string;
  logoSrc: string;
  photoSrc: string;
  signatureSrc: string;
  teacherID: string;
  name: string;
  designation: string;
  qualification: string;
  email: string;
  phone: string;
  dateOfJoining: string;
  issueDate: string;
  bloodGroup: string;
  emergencyContact: string;
  template: string;
  calculateExpiryDate: (date: string) => string;
}

const TeacherIDCard = forwardRef<HTMLDivElement, TeacherIDCardProps>(
  (
    {
      width,
      height,
      accentColor,
      institutionName,
      department,
      academicYear,
      logoSrc,
      photoSrc,
      signatureSrc,
      teacherID,
      name,
      designation,
      email,
      phone,
      issueDate,
      template,
      calculateExpiryDate,
    },
    ref
  ) => {
  const barcodeRef = useRef<HTMLCanvasElement>(null);

  // Generate professional Code 39 style barcode
  useEffect(() => {
    if (barcodeRef.current && teacherID) {
      const canvas = barcodeRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Clear canvas with white background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Generate realistic barcode pattern (Code 39 style)
        ctx.fillStyle = '#000000';
        const idString = teacherID.replace(/[^0-9A-Z]/g, '').padEnd(8, '0');
        const totalBars = idString.length * 13; // Code 39 uses 13 bars per character
        const barWidth = (canvas.width - 20) / totalBars; // Leave margins
        const startX = 10;
        
        // Start pattern
        ctx.fillRect(startX, 5, barWidth * 2, canvas.height - 10);
        ctx.fillRect(startX + barWidth * 3, 5, barWidth, canvas.height - 10);
        ctx.fillRect(startX + barWidth * 5, 5, barWidth * 2, canvas.height - 10);
        
        // Data bars
        let x = startX + barWidth * 8;
        for (let i = 0; i < idString.length; i++) {
          const charCode = idString.charCodeAt(i);
          const pattern = charCode % 3;
          
          for (let j = 0; j < 9; j++) {
            if ((pattern === 0 && j % 2 === 0) || 
                (pattern === 1 && j % 3 === 0) || 
                (pattern === 2 && j % 2 === 1)) {
              ctx.fillRect(x, 5, barWidth * 1.5, canvas.height - 10);
            }
            x += barWidth * 1.5;
          }
          x += barWidth; // Gap between characters
        }
        
        // End pattern
        ctx.fillRect(x, 5, barWidth * 2, canvas.height - 10);
        ctx.fillRect(x + barWidth * 3, 5, barWidth, canvas.height - 10);
        ctx.fillRect(x + barWidth * 5, 5, barWidth * 2, canvas.height - 10);
      }
    }
  }, [teacherID]);

  // USA-style template sizing
  const getTemplateStyles = () => {
    switch (template) {
      case 'modern':
        return {
          cardClass: 'relative rounded-lg shadow-2xl overflow-hidden bg-white border border-slate-300',
          photoSize: { width: 160, height: 200 },
        };
      case 'compact':
        return {
          cardClass: 'relative rounded-md shadow-xl overflow-hidden bg-white border border-slate-200',
          photoSize: { width: 130, height: 165 },
        };
      default: // classic
        return {
          cardClass: 'relative rounded-xl shadow-2xl overflow-hidden bg-white border-2 border-slate-300',
          photoSize: { width: 150, height: 190 },
        };
    }
  };

  const templateStyles = getTemplateStyles();

  return (
    <div className="w-full flex justify-center items-start">
      <div className="relative">
        {/* Professional Card Shadow */}
        <div className="absolute -inset-3 bg-gradient-to-br from-slate-400/20 via-slate-300/20 to-slate-400/20 rounded-xl blur-2xl"></div>

        <div
          ref={ref}
          style={{ 
            width: `${width}px`, 
            height: `${height}px`,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
          }}
          className={`${templateStyles.cardClass} relative`}
        >
          {/* Security Watermark Pattern */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px),
                               repeating-linear-gradient(-45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
              color: accentColor,
            }}></div>
          </div>

          {/* Holographic Security Strip Effect */}
          <div className="absolute top-0 right-0 w-1 h-full pointer-events-none opacity-40"
               style={{
                 background: `linear-gradient(180deg, 
                   #ff0080 0%, #ff0080 10%,
                   #00ff80 10%, #00ff80 20%,
                   #0080ff 20%, #0080ff 30%,
                   #ff0080 30%, #ff0080 40%,
                   #00ff80 40%, #00ff80 50%,
                   #0080ff 50%, #0080ff 60%,
                   #ff0080 60%, #ff0080 70%,
                   #00ff80 70%, #00ff80 80%,
                   #0080ff 80%, #0080ff 90%,
                   #ff0080 90%, #ff0080 100%)`,
               }}></div>

          {/* USA-Style Professional Header Stripe */}
          <div
            style={{
              background: `linear-gradient(90deg, ${accentColor} 0%, ${accentColor}ee 50%, ${accentColor} 100%)`,
              height: '14px',
              boxShadow: `0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`,
            }}
            className="w-full relative"
          >
            {/* Micro-text security feature */}
            <div className="absolute inset-0 flex items-center justify-end pr-3 opacity-60">
              <span className="text-[4px] text-white font-bold tracking-widest uppercase">
                OFFICIAL • AUTHENTIC • {new Date().getFullYear()}
              </span>
            </div>
          </div>

          {/* Main Content Area - Horizontal Layout */}
          <div className="flex h-full relative">
            {/* Left: Photo Section */}
            <div className="flex-shrink-0 p-5 flex flex-col items-center justify-start border-r-2 border-slate-200 relative"
                 style={{
                   background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                 }}>
              
              {/* Security Guilloche Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1px),
                                 radial-gradient(circle at 80% 50%, currentColor 1px, transparent 1px)`,
                backgroundSize: '10px 10px',
                color: accentColor,
              }}></div>

              {/* Institution Logo - Professional Frame */}
              {logoSrc && (
                <div className="mb-3 p-2.5 bg-white rounded-lg shadow-md border-2 border-slate-200 relative"
                     style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)' }}>
                  <img
                    src={logoSrc}
                    alt="logo"
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              )}

              {/* Teacher Photo - Professional Frame with Security Features */}
              <div className="relative">
                {/* Photo security border gradient */}
                <div className="absolute -inset-[3px] rounded-lg opacity-30 blur-sm"
                     style={{
                       background: `linear-gradient(135deg, ${accentColor}40 0%, ${accentColor}20 50%, ${accentColor}40 100%)`,
                     }}></div>
                
                <div
                  className="rounded-lg overflow-hidden relative"
                  style={{
                    width: templateStyles.photoSize.width,
                    height: templateStyles.photoSize.height,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 0 0 4px white, 0 0 0 5px rgba(0,0,0,0.1)',
                  }}
                >
                  {photoSrc ? (
                    <>
                      <img
                        src={photoSrc}
                        alt="teacher"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      {/* Photo overlay security pattern */}
                      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                           style={{
                             background: `repeating-linear-gradient(45deg, ${accentColor}, ${accentColor} 2px, transparent 2px, transparent 4px)`,
                           }}></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 text-sm font-semibold">
                      Photo
                    </div>
                  )}
                </div>
              </div>

              {/* Professional Barcode with Security Frame */}
              <div className="mt-4 bg-white p-2.5 rounded-md shadow-md border-2 border-slate-200"
                   style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                <canvas
                  ref={barcodeRef}
                  width="140"
                  height="45"
                  className="w-full"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div className="text-center text-[9px] font-black text-slate-800 mt-1.5 tracking-wider">
                  {teacherID}
                </div>
              </div>
            </div>

            {/* Right: Information Section */}
            <div className="flex-1 p-6 flex flex-col justify-between relative bg-white">
              
              {/* Subtle background texture */}
              <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   }}></div>

              {/* Header Info */}
              <div className="relative">
                {/* Institution Name with Professional Styling */}
                <div className="mb-4 pb-3 border-b-2 border-slate-200 relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-0.5 opacity-40"
                       style={{ background: `linear-gradient(180deg, ${accentColor}, transparent)` }}></div>
                  
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-tight"
                      style={{ 
                        textShadow: '0 1px 2px rgba(0,0,0,0.05)',
                        letterSpacing: '0.5px',
                      }}>
                    {institutionName}
                  </h2>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    {department}
                  </p>
                </div>

                {/* Professional Faculty Badge */}
                <div className="inline-block mb-4">
                  <div
                    className="px-4 py-1.5 rounded-md text-white text-xs font-black uppercase tracking-wide relative overflow-hidden"
                    style={{ 
                      backgroundColor: accentColor,
                      boxShadow: `0 2px 6px ${accentColor}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    }}
                  >
                    <div className="absolute inset-0 opacity-10"
                         style={{
                           background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, white 2px, white 4px)',
                         }}></div>
                    <span className="relative">FACULTY IDENTIFICATION</span>
                  </div>
                </div>

                {/* Teacher Name - Prominent with Professional Styling */}
                <div className="mb-4 relative">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Name
                  </div>
                  <div className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-tight relative"
                       style={{ 
                         textShadow: '0 1px 3px rgba(0,0,0,0.08)',
                         fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                       }}>
                    {name}
                  </div>
                  {/* Subtle underline accent */}
                  <div className="absolute -bottom-1 left-0 h-0.5 w-16 rounded-full opacity-60"
                       style={{ backgroundColor: accentColor }}></div>
                </div>

                {/* Information Grid */}
                <div className="space-y-2.5">
                  {/* Department/Subject */}
                  <div className="flex items-start">
                    <div className="w-32 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Title/Position:
                    </div>
                    <div className="flex-1 text-sm font-bold text-slate-900">
                      {designation}
                    </div>
                  </div>

                  {/* Department */}
                  <div className="flex items-start">
                    <div className="w-32 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Department:
                    </div>
                    <div className="flex-1 text-sm font-bold text-slate-900">
                      {department}
                    </div>
                  </div>

                  {/* Employee ID */}
                  <div className="flex items-start">
                    <div className="w-32 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Employee ID:
                    </div>
                    <div className="flex-1 text-sm font-black text-slate-900 font-mono">
                      {teacherID}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-32 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Email:
                    </div>
                    <div className="flex-1 text-xs font-semibold text-slate-700 break-all">
                      {email}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-32 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Phone:
                    </div>
                    <div className="flex-1 text-sm font-bold text-slate-900">
                      {phone}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Dates and Signature */}
              <div className="mt-6 pt-4 border-t-2 border-slate-200">
                <div className="flex items-start justify-between gap-6">
                  {/* Dates */}
                  <div className="space-y-2.5">
                    <div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                        Issue Date
                      </div>
                      <div className="text-sm font-black text-slate-900">
                        {issueDate}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                        Expiration Date
                      </div>
                      <div className="text-sm font-black text-slate-900">
                        {calculateExpiryDate(issueDate)}
                      </div>
                    </div>
                    <div className="text-[9px] font-semibold text-slate-600 mt-3">
                      Academic Year: {academicYear}
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="flex flex-col items-center justify-start">
                    {signatureSrc ? (
                      <>
                        <img
                          src={signatureSrc}
                          alt="signature"
                          className="h-12 w-auto object-contain mb-2"
                          style={{ maxWidth: '120px' }}
                        />
                        <div className="border-t-2 border-slate-400 pt-1.5 px-4">
                          <div className="text-[9px] font-bold text-slate-600 uppercase tracking-wide text-center whitespace-nowrap">
                            Authorized Signature
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="h-12 flex items-center justify-center mb-2">
                        <div className="text-[10px] text-slate-400 font-semibold italic">
                          [Signature]
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Professional Security Badge - Valid ID */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t-2 border-slate-200">
                  {/* Security micro-text */}
                  <div className="text-[6px] text-slate-400 font-bold uppercase tracking-widest opacity-60">
                    Official Document • Do Not Copy
                  </div>
                  
                  {/* Valid ID Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md relative overflow-hidden"
                       style={{
                         background: `linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)`,
                         boxShadow: '0 2px 4px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                         border: '1.5px solid #cbd5e1',
                       }}>
                    <div className="absolute inset-0 opacity-5"
                         style={{
                           background: `repeating-linear-gradient(45deg, ${accentColor}, ${accentColor} 1px, transparent 1px, transparent 3px)`,
                         }}></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 relative" fill="currentColor" viewBox="0 0 24 24"
                         style={{ color: accentColor }}>
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-[9px] font-black uppercase tracking-wide relative"
                          style={{ color: accentColor }}>
                      Valid ID
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
);

TeacherIDCard.displayName = 'TeacherIDCard';

export default TeacherIDCard;

