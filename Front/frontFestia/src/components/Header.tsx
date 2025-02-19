import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row w-full h-[75px] p-2 mb-8 border-b-1 border-primary">
      <div className="flex mx-auto flex-row w-[1270px]">
        <div className=" basis-[25%] content-center">
          <h1 id="titulo" className="mr-auto my-auto text-[24px]">
            Festia
          </h1>
        </div>
        <nav className="flex basis-[50%] ">
          <ul className="flex w-64 flex-row mx-auto my-auto justify-around">
            <li>
              <Link to="/" className="hover:underline">
                Hoy
              </Link>
            </li>
            <li>
              <Link to="/calendar" className="hover:underline">
                Calendario
              </Link>
            </li>
          </ul>
        </nav>
        <div className="basis-[25%] flex">
          <a className="ml-auto my-auto" href="">
            <img
              className="rounded-full w-12"
              src="https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f8504462572e0bd680767_Monkey%2520PFP%2520for%2520Tiktok%25207.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
