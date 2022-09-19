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
  border-radius: 5px;
  input {
    padding: 0.7rem;
    flex: 0 0 88%;
  }

  @media (min-width: 965px) {
    padding: 2rem;
    top: -50px;
    max-width: 1440px;
    input {
      padding: 0.7rem;
      flex: 1 0 80%;
    }
  }
`;

const InputBtn = styled.button`
  padding: 0.8rem;
  flex: 0 0 88%;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background: hsl(180, 66%, 49%);
  cursor: pointer;
  &:hover {
    background: hsl(180, 66%, 65%);
  }
  @media (min-width: 965px) {
    flex: 1 0 auto;
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
        placeholder='Shorten a link here...'
      />
      <InputBtn>Shorten It!</InputBtn>
    </Wrapper>
  );
};
export default InputBar;
