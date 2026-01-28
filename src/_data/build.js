export default async function () {
  const sha = process.env.CF_PAGES_COMMIT_SHA || "";
  const shortSha = sha ? sha.slice(0, 7) : "local";

  return {
    // "version" for display on the site
    version: process.env.SITE_VERSION || shortSha,

    // extra useful metadata
    commit: shortSha,
    branch: process.env.CF_PAGES_BRANCH || "local",
    url: process.env.CF_PAGES_URL || "",
    builtAt: new Date().toISOString(),
  };
}