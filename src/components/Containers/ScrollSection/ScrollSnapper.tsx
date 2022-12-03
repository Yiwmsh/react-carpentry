import styled from "@emotion/styled";

export const ScrollSnapper = styled.div<{ hideOverflow?: boolean }>`
  overflow-y: ${({ hideOverflow }) => (hideOverflow ? "hidden" : "auto")};
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;
  height: 100vh;
`;
