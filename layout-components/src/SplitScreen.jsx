import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${props => props.weight};
`;

export const SplitScreen = ({
  left: Left,
  leftWeight = 1,
  right: Right,
  rightWeight = 1,
}) => {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane>
    </Container>
  );
};
