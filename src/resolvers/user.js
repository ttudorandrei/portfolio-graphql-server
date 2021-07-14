const { fetchDataFromGithub } = require("../utils/fetchers/github");

const user = async () => {
  const data = await fetchDataFromGithub(
    "https://api.github.com/users/ttudorandrei"
  );

  console.log(data);

  return {
    username: data.login,
    profilePictureUrl: data.avatar_url,
    githubUrl: data.html_url,
    name: data.name,
    company: data.company,
    location: data.location,
    portfolio: data.blog,
    email: data.email,
    aboutMe: data.bio,
    followers: data.followers,
    publicRepos: data.public_repos,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
};

module.exports = user;
