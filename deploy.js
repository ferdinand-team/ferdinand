const execa = require('execa');
const fs = require('fs');
const path = require('path');

const main = async () => {
  try {
    console.log('Building started...');
    await execa('npm', ['run', 'build']);
    const folderName = fs.existsSync('dist') ? 'dist' : 'build';

    await execa('git', ['init'], { cwd: folderName });
    await execa('git', ['add', '-A'], { cwd: folderName });
    await execa('git', ['commit', '-m', 'automated deploy'], { cwd: folderName });
    console.log('Deploying to Github.io');
    await execa('git', ['remote', 'add', 'origin', 'https://github.com/ferdinand-team/ferdinand-team.github.io.git'], { cwd: folderName });
    await execa('git', ['push', '-f', '-u', 'origin', 'master'], { cwd: folderName });
    console.log('Successfully deployed');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
};

main();
