import React, { useState, useEffect } from "react";
import FAQSection from "./FAQSection";
import Sidebar from "./Sidebar.jsx";
import "./VerticalTabs.css";

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState("Section1");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [faqs, setFaqs] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    import("./faqsData.json")
      .then((data) => {
        setFaqs(data.default);
      })
      .catch((error) => {
        console.error("Error loading FAQs data:", error);
      });
  }, []);

  const sectionNames = [...new Set(faqs.map((faq) => faq.section))];
  const activeSectionFaqs = faqs.filter((faq) => faq.section === activeTab);

  return (
    <div className="main">
      <div className="navBar">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-100 mt-4 mb-8">
          FAQ's Section
        </h1>
        <svg
          className="menu-button"
          onClick={toggleSidebar}
          style={{
            height: "26px",
            width: "26px",
            color: "black",
          }}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </div>
      <div className="vertical-tabs">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}>
          <div className="side-menu-tab-buttons">
            {sectionNames.map((sectionName) => (
              <button
                key={sectionName}
                className={`tab-button ${
                  activeTab === sectionName ? "active" : ""
                }`}
                onClick={() => handleTabClick(sectionName)}
              >
                {sectionName}
              </button>
            ))}
          </div>
        </Sidebar>
        <div className="tab-buttons">
          {sectionNames.map((sectionName) => (
            <button
              key={sectionName}
              className={`tab-button ${
                activeTab === sectionName ? "active" : ""
              }`}
              onClick={() => handleTabClick(sectionName)}
            >
              {sectionName}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <FAQSection sectionName={activeTab} faqs={activeSectionFaqs} />
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
