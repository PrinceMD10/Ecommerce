function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-in">
        <span className="ftr-logo">CleanStyle</span>
        <nav className="ftr-links">
          {["Instagram","Pinterest","Livraison","Retours","Mentions légales"].map(l=>(
            <a key={l} href="#" className="fl">{l}</a>
          ))}
        </nav>
      </div>
      <div className="ftr-copy">
        <span>© 2025 CleanStyle. Tous droits réservés.</span>
        <span>Qualité · Intemporalité · Responsabilité</span>
      </div>
    </footer>
  );
}

export default Footer;