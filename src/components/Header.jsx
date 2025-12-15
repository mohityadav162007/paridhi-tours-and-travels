import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
      <Link to="/" className="logo">
  {/* Logo image (desktop + mobile) */}
  <img
    src="/images/logo.png"
    alt="Maa Narmada Tour & Travels"
    className="logo-image"
  />

  {/* Text logo (desktop only) */}
  <div className="logo-text">
    <span className="logo-line-1">Maa Narmada</span>
    <span className="logo-line-2"> Tours & Travels</span>
  </div>
</Link>




        {/* Navigation */}
        <nav className="nav-links">
  <NavLink to="/" end>Home</NavLink>

  <a href="/#services">Services</a>
  <a href="/#why-us">Why Us</a>

  <NavLink to="/gallery">Gallery</NavLink>
  <NavLink to="/domestic-trips">Trips</NavLink>
</nav>
      </div>
    </header>
  );
}
