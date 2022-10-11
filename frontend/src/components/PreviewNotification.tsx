import { LATEST_COMMIT_SHA } from "../shared/constants";

const PreviewNotification = () => {
  return (
    <p>
      [
      <a
        href={`https://github.com/mikkisguy/thru-time/commit/${LATEST_COMMIT_SHA}`}
        target="_blank"
      >
        preview site
      </a>
      ]
    </p>
  );
};

export default PreviewNotification;
