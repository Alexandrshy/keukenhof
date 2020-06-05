module.exports = {
    branch: 'master',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/changelog',
        ['@semantic-release/git', {assests: ['changelog.md']}],
        '@semantic-release/npm',
        '@semantic-release/release-notes-generator',
    ],
};
