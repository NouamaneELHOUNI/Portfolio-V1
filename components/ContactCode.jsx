import styles from "../styles/ContactCode.module.css";

const contactItems = [
  // {
  //   social: 'website',
  //   link: 'nitinranganath.me',
  //   href: 'https://nitinranganath.me',
  // },
  {
    social: "email",
    link: "nouamane.elhouni.2002@gmail.com",
    href: "mailto:nouamane.elhouni.2002@gmail.com",
  },
  {
    social: "github",
    link: "NouamaneELHOUNI",
    href: "https://github.com/NouamaneELHOUNI",
  },
  // {
  //   social: "linkedin",
  //   link: "nitinranganath",
  //   href: "https://www.linkedin.com/in/nitinranganath/",
  // },
  // {
  //   social: 'twitter',
  //   link: 'iamnitinr',
  //   href: 'https://www.twitter.com/iamnitinr',
  // },
  {
    social: "instagram",
    link: "r8d.en",
    href: "https://www.instagram.com/r8d.en",
  },
  // {
  //   social: 'polywork',
  //   link: 'nitinranganath',
  //   href: 'https://www.polywork.com/nitinranganath',
  // },
  // {
  //   social: 'telegram',
  //   link: 'iamnitinr',
  //   href: 'https://t.me/iamnitinr',
  // },
  // {
  //   social: 'codepen',
  //   link: 'nitinranganath',
  //   href: 'https://codepen.io/itsnitinr',
  // },
  // {
  //   social: 'codesandbox',
  //   link: 'itsnitinr',
  //   href: 'https://codesandbox.io/u/itsnitinr',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
