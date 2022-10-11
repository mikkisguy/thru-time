import { format } from "date-fns";
import styled from "styled-components";
import { LATEST_COMMIT_SHA, UPDATED_ON } from "../shared/constants";
import { FONTS, COLORS } from "../shared/styles/constants";

const PreviewNotification = () => {
  return (
    <PreviewTopBar>
      <PreviewSite>Preview site</PreviewSite>
      <span>
        Updated
        {format(UPDATED_ON ? UPDATED_ON : new Date(), " yyyy-MM-dd HH:mm:ss O")}
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
  background-color: ${COLORS.GRAY.DEFAULT};
  font-family: ${FONTS.TERTIARY};
  font-size: 1em;
  color: ${COLORS.TURQUOISE.DEFAULT};
  padding: 5px 0;
`;

const PreviewSite = styled.span`
  font-weight: bold;
`;

const CommitLink = styled.a`
  color: ${COLORS.TURQUOISE.DEFAULT};

  :hover {
    text-decoration: none;
  }
`;
