const PersonMain = () => {
  return (
    <div className="flex flex-row justify-center border-b border-gray-200">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        <a
          href="#"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Bio
        </a>

        <a
          href="#"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Views
        </a>

        <a
          href="#"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Voting Record
        </a>

        <a
          href="#"
          className="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
          aria-current="page"
        >
          Donations
        </a>
      </nav>
    </div>
  )
}

export default PersonMain;