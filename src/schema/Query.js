// creating query schema
const Query = `type Query {
  user: User
  repos: [Repo]
}`;

module.exports = Query;
