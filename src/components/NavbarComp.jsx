import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavbarComp() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top top-0  py-2">
        <div className="container">
          <a className="navbar-brand " href="#">
            <img src={Logo} className="img-fluid " />
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            className="d-lg-none d-md-block d-xxl-none d-sm-block burger-icon"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          {/* Mobile Sidebar */}

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header bg-secondary">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                <img src={Logo} className="img-fluid" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-lg-none d-md-block d-xxl-none d-sm-block">
              <div className="text-start">
                <ul className="d-flex flex-column row-gap-3 list-unstyled justify-content-center ">
                  <li>
                    <Link className="text-black nav-link" to="/">
                      Ana Sayfa
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black nav-link" to="/about">
                      Hakkımızda
                    </Link>
                  </li>
                  <li className="nav-item justify-content-start">
                    <a
                      href="/public/royalskatalog.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="catalog text-black justify-content-start text-start  nav-link"
                      to="/catalog"
                    >
                      E-Katalog
                    </a>
                  </li>
                  <li>
                    <div className="dropdown">
                      <a
                        className="dropdown text-black text-decoration-none"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        Ürünlerimiz
                      </a>

                      <ul className="dropdown-menu px-1 text-light">
                        <li className=" mb-3">
                          <Link
                            to={"/product/hijyenikÜrünler"}
                            style={{ textDecoration: "none" }}
                          >
                            Hijyenik Ürünler
                          </Link>
                        </li>
                        <li className=" mb-3">
                          <Link
                            to={"/product/temizlikKagitlari"}
                            style={{ textDecoration: "none" }}
                          >
                            Temizlik Kagıtları
                          </Link>
                        </li>
                        <li className=" mb-3">
                          <Link
                            to={"/product/pipetGrubu"}
                            style={{ textDecoration: "none" }}
                          >
                            Pipetler
                          </Link>
                        </li>
                        <li className=" mb-3">
                          <Link
                            to={"/product/kagıtVeKarton"}
                            style={{ textDecoration: "none" }}
                          >
                            Kagıt Ve Kartonlar
                          </Link>
                        </li>
                        <li className=" mb-3">
                          <Link
                            to={"/product/aparatlar"}
                            style={{ textDecoration: "none" }}
                          >
                            Aparatlar
                          </Link>
                        </li>
                        <li className=" mb-3">
                          <Link
                            to={"/product/kaplar"}
                            style={{ textDecoration: "none" }}
                          >
                            Kaplar
                          </Link>
                        </li>
                        <li className=" mb-3">
                          <Link
                            to={"/product/plastikÜrünler"}
                            style={{ textDecoration: "none" }}
                          >
                            Plastik Ürünler
                          </Link>
                        </li>
                        <li className=" mb-3">
                          <Link
                            to={"/product/digerÜrünler"}
                            style={{ textDecoration: "none" }}
                          >
                            Diger Ürünler
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/contact" className="nav-link">
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="collapse navbar-collapse  justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav column-gap-3">
              <li className="nav-item ">
                <Link className=" nav-link text-black" to="/">
                  Ana Sayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/about">
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item my-auto">
                <div className="dropdown" style={{ position: "relative" }}>
                  <a
                    className=" text-black text-decoration-none"
                    href="#"
                    role="button"
                    aria-expanded={dropdownOpen}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    Ürünlerimiz
                  </a>

                  <ul
                    id="dropdown-menu"
                    className="dropdown-menu px-1 text-light "
                    style={{
                      display: dropdownOpen ? "block" : "none",
                      position: "absolute",
                      transform: "translateY(-0.9%)",
                      top: "100%",
                      left: 0,
                      zIndex: 1000,
                      backgroundColor: "#343a40",
                    }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <li className="mb-3">
                      <Link
                        to={"/product/hijyenikÜrünler"}
                        style={{ textDecoration: "none" }}
                      >
                        Hijyenik Ürünler
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to={"/product/temizlikKagitlari"}
                        style={{ textDecoration: "none" }}
                      >
                        Temizlik Kagıtları
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to={"/product/pipetGrubu"}
                        style={{ textDecoration: "none" }}
                      >
                        Pipetler
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to={"/product/kagıtVeKarton"}
                        style={{ textDecoration: "none" }}
                      >
                        Kagıt Ve Kartonlar
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to={"/product/aparatlar"}
                        style={{ textDecoration: "none" }}
                      >
                        Aparatlar
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to={"/product/kaplar"}
                        style={{ textDecoration: "none" }}
                      >
                        Kaplar
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to={"/product/plastikÜrünler"}
                        style={{ textDecoration: "none" }}
                      >
                        Plastik Ürünler
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        to={"/product/digerÜrünler"}
                        style={{ textDecoration: "none" }}
                      >
                        Diger Ürünler
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item ">
                <a
                  href="/src/assets/royalskatalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="catalog nav-link text-black"
                  to="/catalog"
                >
                  E-Katalog
                </a>
              </li>
              <li>
                <Link className="nav-link text-black" to="/contact">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComp;
