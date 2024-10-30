# Code of Conduct

## Terms

- **Address** means address **from the PAC file offset**.
- **Jump** means **Go to** the instruction in the specific Address. This does not read next line. (See also [cmd_jmp](../cmd_jmp.md))
- **Call** means **Jump and go back**, it is like *calling function* in programming. (See also [cmd_call](../cmd_call.md))
- **Generator** is the term here that has multiple *reqActors* (reqActor here means, the one that can apply setReqActorXXX etc).
- The constant variable is called *immediate*, following how assembly calls it.

## Notations

- ` *` is marked for variables. For example, `(int *)` means int variable.
  - For global, mention global like `((global) int *)`
  - Disclaimer: I am not a C++ developer or smth (shrug). If you really hate it because this is incorrect notation in C++, do not use this docs or fork by yourself, and good luck with dealing with around 900 instructions.
- `(...)` in parameter type means multiple parameters.

## Other notes

- All in-memory function addresses follow EU Vanilla version.
- **All parameters list in `# Parameters` section are ordered same as the usage order**. First in the list is first parameter and second in the list is second parameter and so on.