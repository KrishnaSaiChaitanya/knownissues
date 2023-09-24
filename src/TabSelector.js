import React, { useState } from "react";
import "./TabSelector.css";
import jsonData from "./KnownIssues.json"; // Import your JSON data

function TabSelector() {
  const [selectedTab, setSelectedTab] = useState("Known"); // Default selected tab

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  // Filter issues based on the selected tab
  const filteredIssues = jsonData.issues.filter(
    (issue) => issue.issueStatus === selectedTab
  );

  return (
    <div className="tab-selector">
      <h1 className="tab-heading">Known Issues</h1>
      <div className="tab-buttons">
        <button
          className={
            selectedTab === "Known" ? "tab-button active" : "tab-button"
          }
          onClick={() => handleTabClick("Known")}
        >
          Known
        </button>
        <button
          className={
            selectedTab === "In Repair" ? "tab-button active" : "tab-button"
          }
          onClick={() => handleTabClick("In Repair")}
        >
          In Repair
        </button>
        <button
          className={
            selectedTab === "Complete" ? "tab-button active" : "tab-button"
          }
          onClick={() => handleTabClick("Complete")}
        >
          Complete
        </button>
      </div>
      <div className="tab-content">
        <ul className="list">
          {filteredIssues.map((issue) => (
            <div key={issue.id} className="issue">
              <li className="list-item">
                <svg
                  style={{ width: "28px", height: "28px", color: "black" }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 20"
                >
                  <path d="M16.025 15H14.91c.058-.33.088-.665.09-1v-1h2a1 1 0 0 0 0-2h-2.09a5.97 5.97 0 0 0-.26-1h.375a2 2 0 0 0 2-2V6a1 1 0 0 0-2 0v2H13.46a6.239 6.239 0 0 0-.46-.46V6a3.963 3.963 0 0 0-.986-2.6l.693-.693A1 1 0 0 0 13 2V1a1 1 0 0 0-2 0v.586l-.661.661a3.753 3.753 0 0 0-2.678 0L7 1.586V1a1 1 0 0 0-2 0v1a1 1 0 0 0 .293.707l.693.693A3.963 3.963 0 0 0 5 6v1.54a6.239 6.239 0 0 0-.46.46H3V6a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h.35a5.97 5.97 0 0 0-.26 1H1a1 1 0 0 0 0 2h2v1a6 6 0 0 0 .09 1H2a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h1.812A6.012 6.012 0 0 0 8 19.907V10a1 1 0 0 1 2 0v9.907A6.011 6.011 0 0 0 14.188 17h1.837v2a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2ZM11 6.35a5.922 5.922 0 0 0-.941-.251l-.111-.017a5.52 5.52 0 0 0-1.9 0l-.111.017A5.924 5.924 0 0 0 7 6.35V6a2 2 0 1 1 4 0v.35Z" />
                </svg>
                <p className="issueDescription">{issue.knownIssue}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className={`severity ${issue.severity.toLowerCase()}`}>
                    {issue.severity}
                  </span>
                  <span className="expectRepairDate">
                    {issue.expectRepairDate}
                  </span>
                </div>
                <svg
                  style={{ width: "24px", height: "24px", color: "white" }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 20"
                >
                  <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TabSelector;
