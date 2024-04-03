import logo from "/public/logo.png";

const Navbar = () => {
  return (
    <>
      {/* <div className="fixed z-20"> */}
      <div className=" navbar bg-base-100">
        <div className="navbar-start">
          {/* <div className="avatar">
  <div className="w-20 rounded-full"> */}
          <img className="w-16 rounded-full" src={logo} />
          {/* </div> */}
          {/* </div> */}
        </div>

        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
