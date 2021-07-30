// importing dev created dependencies
const { fetchDataFromGithub } = require("../utils/fetchers/github");

// resolver for repos
const repos = async () => {
  const data = await fetchDataFromGithub(
    "https://api.github.com/users/ttudorandrei/starred"
  );

  return data.map((each) => {
    return {
      repoName: each.name,
      repoUrl: each.html_url,
      deployedUrl: each.homepage,
      repoDescription: each.description,
      repoLanguage: each.language,
      createdAt: each.created_at,
    };
  });
};

module.exports = repos;
