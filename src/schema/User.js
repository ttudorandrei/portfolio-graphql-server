// creating user schema
const User = `type User {
  username: String!
  profilePictureUrl: String!
  githubUrl: String
  name: String
  company: String
  location: String
  portfolio: String
  email: String
  aboutMe: String
  followers: Int
  publicRepos: Int
  createdAt: String
  updatedAt: String
}`;

module.exports = User;
