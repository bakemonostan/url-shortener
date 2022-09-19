import styled from 'styled-components';
import { logofooter, ig, pintrest, twitter, fb } from 'images';

const Wrapper = styled.footer`
  background: hsl(260, 8%, 14%);
  .container {
    display: flex;
    flex-flow: column wrap;
    text-align: center;
    padding: 2rem 0;
    margin: 0 auto;
  }
  .logo {
    padding: 2.2rem;
  }
  .logo img {
    width: 100px;
    margin: 0 auto;
  }

  h3,
  p,
  li {
    color: white;
  }

  .socials {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    align-items: start;
    padding-top: 2rem;
  }

  .socials > img {
    width: 30px;
  }

  @media (min-width: 785px) {
    .container {
      flex-direction: row;
      text-align: left;
      gap: 1rem;
      max-width: 1440px;
    }

    .links {
      display: flex;
      flex: 1 0 auto;
    }
    .logo {
      flex: 1 0 150px;
    }
    .logo img {
    }

    .socials {
      padding: 2.2rem;
      flex: 1 1 100px;
    }

    .socials > img {
      width: 22px;
      cursor: pointer;
    }
  }
`;

const WrapperTwo = styled.div`
  padding: 1rem;
  flex: 0 0 100px;
  h3 {
    padding: 1rem 0;
  }

  li {
    list-style: none;
    line-height: 2.2;
    &:hover {
      color: hsl(180, 66%, 49%);
      cursor: pointer;
    }
  }

  @media (min-width: 785px) {
    padding: 1rem 2rem;
    flex: 1 1 100px;
  }
`;

const FooterLinks = ({ links, title }) => {
  return (
    <>
      <WrapperTwo>
        <h3>Features</h3>
        <ul>
          {links.map((link, i) => {
            return <li key={i}>{link}</li>;
          })}
        </ul>
      </WrapperTwo>
    </>
  );
};

const Footer = () => {
  const link1 = ['Link Shortening', 'Branded Links', ' Analytics'];
  const link2 = ['Blog', 'Developers', 'Support'];
  const link3 = ['About', 'Our Teams', 'Careers', 'Contact'];

  return (
    <Wrapper>
      <div className='container'>
        <div className='logo'>
          <img src={logofooter} alt='' />
        </div>
        <div className='links'>
          <FooterLinks links={link1} title='Features' />
          <FooterLinks links={link2} title='Resources' />
          <FooterLinks links={link3} title='Company' />
        </div>

        <div className='socials'>
          <img src={fb} alt='' />
          <img src={twitter} alt='' />
          <img src={pintrest} alt='' />
          <img src={ig} alt='' />
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
