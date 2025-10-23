interface ImageUploadFormProps {
  onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSignatureUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageUploadForm({
  onLogoUpload,
  onPhotoUpload,
  onSignatureUpload,
}: ImageUploadFormProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Upload Images</h3>
        <p className="text-xs text-slate-400 mt-1">Add photos and logos</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
            College Logo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={onLogoUpload}
            className="w-full text-sm text-slate-600 file:mr-3 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer file:shadow-sm transition-all cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
            Student Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={onPhotoUpload}
            className="w-full text-sm text-slate-600 file:mr-3 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-medium file:bg-purple-600 file:text-white hover:file:bg-purple-700 file:cursor-pointer file:shadow-sm transition-all cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
            Signature
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={onSignatureUpload}
            className="w-full text-sm text-slate-600 file:mr-3 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-medium file:bg-pink-600 file:text-white hover:file:bg-pink-700 file:cursor-pointer file:shadow-sm transition-all cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
        <p className="text-xs text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-700">Tip:</span> Use square photos (1:1 ratio) and high-resolution logos for best results.
        </p>
      </div>
    </div>
  );
}
