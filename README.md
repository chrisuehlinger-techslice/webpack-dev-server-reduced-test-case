# `webpack-dev-server` Reduced Test Case

## Steps to Reproduce

1. Install Fiddler Classic: https://www.telerik.com/fiddler/fiddler-classic
2. Clone this repo on a Windows 10 machine
3. Run `yarn` to install dependencies
4. Run `yarn run dev:serve` to start `webpack-dev-server`
5. Open a browser to https://localhost:8904/
6. Sometimes the issue happens immediately. Sometimes it requires a couple refreshes, a couple browsers/tabs or just some time

### Expected Results

Webpack continues to function

### Actual Results

The following error shows up in the terminal:
```
C:\Dev\webpack-dev-server-reduced-test-case\node_modules\webpack-dev-server\lib\Server.js:698
        client.terminate();
               ^

TypeError: client.terminate is not a function
    at Server.<anonymous> (C:\Dev\webpack-dev-server-reduced-test-case\node_modules\webpack-dev-server\lib\Server.js:698:16)
    at Server.emit (events.js:327:22)
    at App.emit (C:\Dev\webpack-dev-server-reduced-test-case\node_modules\sockjs\lib\sockjs.js:196:29)
    at C:\Dev\webpack-dev-server-reduced-test-case\node_modules\sockjs\lib\transport.js:111:25
    at processTicksAndRejections (internal/process/task_queues.js:79:11)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

