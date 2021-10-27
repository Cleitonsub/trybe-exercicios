
const githubApi = require('./githubApi');

describe('A função getRepos', () => {
  test('Verifica que os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram na lista.', async () => {

    expect.assertions(1);

    const { getRepos } = githubApi;

    const userRepo = await getRepos('https://api.github.com/orgs/tryber/repos');

    expect(userRepo).toContain(['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator']);
  });
});
