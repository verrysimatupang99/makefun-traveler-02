// make.fun entry: exact main.ts with small improvement to arg parsing using process.argv
import * as process from 'process';

function renderLine(shout: boolean): string {
  if (shout) {
    return 'IT IS A LIBRARY WHERE EVERY PERSON ALIVE KEEPS A PRINTING PRESS, AND THEY MOSTLY USE IT TO ARGUE WITH STRANGERS AND LOOK AT PORTRAITS OF CATS.';
  }
  return 'It is a library where every person alive keeps a printing press, and they mostly use it to argue with strangers and look at portraits of cats.';
}

function parseArgs(): { shout: boolean; help: boolean } {
  const args = process.argv.slice(2);
  let shout = false;
  let help = false;
  for (const arg of args) {
    if (arg === '--shout') {
      shout = true;
    } else if (arg === '--help') {
      help = true;
    }
  }
  return { shout, help };
}

function main() {
  const { shout, help } = parseArgs();
  if (help) {
    process.stderr.write('Usage: node main.ts [--shout]\n');
    process.exit(0);
  }
  console.log(renderLine(shout));
}

main();
