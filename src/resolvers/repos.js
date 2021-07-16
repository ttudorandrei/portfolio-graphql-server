const { fetchDataFromGithub } = require("../utils/fetchers/github");

const repos = async () => {
  const data = await fetchDataFromGithub(
    "https://api.github.com/users/ttudorandrei/starred"
  );

  return data.map((each) => {
    return {
      repoName: each.name,
      repoUrl: each.html_url,
      repoLanguage: each.language,
      createdAt: each.created_at,
    };
  });
};

module.exports = repos;
