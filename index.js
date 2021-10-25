const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    const token = core.getInput('repo-token');
    const octokit = github.getOctokit(token);
    const { context = {} } = github;
    const { pull_request } =context.payload;
    await octokit.issues.createComment({
        issue_number: pull_request.number,
        body: 'Hi,First program',
        ...context.repo,
    });
} 

run();