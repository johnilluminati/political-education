const PersonMain = () => {
  const tabs = [
    { text: 'Bio', active: false },
    { text: 'Views', active: false },
    { text: 'Voting Record', active: true },
    { text: 'Donations', active: false }
  ]
  return (
    <div className="flex flex-row justify-center border-b border-gray-200">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        {tabs.map((item, key) => {
          return (
            <a
              key={key}
              href="#"
              className={`shrink-0 border-b-2 px-1 pb-4 text-[1rem] 
                ${item.active ? 'text-person-header-tab-blue dark:text-white border-person-header-tab-blue dark:border-white font-bold'                   
                  : 'border-transparent text-gray-500 dark:text-person-header-tab-blue dark:hover:text-person-header-tab-hover-blue hover:border-gray-300 dark:hover:border-person-header-tab-hover-blue' 
                }`
              }
            >
              {item.text}
            </a>
          )
        })}
      </nav>
    </div>
  )
}

export default PersonMain;