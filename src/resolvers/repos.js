const repos = () => {
  const data = await fetchDataFromGithub(
    "https://api.github.com/users/ttudorandrei/repos"
  );

  console.log(data);

  return {
    repoName: data.name,
    repoUrl: data.html_url,
    createdAt: data.created_at,
  };
};

module.exports = repos;
