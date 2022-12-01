function HamburgerMenu({ toggle, setToggle }) {
  const hamburgerLine = `h-[3px] w-6 my-[2px] rounded-full bg-custom-orange transition ease transform duration-300`;
  return (
    <button
      className="lg:hidden flex flex-col h-9 w-10 bg-white  justify-center items-center group"
      aria-label="toggle"
      onClick={() => setToggle(!toggle)}
    >
      <div
        className={`${hamburgerLine} ${
          toggle ? "rotate-45 translate-y-[7px] " : ""
        }`}
      />
      <div className={`${hamburgerLine} ${toggle ? "opacity-0" : ""}`} />
      <div
        className={`${hamburgerLine} ${
          toggle ? "-rotate-45 -translate-y-[7px] " : ""
        }`}
      />
    </button>
  );
}

export default HamburgerMenu;
