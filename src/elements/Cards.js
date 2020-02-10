import styled from "styled-components";
import { elevation, transition, black } from "utilities";

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 1rem;
  max-width: 320px;
  margin: 0 auto;
  color: ${black};
  ${elevation[4]};
  ${transition({
    property: "box-shadow"
  })};
  &:hover {
    ${elevation[5]};
  }
`;
