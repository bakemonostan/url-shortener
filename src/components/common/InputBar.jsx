import styled from 'styled-components';
import { boostdesktop, boostmobile } from 'images';

const Wrapper = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(60, 38, 105, 0.8),
      rgba(60, 38, 105, 1)
    ),
    url(${boostmobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  padding: 1.5rem;
  width: 90%;
  bottom: -280px;
  right: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  object-fit: contain;
  gap: 1rem;

  input {
    padding: 0.8rem;
    width: 95%;
    border-radius: 8px;
    border: none;
  }

  @media (min-width: 765px) {
    flex-direction: row;
    bottom: -110px;
    gap: 0.5rem;

    input {
      margin-right: 0.5rem;
    }
  }
`;

const InputBtn = styled.button`
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  width: 95%;

  @media (min-width: 765px) {
    width: 120px;
  }
`;

const InputBar = () => {
  return (
    <Wrapper>
      <input type='url' className='input' />
      <InputBtn>Shorten It!</InputBtn>
    </Wrapper>
  );
};
export default InputBar;
