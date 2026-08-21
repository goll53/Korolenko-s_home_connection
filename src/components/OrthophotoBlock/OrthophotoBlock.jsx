import { useState } from "react";
import LegoSection from "../LegoSection/LegoSection";

export default function OrthophotoBlock() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Ортофотоплан", icon: "+", contentIcon: "⌖", text: "Тут ортофотоплан", description: "Замените этот блок настоящим материалом" },
    { id: 1, label: "3D-модель", icon: "◇", contentIcon: "✦", text: "Тут 3D-модель", description: "Замените этот блок настоящим материалом" },
    { id: 2, label: "Облако точек", icon: "✦", contentIcon: "✦", text: "Тут облако точек", description: "Замените этот блок настоящим материалом" },
  ];

  return (
    <LegoSection variant="gray">
      <div className="viewer-tabs">
        <div className="viewer-tabs__header">
          {tabs.map((tab) => (
            <button key={tab.id} className={`viewer-tabs__btn ${activeTab === tab.id ? "active" : ""}`} onClick={() => setActiveTab(tab.id)}>
              <span className="viewer-tabs__icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="viewer-tabs__body">
          <button className="viewer-tabs__arrow viewer-tabs__arrow--left" onClick={() => setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length)}>←</button>
          <div className="viewer-tabs__content">
            <div className="viewer-tabs__content-icon">{tabs[activeTab].contentIcon}</div>
            <h3 className="viewer-tabs__content-title">{tabs[activeTab].text}</h3>
            <p className="viewer-tabs__content-desc">{tabs[activeTab].description}</p>
          </div>
          <button className="viewer-tabs__arrow viewer-tabs__arrow--right" onClick={() => setActiveTab((prev) => (prev + 1) % tabs.length)}>→</button>
        </div>
      </div>
    </LegoSection>
  );
}