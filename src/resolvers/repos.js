const { fetchDataFromGithub } = require("../utils/fetchers/github");

const repos = async () => {
  const data = await fetchDataFromGithub(
    "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=ttudorandrei"
  );

  return data.map((each) => {
    return {
      repoName: each.repo,
      repoUrl: each.link,
      repoLanguage: each.language,
      repoForks: each.forks,
    };
  });
};

module.exports = repos;
