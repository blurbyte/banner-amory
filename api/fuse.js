const { FuseBox } = require('fuse-box');
const { src, task, context } = require('fuse-box/sparky');

// context availible for all tasks
context(class {
  getConfig() {
    return FuseBox.init({
      homeDir: 'src',
      target: 'server@es2017',
      output: 'dist/$name.js',
      cache: true,
      sourceMaps: true
    });
  }

  createBundle(fuse) {
    const app = fuse.bundle('server');

    app
      .instructions('> [index.ts]')
      .watch()
      .completed(proc => proc.start());

    return app;
  }
});

// removes dist directory
task('clean', () => src('dist').clean('dist').exec());

// tasks
task('default', ['clean'], async context => {
  const fuse = context.getConfig();

  context.createBundle(fuse);

  await fuse.run();
});
