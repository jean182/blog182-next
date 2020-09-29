import styled from 'styled-components';

import { HEADER_HEIGHT } from 'helpers/constants';

export const Main = styled.main`
  margin-top: ${HEADER_HEIGHT + 10}px;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  overflow-y: auto;
`;
