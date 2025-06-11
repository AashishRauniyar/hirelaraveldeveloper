"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cn } from "@/lib/utils";

interface CustomPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
  inputStyle?: React.CSSProperties;
}

export function CustomPhoneInput({
  value,
  onChange,
  error,
  className,
  inputStyle,
}: CustomPhoneInputProps) {
  return (
    <div className={cn("relative", className)}>
      <PhoneInput
        country={"us"}
        value={value}
        onChange={onChange}
        inputClass={cn(
          "w-full h-10 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          error && "border-red-500 focus:ring-red-500 focus:border-red-500"
        )}
        buttonClass="!bg-gray-50 !border-gray-300"
        dropdownClass="!bg-white !border-gray-300"
        searchClass="!bg-gray-50 !border-gray-300"
        containerClass="!w-full"
        enableSearch={true}
        searchPlaceholder="Search country..."
        searchNotFound="Country not found"
        preferredCountries={["us", "gb", "ca", "au", "in"]}
        inputStyle={inputStyle}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
} 