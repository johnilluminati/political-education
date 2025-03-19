import PersonBio from "./PersonBio";
import PersonDonations from "./PersonDonations";
import PersonViews from "./PersonViews";
import PersonVotingRecord from "./PersonVotingRecord";

const getTabContent = (activeTab) => {
  switch (activeTab) {
    case "Bio": return (<PersonBio />);
    case "Views": return (<PersonViews />);
    case "Voting Record": return (<PersonVotingRecord />);
    case "Donations": return (<PersonDonations />);
  }
}

const PersonTabContent = ({ activeTab }) => {
  const tabby = getTabContent(activeTab);
  return tabby;
}

export default PersonTabContent;