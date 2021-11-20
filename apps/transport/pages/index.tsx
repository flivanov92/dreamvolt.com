import styled from 'styled-components';
import { Logo } from '@ai/ui';
const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <h1>new site</h1>
      <Logo
        size="big"
        imagePath="star.svg"
        title="transport logo for super heroes"
      />
    </StyledPage>
  );
}

export default Index;
