const core = require('@actions/core');
const { context, GitHub } = require('@actions/github');
const token = core.getInput('repo-token');
const octokit = new GitHub(token);

octokit.issues.createComment({
    issue_number: 1,
    body: 'Hi,First program',
    ...context.repo,
});