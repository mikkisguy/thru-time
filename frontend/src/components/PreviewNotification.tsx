import { format, parseISO, add } from "date-fns";
import styled from "styled-components";
import { LATEST_COMMIT_SHA, UPDATED_ON } from "../shared/constants";

const PreviewNotification = () => {
  console.log("UPDATED_ON", UPDATED_ON);

  const getUpdateDate = (): Date => {
    if (UPDATED_ON) {
      // Adding three hours because of Github Actions time difference
      return add(parseISO(UPDATED_ON), { hours: 3 });
    }

    return new Date();
  };

  return (
    <PreviewTopBar>
      <PreviewSite>Preview site</PreviewSite>
      <span>
        Updated
        {format(getUpdateDate(), " yyyy-MM-dd HH:mm:ss O")}
      </span>
      <CommitLink
        href={`https://github.com/mikkisguy/thru-time/commit/${LATEST_COMMIT_SHA}`}
        target="_blank"
      >
        Commit &rarr;
      </CommitLink>
    </PreviewTopBar>
  );
};

export default PreviewNotification;

const PreviewTopBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font: ${({ theme }) => theme.fonts.meta};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.bodyText};
  padding: ${({ theme }) => theme.spacing.s} 0;

  @media only screen and (max-width: 30em) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const PreviewSite = styled.span`
  font: ${({ theme }) => theme.fonts.metaBold};
  color: ${({ theme }) => theme.colors.bodyText};
`;

const CommitLink = styled.a`
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
  text-decoration: none;

  :hover,
  :focus {
    outline: none;
    text-decoration-line: underline;
    text-decoration-style: wavy;
  }

  @media only screen and (max-width: 30em) {
    display: none;
  }
`;
