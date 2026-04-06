import { useEffect, useMemo, useRef, useState } from "react";

// ======== Types ========
type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  id?: string;
  label?: string;
  error?: string;
  wrapperClassName?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  options: SelectOption[];
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  isMulti?: boolean;
  searchable?: boolean;
};

function Select({
  id,
  label,
  error,
  wrapperClassName = "",
  className = "",
  placeholder = "Select option",
  disabled = false,
  options,
  value,
  onChange,
  isMulti = false,
  searchable = false
}: SelectProps) {
  // ======== State ========
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const hasError = Boolean(error);
  const errorId = id ? `${id}-error` : undefined;

  // ======== Derived Values ========
  const selectedValues = useMemo(() => {
    if (isMulti) {
      return Array.isArray(value) ? value : [];
    }
    return typeof value === "string" && value ? [value] : [];
  }, [isMulti, value]);

  const filteredOptions = useMemo(() => {
    if (!searchable || !searchText.trim()) return options;
    const needle = searchText.toLowerCase();
    return options.filter((option) => option.label.toLowerCase().includes(needle));
  }, [options, searchable, searchText]);

  const displayText = useMemo(() => {
    if (selectedValues.length === 0) return placeholder;
    const selectedLabels = options
      .filter((option) => selectedValues.includes(option.value))
      .map((option) => option.label);
    return selectedLabels.length > 0 ? selectedLabels.join(", ") : placeholder;
  }, [options, placeholder, selectedValues]);

  // ======== Effects ========
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ======== Handlers ========
  function handleSelect(optionValue: string) {
    if (isMulti) {
      const current = Array.isArray(value) ? value : [];
      const exists = current.includes(optionValue);
      const nextValues = exists ? current.filter((item) => item !== optionValue) : [...current, optionValue];
      onChange(nextValues);
      return;
    }

    onChange(optionValue);
    setOpen(false);
  }

  // ======== Render ========
  return (
    <div className={wrapperClassName}>
      {label ? (
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-text-main">
          {label}
        </label>
      ) : null}

      <div ref={rootRef} className="relative">
        <button
          id={id}
          type="button"
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className={`w-full rounded-xl border bg-surface px-4 py-3 text-left text-text-main outline-none transition focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${
            hasError
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
              : "border-border focus:border-primary focus:ring-primary/15"
          } ${className}`.trim()}
        >
          <span className={selectedValues.length === 0 ? "text-text-subtle/80" : "text-text-main"}>{displayText}</span>
        </button>

        {open ? (
          <div className="absolute z-20 mt-2 w-full rounded-xl border border-border bg-surface p-2 shadow-lg">
            {searchable ? (
              <input
                type="text"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search..."
                className="mb-2 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-main outline-none placeholder:text-text-subtle/80 focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            ) : null}

            <ul role="listbox" aria-multiselectable={isMulti} className="max-h-56 overflow-auto">
              {filteredOptions.length === 0 ? (
                <li className="rounded-lg px-3 py-2 text-sm text-text-subtle">No options found</li>
              ) : (
                filteredOptions.map((option) => {
                  const selected = selectedValues.includes(option.value);
                  return (
                    <li key={option.value}>
                      <button
                        type="button"
                        onClick={() => handleSelect(option.value)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                          selected ? "bg-primary/10 text-primary" : "text-text-main hover:bg-background"
                        }`}
                      >
                        <span>{option.label}</span>
                        {selected ? <span className="text-xs font-medium">Selected</span> : null}
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        ) : null}
      </div>

      {hasError ? (
        <p id={errorId} className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

// ======== Exports ========
export type { SelectOption, SelectProps };
export default Select;
