import "./LegoSection.css";

export default function LegoSection({
  children,
  variant = "white",
  className = "",
}) {
  return (
    <section
      className={`lego-section lego-section--${variant} ${className}`}
    >
      <div className="lego-section__container">
        {children}
      </div>
    </section>
  );
}