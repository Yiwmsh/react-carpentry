import styled from "@emotion/styled";

export const ScrollSnapper = styled.div`
  overflow-y: auto;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;
  height: 100vh;
`;
