import styled from 'styled-components';
import { boostdesktop, boostmobile } from 'images';
import { useContext, useEffect, useState } from 'react';
import UrlContext from 'UrlContext';
import { useFetch } from 'hooks/useFetch';

const Wrapper = styled.form`
  background-image: linear-gradient(
      to bottom,
      rgba(60, 38, 105, 0.8),
      rgba(60, 38, 105, 1)
    ),
    url(${boostmobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1.5rem 1rem;
  width: 85%;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  top: -60px;
  margin: 0 auto;
  left: 0;
  right: 0;
  font-size: clamp(0.87rem, calc(0.75rem + 0.5vw), 1.2rem);

  input {
    padding: 0.7rem;
    flex: 0 0 88%;
  }

  @media (min-width: 965px) {
    top: -40px;
  }
`;

const InputBtn = styled.button`
  padding: 0.7rem;
  flex: 0 0 88%;
  @media (min-width: 965px) {
    flex: 0 0 auto;
  }
`;

const InputBar = () => {
  const { handleSubmit, userInput, setUserInput } = useContext(UrlContext);

  return (
    <Wrapper onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        className='input'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <InputBtn>Shorten It!</InputBtn>
    </Wrapper>
  );
};
export default InputBar;
