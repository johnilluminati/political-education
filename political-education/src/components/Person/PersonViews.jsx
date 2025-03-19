import { useState } from "react";

const tabs = [
  { text: "Crime", content: "This person be having views about crime." },
  { text: "Economy", content: "This person be having views about the economy." },
  { text: "Environment", content: "This person be having views about the environment." },
  { text: "Foreign Policy", content: "This person be having views about foreign policy." },
  { text: "Guns", content: "This person be having views about guns." },
  { text: "Health Care", content: "This person be having views about health care." },
  { text: "Immigration", content: "This person be having views about immigration." },
]

const PersonViews = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex flex-row">
      <div className="basis-1/6 border-r border-gray-200">
        <nav className="flex flex-col items-start">
          {tabs.map((item) => {
            return (
              <a
                key={item.text}
                href="#"
                className={`border-b-2 mx-4 py-2 dark:text-dark-mode-blue align-text
                  ${activeTab.text === item.text ? "text-blue-500 dark:text-white border-dark-mode-blue dark:border-white font-bold"
                    : "border-transparent text-gray-500 dark:text-dark-mode-blue dark:hover:text-person-header-tab-hover-blue hover:border-gray-300 dark:hover:border-person-header-tab-hover-blue"
                  }
                `}
                onClick={() => setActiveTab(item)}
              >
                {item.text}
              </a>
            )
          })}
        </nav>
      </div>
      <div className="basic-5/6 p-4">
          {activeTab.content}
      </div>
    </div>
  )
}

export default PersonViews;