// src/components/ButtonVariants.js
export const baseButtonClasses =
  "py-[var(--spacing-sm)] px-[var(--spacing-xl)] transform transition-all duration-300 ease-in-out rounded-full hover:scale-[1.02] uppercase font-bold";

export const ButtonVariants = {
  primary: {
    variantClasses:
      "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-primary)]",
    buttonClasses: baseButtonClasses,
  },
  secondary: {
    variantClasses:
      "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-secondary)]",
    buttonClasses: baseButtonClasses,
  },
  underline: {
    variantClasses:
      "underline text-[var(--color-primary)] hover:text-[var(--color-secondary)]",
    buttonClasses: "",
  },
  link: {
    // Used for menu links: neutral text, on hover primary
    variantClasses: "text-text hover:text-primary",
    buttonClasses: "",
  },
};
