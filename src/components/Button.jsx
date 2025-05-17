// src/components/Button.jsx
import ButtonIcon from "./ButtonIcon";
import { ButtonVariants, baseButtonClasses } from "./ButtonVariants.js";

export default async function Button({
  as: ComponentProp,
  type = "button",
  onClick,
  disabled,
  children,
  className = "",
  href,
  variant,
  iconProps = {},
  showIcon = false,
  ...props
}) {
  variant = variant || "primary";
  const { variantClasses, buttonClasses } =
    ButtonVariants[variant] || ButtonVariants.primary;

  const {
    element,
    position = "right",
    className: iconCustomClass = "",
    hoverOnly,
    animateIcon,
  } = iconProps;

  const containerDefaults = "relative inline-flex items-center group";

  let combinedClassNames =
    variant === "underline"
      ? `${className} ${variantClasses} transition-colors duration-300 ease-in-out ${containerDefaults}`
      : `${className} ${variantClasses} ${buttonClasses || baseButtonClasses} ${containerDefaults}`;

  const computedDisabled = disabled ?? false;
  const ComponentFinal = computedDisabled
    ? "button"
    : ComponentProp || (href ? "a" : "button");

  const additionalProps = { ...props };
  if (ComponentFinal === "button") {
    additionalProps.disabled = computedDisabled;
  } else {
    additionalProps.href = computedDisabled ? undefined : href;
    if (computedDisabled) {
      combinedClassNames += " pointer-events-none opacity-50";
    }
  }

  return (
    <ComponentFinal
      {...(ComponentFinal === "button" ? { type } : { href: additionalProps.href })}
      onClick={computedDisabled ? undefined : onClick}
      className={combinedClassNames}
      {...(ComponentFinal === "button" ? additionalProps : {})}
    >
      {showIcon && position === "left" && (
        <ButtonIcon
          showIcon={showIcon}
          element={element}
          hoverOnly={hoverOnly}
          animateIcon={animateIcon}
          position={position}
          className={iconCustomClass}
        />
      )}
      {children}
      {showIcon && position === "right" && (
        <ButtonIcon
          showIcon={showIcon}
          element={element}
          hoverOnly={hoverOnly}
          animateIcon={animateIcon}
          position={position}
          className={iconCustomClass}
        />
      )}
    </ComponentFinal>
  );
}
