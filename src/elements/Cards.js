import styled from "styled-components";
import { elevation, transition, black } from "utilities";

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 1rem;
  color: ${black};
  ${elevation[4]};
  ${transition()};
  &:hover {
    ${elevation[5]};
  }
`;
