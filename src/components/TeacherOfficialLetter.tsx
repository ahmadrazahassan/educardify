import { forwardRef } from 'react';

interface TeacherOfficialLetterProps {
  letterType: 'employment' | 'verification' | 'appointment' | 'reference';
  institutionName: string;
  institutionAddress: string;
  institutionCity: string;
  institutionPhone: string;
  institutionEmail: string;
  institutionWebsite: string;
  logoSrc: string;
  teacherName: string;
  teacherTitle: string;
  teacherDepartment: string;
  teacherStartDate: string;
  teacherSalary?: string;
  recipientName?: string;
  recipientTitle?: string;
  recipientOrganization?: string;
  signatureSrc: string;
  signatoryName: string;
  signatoryTitle: string;
  letterDate: string;
  referenceNumber?: string;
  accentColor?: string;
}

const TeacherOfficialLetter = forwardRef<HTMLDivElement, TeacherOfficialLetterProps>(
  (props, ref) => {
    const {
      letterType,
      institutionName,
      institutionAddress,
      institutionCity,
      institutionPhone,
      institutionEmail,
      institutionWebsite,
      logoSrc,
      teacherName,
      teacherTitle,
      teacherDepartment,
      teacherStartDate,
      teacherSalary,
      recipientName,
      recipientTitle,
      recipientOrganization,
      signatureSrc,
      signatoryName,
      signatoryTitle,
      letterDate,
      referenceNumber,
      accentColor = '#1e40af',
    } = props;

    // Letter content based on type
    const getLetterContent = () => {
      switch (letterType) {
        case 'employment':
          return (
            <>
              <p className="mb-4 text-slate-700 leading-relaxed">
                Dear {teacherName},
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                We are pleased to offer you the position of <strong>{teacherTitle}</strong> in the {teacherDepartment} at {institutionName}, 
                effective <strong>{teacherStartDate}</strong>.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                This appointment is subject to the terms and conditions outlined in our faculty handbook and institutional policies. 
                Your primary responsibilities will include teaching, research, and service to the institution and academic community.
              </p>
              {teacherSalary && (
                <p className="mb-4 text-slate-700 leading-relaxed">
                  Your annual salary will be <strong>${teacherSalary}</strong>, paid in accordance with the institution's payroll schedule. 
                  This compensation package includes benefits as outlined in the attached benefits summary.
                </p>
              )}
              <p className="mb-4 text-slate-700 leading-relaxed">
                We believe your expertise and dedication will significantly contribute to the continued excellence of our {teacherDepartment}. 
                We look forward to your valuable contributions to our academic community.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                Please sign and return the enclosed copy of this letter by {new Date(new Date(letterDate).getTime() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} to confirm your acceptance of this position.
              </p>
            </>
          );

        case 'verification':
          return (
            <>
              <p className="mb-4 text-slate-700 leading-relaxed">
                To Whom It May Concern:
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                This letter is to verify that <strong>{teacherName}</strong> is currently employed as <strong>{teacherTitle}</strong> in 
                the {teacherDepartment} at {institutionName}.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                {teacherName} has been with our institution since <strong>{teacherStartDate}</strong> and maintains an active faculty 
                appointment. Their employment status is in good standing, and they are authorized to represent our institution in their 
                professional capacity.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                This verification is being provided at the request of the employee for official purposes. Should you require any additional 
                information or documentation, please do not hesitate to contact our Human Resources Department.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                This letter is valid for 90 days from the date of issue.
              </p>
            </>
          );

        case 'appointment':
          return (
            <>
              <p className="mb-4 text-slate-700 leading-relaxed">
                Dear {teacherName},
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                On behalf of {institutionName}, I am delighted to confirm your appointment as <strong>{teacherTitle}</strong> in 
                the {teacherDepartment}.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                Your appointment is effective <strong>{teacherStartDate}</strong> and represents our confidence in your academic qualifications, 
                teaching abilities, and potential for significant contributions to our institution's mission of excellence in education and research.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                As a faculty member, you will be expected to maintain the highest standards of professional conduct, engage actively in 
                departmental activities, pursue scholarly research, and provide quality instruction to our students.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                Your appointment is governed by the policies and procedures outlined in the Faculty Handbook, which will be provided to you 
                during orientation. We are committed to supporting your professional development and academic success.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                We welcome you to our academic community and look forward to your many contributions.
              </p>
            </>
          );

        case 'reference':
          return (
            <>
              <p className="mb-4 text-slate-700 leading-relaxed">
                {recipientName ? `Dear ${recipientName}:` : 'To Whom It May Concern:'}
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                It is my pleasure to provide this letter of recommendation for <strong>{teacherName}</strong>, who has served as 
                <strong> {teacherTitle}</strong> in our {teacherDepartment} since {teacherStartDate}.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                During their tenure at {institutionName}, {teacherName} has consistently demonstrated exceptional teaching abilities, 
                scholarly achievement, and dedication to student success. Their contributions to our academic programs have been invaluable, 
                and they have earned the respect of colleagues and students alike.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                {teacherName} possesses strong pedagogical skills, maintains current knowledge in their field, and shows genuine commitment 
                to fostering student learning and development. Their professional conduct and collaborative approach make them an outstanding 
                member of any academic institution.
              </p>
              <p className="mb-4 text-slate-700 leading-relaxed">
                I highly recommend {teacherName} without reservation and am confident they will be an excellent addition to your institution. 
                Please feel free to contact me if you require any additional information.
              </p>
            </>
          );

        default:
          return null;
      }
    };

    const getLetterTitle = () => {
      switch (letterType) {
        case 'employment':
          return 'EMPLOYMENT OFFER LETTER';
        case 'verification':
          return 'EMPLOYMENT VERIFICATION LETTER';
        case 'appointment':
          return 'LETTER OF APPOINTMENT';
        case 'reference':
          return 'LETTER OF RECOMMENDATION';
        default:
          return 'OFFICIAL LETTER';
      }
    };

    return (
      <div className="w-full flex justify-center items-start bg-slate-50 py-8">
        <div className="relative">
          {/* Premium Paper shadow */}
          <div className="absolute -inset-4 bg-gradient-to-br from-slate-400/25 via-slate-300/20 to-slate-400/25 rounded-lg blur-3xl"></div>

          <div
            ref={ref}
            className="relative bg-white shadow-2xl"
            style={{
              width: '8.5in',
              minHeight: '11in',
              padding: '1in 1.25in 1in 1.25in',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
            }}
          >
            {/* Premium Paper Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05' /%3E%3C/svg%3E")`,
                 }}></div>

            {/* Security Border (barely visible) */}
            <div className="absolute inset-0 border-[3px] pointer-events-none opacity-[0.03]"
                 style={{
                   borderImage: `repeating-linear-gradient(45deg, ${accentColor || '#1e40af'}, ${accentColor || '#1e40af'} 10px, transparent 10px, transparent 20px) 1`,
                 }}></div>
            {/* Premium Letterhead */}
            <div className="relative pb-6 mb-8 border-b-[3px] border-slate-800">
              {/* Letterhead Background Accent */}
              <div className="absolute -top-6 -left-6 -right-6 h-24 opacity-[0.02]"
                   style={{
                     background: `linear-gradient(135deg, ${accentColor || '#1e40af'}40 0%, transparent 100%)`,
                   }}></div>

              <div className="flex items-start justify-between relative">
                {/* Logo with Official Seal Effect - BIGGER & MORE PROMINENT */}
                <div className="flex-shrink-0 relative">
                  {logoSrc ? (
                    <div className="relative">
                      {/* Enhanced Seal background circle */}
                      <div className="absolute -inset-4 rounded-full opacity-[0.08]"
                           style={{
                             background: `radial-gradient(circle, ${accentColor || '#1e40af'}50 0%, transparent 70%)`,
                             boxShadow: `0 0 40px ${accentColor || '#1e40af'}20`,
                           }}></div>
                      <img
                        src={logoSrc}
                        alt="Institution Logo"
                        className="h-36 w-auto object-contain relative z-10"
                        style={{
                          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.12)) drop-shadow(0 2px 4px rgba(0,0,0,0.08))',
                        }}
                      />
                    </div>
                  ) : (
                    <div className="h-36 w-36 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center rounded-full border-[5px] border-slate-300 shadow-xl relative">
                      {/* Official seal rings */}
                      <div className="absolute inset-3 border-[3px] border-slate-300 rounded-full opacity-50"></div>
                      <div className="absolute inset-6 border-2 border-slate-300 rounded-full opacity-30"></div>
                      <div className="text-center relative z-10">
                        <span className="text-slate-600 font-black text-base block">OFFICIAL</span>
                        <span className="text-slate-500 font-bold text-xs block mt-1">SEAL</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Institution Info - Enhanced */}
                <div className="text-right flex-1 ml-10">
                  <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-2 leading-tight"
                      style={{
                        textShadow: '0 2px 4px rgba(0,0,0,0.08)',
                        letterSpacing: '0.75px',
                      }}>
                    {institutionName}
                  </h1>
                  
                  {/* Accreditation Line */}
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3 italic">
                    Established • Accredited • Excellence in Education
                  </div>

                  <div className="text-sm text-slate-600 space-y-0.5 font-medium">
                    <p className="font-semibold">{institutionAddress}</p>
                    <p className="font-semibold">{institutionCity}</p>
                    
                    <div className="pt-2 mt-2 border-t border-slate-300 space-y-0.5">
                      <p>
                        <span className="font-bold text-slate-700">Tel:</span>{' '}
                        <span className="font-mono text-slate-800">{institutionPhone}</span>
                      </p>
                      <p>
                        <span className="font-bold text-slate-700">Email:</span>{' '}
                        <span className="font-mono text-slate-800">{institutionEmail}</span>
                      </p>
                      <p>
                        <span className="font-bold text-slate-700">Web:</span>{' '}
                        <span className="font-mono text-slate-800">{institutionWebsite}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Institutional Motto/Tagline */}
              <div className="mt-4 pt-4 border-t border-slate-200 text-center">
                <p className="text-[11px] font-serif italic text-slate-500">
                  "Excellence • Integrity • Innovation"
                </p>
              </div>
            </div>

            {/* Document Information Bar */}
            <div className="mb-6 p-4 bg-slate-50 border-l-4 rounded-r-lg"
                 style={{ borderLeftColor: accentColor || '#1e40af' }}>
              <div className="flex items-center justify-between text-sm">
                <div>
                  {referenceNumber && (
                    <p className="text-slate-700">
                      <span className="font-black uppercase tracking-wide text-[11px]">Reference No:</span>{' '}
                      <span className="font-mono font-bold text-slate-900">{referenceNumber}</span>
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                    Document Date
                  </p>
                  <p className="font-bold text-slate-900">
                    {new Date(letterDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              
              {/* Confidentiality Notice */}
              <div className="mt-3 pt-3 border-t border-slate-200">
                <p className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">
                  ⚠️ Confidential • Official Document • For Authorized Use Only
                </p>
              </div>
            </div>

            {/* Recipient (if applicable) */}
            {recipientName && letterType !== 'verification' && (
              <div className="mb-8 text-sm text-slate-700">
                <p>{recipientName}</p>
                {recipientTitle && <p>{recipientTitle}</p>}
                {recipientOrganization && <p>{recipientOrganization}</p>}
              </div>
            )}

            {/* Letter Title - Enhanced */}
            <div className="mb-6 pb-3 border-b-2 relative"
                 style={{ borderColor: accentColor || '#1e40af' }}>
              <div className="absolute left-0 top-0 w-1 h-full opacity-60"
                   style={{ backgroundColor: accentColor || '#1e40af' }}></div>
              <h2 className="text-xl font-black uppercase tracking-wider pl-4 flex items-center gap-3"
                  style={{
                    color: accentColor || '#1e40af',
                    textShadow: '0 1px 2px rgba(0,0,0,0.08)',
                  }}>
                <span className="inline-block w-2 h-2 rounded-full"
                      style={{ backgroundColor: accentColor || '#1e40af' }}></span>
                {getLetterTitle()}
              </h2>
            </div>

            {/* Letter Body */}
            <div className="mb-12 text-base" style={{ fontFamily: 'Georgia, serif' }}>
              {getLetterContent()}
              <p className="mt-8 text-slate-700 leading-relaxed">Sincerely,</p>
            </div>

            {/* Professional Signature Section */}
            <div className="mb-24 mt-12">
              <div className="flex items-end justify-between mb-6">
                {/* Signature */}
                <div>
                  {signatureSrc ? (
                    <img
                      src={signatureSrc}
                      alt="Signature"
                      className="h-20 w-auto object-contain mb-2"
                      style={{ filter: 'contrast(1.1)' }}
                    />
                  ) : (
                    <div className="h-20 mb-2 flex items-center">
                      <span className="text-slate-300 font-serif italic text-lg">
                        [Digital Signature]
                      </span>
                    </div>
                  )}
                  <div className="border-t-[3px] border-slate-800 pt-2 min-w-[280px]">
                    <p className="font-black text-slate-900 text-base">{signatoryName}</p>
                    <p className="text-sm text-slate-700 font-bold mt-1">{signatoryTitle}</p>
                    <p className="text-sm text-slate-600 font-semibold">{institutionName}</p>
                  </div>
                </div>

                {/* Official Seal/Stamp Area */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full border-[3px] border-dashed flex items-center justify-center relative"
                       style={{ borderColor: accentColor || '#1e40af', opacity: 0.15 }}>
                    <div className="absolute inset-0 rounded-full opacity-5"
                         style={{ backgroundColor: accentColor || '#1e40af' }}></div>
                    <div className="text-center relative z-10">
                      <p className="text-[10px] font-black uppercase tracking-wider"
                         style={{ color: accentColor || '#1e40af', opacity: 0.4 }}>
                        Official
                      </p>
                      <p className="text-[8px] font-bold uppercase"
                         style={{ color: accentColor || '#1e40af', opacity: 0.4 }}>
                        Seal
                      </p>
                    </div>
                  </div>
                  <p className="text-[9px] text-slate-400 font-semibold mt-2 uppercase tracking-wider">
                    Authenticated
                  </p>
                </div>
              </div>

              {/* Verification Code (inline, compact) */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-[8px] text-slate-500 font-mono">
                  <span className="font-bold">Verification Code:</span>{' '}
                  {referenceNumber?.replace('HR-', '').toUpperCase()}-{new Date(letterDate).getFullYear()}-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                </p>
                <p className="text-[7px] text-slate-400 mt-0.5 italic">
                  This document can be verified by contacting the Office of Human Resources
                </p>
              </div>
            </div>

            {/* Premium Footer - Professional Layout */}
            <div className="absolute bottom-6 left-0 right-0 px-16">
              <div className="border-t-2 border-slate-800 pt-4 pb-2">
                {/* Footer Top Row - Two Columns */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-left w-1/2">
                    <p className="text-[9px] font-black text-slate-800 uppercase tracking-wider mb-1">
                      Official Document
                    </p>
                    <p className="text-[8px] text-slate-600 font-semibold">
                      Issued by Office of Human Resources
                    </p>
                  </div>
                  <div className="text-right w-1/2">
                    <p className="text-[9px] font-black text-slate-800 uppercase tracking-wider mb-1">
                      Page 1 of 1
                    </p>
                    <p className="text-[8px] text-slate-600 font-semibold">
                      Document ID: {referenceNumber}
                    </p>
                  </div>
                </div>

                {/* Footer Bottom Row - Institution Info */}
                <div className="text-center border-t border-slate-300 pt-3">
                  <p className="text-[11px] text-slate-800 font-bold mb-1.5">
                    {institutionName}
                  </p>
                  <p className="text-[9px] text-slate-600 font-semibold">
                    {institutionAddress} • {institutionCity}
                  </p>
                  <p className="text-[9px] text-slate-600 font-semibold mt-0.5">
                    Tel: {institutionPhone} • Email: {institutionEmail} • Web: {institutionWebsite}
                  </p>
                  
                  {/* Legal Notice */}
                  <div className="mt-2.5 pt-2 border-t border-slate-300">
                    <p className="text-[7px] text-slate-500 font-semibold uppercase tracking-wider leading-relaxed">
                      © {new Date().getFullYear()} {institutionName}. All Rights Reserved. • Confidential Information • Unauthorized Distribution Prohibited
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Watermark - Multiple layers like real documents */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              {/* Main watermark */}
              <div className="text-9xl font-black text-slate-900 rotate-[-45deg] uppercase opacity-[0.02]">
                Official
              </div>
              
              {/* Secondary watermark pattern */}
              <div className="absolute inset-0 opacity-[0.01]"
                   style={{
                     backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, ${accentColor || '#1e40af'} 50px, ${accentColor || '#1e40af'} 51px)`,
                   }}></div>
            </div>

            {/* Micro-text Security (barely visible but authentic) */}
            <div className="absolute top-32 right-12 rotate-90 text-[6px] text-slate-300 font-mono opacity-30 pointer-events-none">
              {institutionName.toUpperCase()} • AUTHENTIC • {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

TeacherOfficialLetter.displayName = 'TeacherOfficialLetter';

export default TeacherOfficialLetter;

