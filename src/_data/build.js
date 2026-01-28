export default async function () {
  const sha = process.env.CF_PAGES_COMMIT_SHA || "";
  const shortSha = sha ? sha.slice(0, 7) : "local";

  const branch = process.env.CF_PAGES_BRANCH || "local";
  const isMain = branch === "main";

  // Only show the git tag (SITE_VERSION) on main; for preview branches, show a commit-based version.
  const version = isMain
    ? (process.env.SITE_VERSION || shortSha)
    : `${branch}@${shortSha}`;

  return {
    // "version" for display on the site
    version,

    // extra useful metadata
    commit: shortSha,
    branch,
    url: process.env.CF_PAGES_URL || "",
    builtAt: new Date().toISOString(),
  };
}