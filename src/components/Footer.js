import { dataLinks, dataIcons } from "../data";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {dataLinks.map((links) => {
            const { id, href, text } = links;
            return (
              <>
                <li key={id}>
                  <a href={href} className="footer-link">
                    {text}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {dataIcons.map((dataIcon) => {
            const { id, href, icon } = dataIcon;
            return (
              <li key={id}>
                <a href={href} target="_blank" className="footer-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
      ;
    </>
  );
};
export default Footer;
