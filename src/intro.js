import { useState, useRef } from "react";
import styled, { css } from "styled-components";

const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  position: relative;
`;

const Title = styled.h1`
  position: absolute;
  font-size:50px;
  z-index: 3;
  left:15%;
  top:5%;
  color: white;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
`

const VideoPlay = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  ${({ isHovered }) =>
    isHovered &&
    css`
      width: 80%;
      height: 100%;
      video {
        transform: scale(1.0);
        z-index: 2;
      }
    `}
`;

const DogPunch = styled(VideoPlay)`
  left: 0;
`;
const CatPunch = styled(VideoPlay)`
  right: 0;
`;

function Intro() {
  const [dogIsHovered, setDogIsHovered] = useState(false);
  const [catIsHovered, setCatIsHovered] = useState(false);
  const dogVideoRef = useRef(null);
  const catVideoRef = useRef(null);

  const handleDogMouseOver = () => {
    setDogIsHovered(true);
    dogVideoRef.current.play();
  };

  const handleDogMouseOut = () => {
    setDogIsHovered(false);
    dogVideoRef.current.pause();
  };

  const handleCatMouseOver = () => {
    setCatIsHovered(true);
    catVideoRef.current.play();
  };

  const handleCatMouseOut = () => {
    setCatIsHovered(false);
    catVideoRef.current.pause();
  };

  return (
    <Body>
      <Title>ARE YOU A DOG PERSON OR A CAT PERSON</Title>
      <DogPunch
        isHovered={dogIsHovered}
        onMouseOver={handleDogMouseOver}
        onMouseOut={handleDogMouseOut}
      >
        <video ref={dogVideoRef} muted loop>
          <source src="/img/dogPunch.mp4" type="video/mp4" />
        </video>
      </DogPunch>

      <CatPunch
        isHovered={catIsHovered}
        onMouseOver={handleCatMouseOver}
        onMouseOut={handleCatMouseOut}
      >
        <video ref={catVideoRef} muted loop>
          <source src="/img/catPunch.mp4" type="video/mp4" />
        </video>
      </CatPunch>
    </Body>
  );
}

export default Intro;
