import styled from 'styled-components';
import { logofooter, ig, pintrest, twitter, fb } from 'images';

const Wrapper = styled.footer`
  background: black;
  .container {
    display: flex;
    flex-flow: column wrap;
    background: black;
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
  }

  @media (min-width: 785px) {
    padding: 1rem 2rem;
    flex: 1 1 100px;
  }
`;

const FooterLinks = () => {
  return (
    <>
      <WrapperTwo>
        <h3>Features</h3>
        <ul>
          <li>link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </WrapperTwo>
    </>
  );
};

const Footer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='logo'>
          <img src={logofooter} alt='' />
        </div>
        <div className='links'>
          <FooterLinks />
          <FooterLinks />
          <FooterLinks />
        </div>

        <div className='socials'>
          <img src={ig} alt='' />
          <img src={ig} alt='' />
          <img src={ig} alt='' />
          <img src={ig} alt='' />
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
