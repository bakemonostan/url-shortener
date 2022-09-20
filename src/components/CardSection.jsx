import styled from 'styled-components';
import Card from './common/Card';
import { useContext } from 'react';
import UrlContext from 'UrlContext';
import InputBar from './common/InputBar';
import useCopyToClipboard from 'hooks/useCopyToClipboard';
import useLocalStorage from 'hooks/useLocalStorage';

const Wrapper = styled.section`
  background: rgba(60, 38, 105, 0.1);
  padding-top: 8rem;
  margin: 0 auto;
  position: relative;
`;

const Info = styled.div`
  margin: 0 auto;
  max-width: 320px;
  text-align: center;
  padding-top: 5rem;

  @media (min-width: 965px) {
    max-width: 575px;
    font-size: clamp(0.87rem, calc(0.75rem + 0.5vw), 1.2rem);
  }
`;

const LinkWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  background-color: white;
  border-radius: 5px;
  padding: 1rem 0;
  font-size: clamp(0.87rem, calc(0.75rem + 0.5vw), 1.2rem);

  .container {
    width: 85%;
    margin: 0 auto;
  }

  .link1 {
    border-bottom: 1px solid lightgray;
    padding: 0.5rem 0;
  }

  .link2 {
    margin-top: 0.5rem;
    color: hsl(180, 66%, 65%);
  }

  .btn {
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  width: 100%;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background: hsl(180, 66%, 49%);
  cursor: pointer;
  border: none;
  margin-top: 0.5rem;
  &:hover {
    background: hsl(180, 66%, 65%);
  }
  @media (min-width: 965px) {
  }
`;

const CardSection = () => {
  const { data, link } = useContext(UrlContext);
  const [copyUrlStatus, copyUrl] = useCopyToClipboard(link);
  const [savedLink, setSavedLink] = useLocalStorage('shortLink', link);

  let buttonText = 'Copy';

  if (copyUrlStatus === 'copied') {
    buttonText = 'Copied!!';
  } else if (copyUrlStatus === 'failed') {
    buttonText = 'Copy failed!';
  }

  const handleUrl = () => {
    copyUrl();
    setSavedLink(link);
  };
  console.log(savedLink);
  return (
    <Wrapper>
      <InputBar />
      {savedLink &&
        data.map((item) => {
          const { code, full_short_link2: link2 } = item;
          return savedLink ? (
            <LinkWrapper key={code}>
              <div className='container'>
                <div className='link1'>
                  <p>{link2}</p>
                </div>
                <div className='link2'>
                  <p>{savedLink}</p>
                  <div className='btn'>
                    <Button onClick={handleUrl}>{buttonText}</Button>
                  </div>
                </div>
              </div>
            </LinkWrapper>
          ) : (
            ''
          );
        })}
      <Info>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          Statistics dashboard
        </p>
      </Info>
      <Card />
    </Wrapper>
  );
};
export default CardSection;
