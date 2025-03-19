import { useState } from "react";
import PersonTabContent from "./PersonTabContent";
import PersonTabs from "./PersonTabs";

const tabs = [
  { text: "Bio" },
  { text: "Views" },
  { text: "Voting Record" },
  { text: "Donations" }
];

const PersonMain = () => {  
  const [activeTab, setActiveTab] = useState(tabs[0].text);

  return (
    <>
      <PersonTabs tabData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <PersonTabContent activeTab={activeTab} />
    </>
  )
}

export default PersonMain;