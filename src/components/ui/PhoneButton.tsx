import React from "react";
import { Phone } from "lucide-react";

interface PhoneButtonProps {
  showText?: boolean;
  className?: string;
  number?: string;
  label?: string;
}

/**
 * زر اتصال موحد متجاوب مع جميع الشاشات
 */
const PhoneButton: React.FC<PhoneButtonProps> = ({
  showText = true,
  className = "",
  number = "0554277013",
  label = "اتصل الآن",
}) => {
  return (
    <a
      href={`tel:${number}`}
      className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold shadow-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 ${className}`}
      style={{ minWidth: showText ? 0 : 48 }}
    >
      <Phone size={22} className="shrink-0" />
      {showText && (
        <span className="whitespace-nowrap">{label}: {number}</span>
      )}
    </a>
  );
};

export default PhoneButton;
