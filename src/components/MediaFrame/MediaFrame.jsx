import "./MediaFrame.css";

export default function MediaFrame({
  title,
  children,
  label = "Тут медиаконтент",
}) {
  return (
    <div className="media-frame">
      <div className="media-frame__top">
        <span>{title}</span>
      </div>

      <div className="media-frame__content">
        {children || (
          <div className="media-frame__placeholder">
            {label}
          </div>
        )}
      </div>
    </div>
  );
}