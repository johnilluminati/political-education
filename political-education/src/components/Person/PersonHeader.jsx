const PersonHeader = () => {
  return (
    <div className="flex flex-row gap-4 mb-8">
      <div className="basis-1/6">
        <img className="img-rounded-circle" src="https://i.imgur.com/7gMaIvk.png" />
      </div>
      <div className="basis-5/6 flex flex-col justify-center gap-4">
        <div>
          <span className="text-[2rem] pr-2">Captain McLastname</span>
          <span className="text-[1rem]">Democrat-PA</span>
        </div>
        <span className="text-[1.25rem]">Dog (2010 - present)</span>
        <span className="text-[1.25rem]">Website: <a href="/">https://totallylegitwebsite.com</a></span>
      </div>
    </div>
  )
}

export default PersonHeader;