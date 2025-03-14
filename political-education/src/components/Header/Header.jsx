import Navbar from "./Navbar";

const Header = () => {
  const headerLinks = [
    { text: 'Elected Fellas', routerLink: '/elected-officials' },
    { text: 'Elections (Dropdown?)', routerLink: '/elections' },
    { text: `Parties' Stances`, routerLink: '/party-stances' },
    { text: 'Interest Groups', routerLink: '/interest-groups' },
  ];

  return (
    <header className="bg-white dark:bg-nav-bg-color border-b border-gray-200">
      <Navbar headerLinks={headerLinks} />
    </header>
  )
}

export default Header;