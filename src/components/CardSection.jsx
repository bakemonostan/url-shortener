import styled from 'styled-components';
import Card from './common/Card';
import { useContext, useState } from 'react';
import UrlContext from 'UrlContext';
import InputBar from './common/InputBar';

const Wrapper = styled.section`
  background: rgba(60, 38, 105, 0.1);
  padding-top: 8rem;
  margin: 0 auto;
  position: relative;

  .link {
  }
  @media (min-width: 765px) {
  }
`;

const Info = styled.div`
  margin: 0 auto;
  max-width: 320px;
  text-align: center;

  @media (min-width: 965px) {
    max-width: 575px;
    font-size: clamp(0.87rem, calc(0.75rem + 0.5vw), 1.2rem);
  }
`;

const LinkWrapper = styled.div`
  background: white;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  p {
    display: inline;
  }

  .link {
    display: flex;
    gap: 1rem;
    margin: 0 1rem;
  }
`;

const Button = styled.button`
  color: gray;
  padding: 0.5rem 2rem;
`;

const CardSection = () => {
  const { data } = useContext(UrlContext);

  return (
    <Wrapper>
      <InputBar />
      {/* <InputWrapper>
      </InputWrapper> */}
      {data &&
        data.map((item) => {
          const { result } = item;
          const { code, short_link: link, full_short_link2: link2 } = result;
          return (
            <LinkWrapper key={code}>
              <div>
                <p>{link2}</p>
              </div>
              <div className='link'>
                <p>{link}</p>
                <Button>Copy</Button>
              </div>
            </LinkWrapper>
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
