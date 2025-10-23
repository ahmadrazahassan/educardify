interface DesignControlsProps {
  designTheme: string;
  accentColor: string;
  textColor: string;
  cardWidth: number;
  cardHeight: number;
  cardTemplate: string;
  onThemeChange: (theme: "modern" | "professional" | "elegant" | "corporate" | "classic") => void;
  onAccentColorChange: (color: string) => void;
  onTextColorChange: (color: string) => void;
  onCardWidthChange: (width: number) => void;
  onCardHeightChange: (height: number) => void;
  onTemplateChange: (template: string) => void;
}

export default function DesignControls({
  designTheme,
  accentColor,
  textColor,
  cardWidth,
  cardHeight,
  cardTemplate,
  onThemeChange,
  onAccentColorChange,
  onTextColorChange,
  onCardWidthChange,
  onCardHeightChange,
  onTemplateChange,
}: DesignControlsProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Design Controls</h3>
        <p className="text-xs text-slate-400 mt-1">Customize appearance</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Template Selection */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider">
            Template
          </label>
          <div className="space-y-1.5">
            <button
              onClick={() => onTemplateChange("classic")}
              className={`w-full px-3 py-2 rounded-2xl text-xs font-medium transition-all duration-200 ${
                cardTemplate === "classic"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Classic
            </button>
            <button
              onClick={() => onTemplateChange("modern")}
              className={`w-full px-3 py-2 rounded-2xl text-xs font-medium transition-all duration-200 ${
                cardTemplate === "modern"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Modern
            </button>
            <button
              onClick={() => onTemplateChange("compact")}
              className={`w-full px-3 py-2 rounded-2xl text-xs font-medium transition-all duration-200 ${
                cardTemplate === "compact"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Compact
            </button>
          </div>
        </div>

        {/* Theme Selection */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider">
            Theme
          </label>
          <div className="space-y-1.5">
            <button
              onClick={() => onThemeChange("modern")}
              className={`w-full px-3 py-2 rounded-2xl text-xs font-medium transition-all duration-200 ${
                designTheme === "modern"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Modern
            </button>
            <button
              onClick={() => onThemeChange("professional")}
              className={`w-full px-3 py-2 rounded-2xl text-xs font-medium transition-all duration-200 ${
                designTheme === "professional"
                  ? "bg-blue-700 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => onThemeChange("elegant")}
              className={`w-full px-3 py-2 rounded-2xl text-xs font-medium transition-all duration-200 ${
                designTheme === "elegant"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Elegant
            </button>
            <button
              onClick={() => onThemeChange("corporate")}
              className={`w-full px-3 py-2 rounded-2xl text-xs font-medium transition-all duration-200 ${
                designTheme === "corporate"
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Corporate
            </button>
            <button
              onClick={() => onThemeChange("classic")}
              className={`w-full px-3 py-2 rounded-2xl text-xs font-medium transition-all duration-200 ${
                designTheme === "classic"
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Classic
            </button>
          </div>
        </div>

        {/* Accent Color */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider">
            Accent
          </label>
          <input
            type="color"
            value={accentColor}
            onChange={(e) => onAccentColorChange(e.target.value)}
            className="w-full h-11 rounded-2xl cursor-pointer border-0 shadow-sm"
          />
        </div>

        {/* Text Color */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider">
            Text
          </label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => onTextColorChange(e.target.value)}
            className="w-full h-11 rounded-2xl cursor-pointer border-0 shadow-sm"
          />
        </div>

        {/* Card Dimensions */}
        <div className="space-y-3 col-span-2">
          <div>
            <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
              Width <span className="text-blue-600 font-semibold">{cardWidth}px</span>
            </label>
            <input
              type="range"
              min="600"
              max="900"
              value={cardWidth}
              onChange={(e) => onCardWidthChange(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-slate-100"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
              Height <span className="text-blue-600 font-semibold">{cardHeight}px</span>
            </label>
            <input
              type="range"
              min="380"
              max="600"
              value={cardHeight}
              onChange={(e) => onCardHeightChange(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
