const PersonTabs = ({ tabData, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-row justify-center border-b border-gray-200">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        {tabData.map((item) => {
          return (
            <a
              key={item.text}
              href="#"
              className={`shrink-0 border-b-2 px-1 pb-4 text-[1rem] 
                ${activeTab === item.text ? "text-dark-mode-blue dark:text-white border-dark-mode-blue dark:border-white font-bold"
                  : "border-transparent text-gray-500 dark:text-dark-mode-blue dark:hover:text-person-header-tab-hover-blue hover:border-gray-300 dark:hover:border-person-header-tab-hover-blue"
                }
              `}
              onClick={() => setActiveTab(item.text)}
            >
              {item.text}
            </a>
          )
        })}
      </nav>
    </div>
  )
}

export default PersonTabs;