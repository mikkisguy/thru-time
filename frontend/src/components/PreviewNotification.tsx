import { format, parseISO, add } from "date-fns";
import styled from "styled-components";
import { LATEST_COMMIT_SHA, UPDATED_ON } from "../shared/constants";
import { FONTS, COLORS } from "../shared/styles/constants";

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
  background-color: ${COLORS.GRAY.DEFAULT};
  font-family: ${FONTS.SECONDARY};
  font-size: 0.8em;
  color: ${COLORS.WHITE.DARK};
  padding: 10px 0;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

const PreviewSite = styled.span`
  font-weight: bold;
  color: ${COLORS.WHITE.DEFAULT};
`;

const CommitLink = styled.a`
  color: ${COLORS.WHITE.DARK};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
