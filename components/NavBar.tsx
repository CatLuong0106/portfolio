export function NavBar() { 
    return (
        <div className="flex justify-start px-2 py-4 bg-black text-white">
        <div>
            CLUONG
        </div>
        <nav className="flex ml-auto space-x-6">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#involvements">Involvements</a>
            <a href="#footer">Contacts</a>
      </nav>
      </div>
    )
}