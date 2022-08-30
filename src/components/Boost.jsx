import styled from 'styled-components';
import { boostdesktop } from 'images';

const Wrapper = styled.section`
  /* background: url(${boostdesktop}); */
  background-image: linear-gradient(
      to bottom,
      rgba(60, 38, 105, 0.8),
      rgba(60, 38, 105, 1)
    ),
    url(${boostdesktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  padding: 5rem 0;
  text-align: center;
  h3 {
    font-size: clamp(1.8rem, calc(0.27rem + 3.98vw), 2.36rem);
    padding: 1rem;
  }

  button {
    color: white;
    background: limegreen;
    padding: 1rem 4rem;
    border: none;
    border-radius: 50px;
    font-weight: bold;
  }
`;

const Boost = () => {
  return (
    <Wrapper>
      <h3>Boost your links today</h3>
      <button type='button'>Get started</button>
    </Wrapper>
  );
};
export default Boost;
