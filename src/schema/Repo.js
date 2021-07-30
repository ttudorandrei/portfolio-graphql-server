// creating repo schema
const Repo = `type Repo {
  repoName: String!
  repoUrl: String!
  deployedUrl: String
  repoDescription: String
  repoLanguage: String
  createdAt: String
}`;

module.exports = Repo;
