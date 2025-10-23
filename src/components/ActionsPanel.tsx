interface ActionsPanelProps {
  onDownload: () => void;
  onPrint: () => void;
  onPDFExport: () => void;
  onBatchGeneration: () => void;
  onDownloadBatchCSV: () => void;
  batchData: any[];
}

export default function ActionsPanel({
  onDownload,
  onPrint,
  onPDFExport,
  onBatchGeneration,
  onDownloadBatchCSV,
  batchData
}: ActionsPanelProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Actions</h3>
        <p className="text-xs text-slate-400 mt-1">Export & generate</p>
      </div>

      <div className="space-y-2.5 flex-1 flex flex-col justify-center">
        <button
          onClick={onDownload}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-2xl hover:bg-blue-700 hover:shadow-md transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PNG
        </button>

        <button
          onClick={onPDFExport}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-2xl hover:bg-purple-700 hover:shadow-md transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export PDF
        </button>

        <button
          onClick={onPrint}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-2xl hover:bg-green-700 hover:shadow-md transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print
        </button>

        <button
          onClick={onBatchGeneration}
          className="w-full bg-orange-600 text-white py-3 px-4 rounded-2xl hover:bg-orange-700 hover:shadow-md transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Batch Generate
        </button>

        {batchData.length > 0 && (
          <button
            onClick={onDownloadBatchCSV}
            className="w-full bg-teal-600 text-white py-3 px-4 rounded-2xl hover:bg-teal-700 hover:shadow-md transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CSV ({batchData.length})
          </button>
        )}
      </div>
    </div>
  );
}
