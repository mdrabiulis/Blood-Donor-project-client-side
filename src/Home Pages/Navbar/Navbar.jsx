import logo from "/public/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <img className="w-16" src={logo} />
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className=" m-1">
              <img
                className="w-10 rounded-full"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <div className="flex items-center gap-5">
                <img
                  className="w-7 rounded-full"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
                <a>Manage your Account</a>
              </div> */}

              <li>
                <a>Manage your Account</a>
              </li>
              <li>
                <a>Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
