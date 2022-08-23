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
  width: 85%;
  bottom: -110px;
  right: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  object-fit: contain;

  input {
    display: inline;
    padding: 0.8rem;
    width: 80%;
    margin-right: 0.5rem;
    border-radius: 8px;
    border: none;
  }
`;

const InputBtn = styled.button`
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  width: 120px;
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
