- Install deno:
```curl -fsSL https://deno.land/install.sh | sh```

- Run `deno install`

- Install `Deno` VS Code extension by `denoland`

- Run ```deno test --allow-read``` or use the Extention UI test-runner (small green triangle).

- To run tests with breakpoints, go to "Run and Debug" and add a run config like:
```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "request": "launch",
            "name": "Debug Deno Tests",
            "type": "node",
            // "program": "${workspaceFolder}/main.ts",
            "cwd": "${workspaceFolder}",
            "env": {},
            "runtimeExecutable": "/Users/bjorn/.deno/bin/deno",
           "runtimeArgs": [
                /* modified: was generated as "run", but you asked about testing */
                "test",

                /* modified: was generated as "--inspect", but using this option
                causes an initial break to wait for the debugger to attach */
                "--inspect-brk",

                /* disabled: allowing all permissions is unsafe: only allow
                the specific permissions that your scripts need */
                "--allow-all"
            ],
            "attachSimplePort": 9229
        }
    ]
}
```