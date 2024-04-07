import React from "react";

interface ToggleSwitchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ toggle, onChange }) => {
  return (
    <>
      <label className="inline-flex items-center me-5 cursor-pointer">
        <input
          type="checkbox"
          onChange={onChange}
          id="toggle"
          name="toggle"
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-[#e32882] rounded-full peer peer-focus:ring-4 peer-focus:ring-[#e32882] dark:peer-focus:ring-[#e32882] dark:bg-[#3a3a3a] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#fff] after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#0F0F0F] after:border-[#0F0F0F] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#e32882] peer-checked:bg-[#FFF] border border-[#e32882]"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {toggle ? "on" : "off"}
        </span>
      </label>
    </>
  );
};

export default ToggleSwitch;
