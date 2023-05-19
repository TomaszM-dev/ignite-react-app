import styled from "styled-components";
import { motion } from "framer-motion";

const Game = function ({ name, released, image }) {
  console.log(name);
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt="" />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 5px;

  img {
    width: 100%;
    /* overflow: hidden; */
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
