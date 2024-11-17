# Troubleshooting

## How to Debug

> [!WARNING]
> Debug tool works only in Windows.

### Checking parameter values

`0x0883ce54` (EU ver) returns address that contains parameter value.

If you want to know the parameter value at certain point, in certain address:

1. Make sure the [PAC instruction will be called](#the-instruction-is-not-called). If not sure, [it can be started from the first](#editing-the-pac-instruction-in-ppsspp).
2. Read breakpoint the value part (*not* type part) of the parameter (`Ctrl+D` and press "Breakpoint" on the top).
   - For example `04 00 00 00 08 01 00 00`, set breakpoint to the `08 01 00 00`.
3. Press *Step Out* button **once**.
4. type `v0` in memory viewer *Goto* field, and it will lead to the actual parameter value.

### Editing the PAC instruction in PPSSPP

**Savestate** is great for the troubleshooting.

This is how to debug the mission.

1. Savestate the game just before deploying.
2. Deploy, but stay on tip screen.
3. Find the address where the mission PAC instructions are (anywhere), and set write breakpoint to there.
4. Load the savestate from 1 and deploy again.
5. When the PAC instruction is written, and the breakpoint is activated, savestate it (in same or different place).
6. Edit the desired place and press Go (F8).

In this way, you can press F8 to pause at any time, and load the savestate from 5, edit, and continue.

This method is good for e.g. positioning entities.

## Troubleshoot

### The instruction is not called?

1. Find the instruction from the memory.
2. Read breakpoint it (`Ctrl+D` and press "Breakpoint" on the top).
3. If it is not read, check if you forgot to call the instruction. If it is read, it is another issue.
4. If you didn't forget but it's not called, check other condition like [cmd_ifEQ](../cmd_ifeq.md).
   - Check the parameter and typo.

Unfortunately, there is no way to debug like modern debugging tool, so be patient.

### Why the model is not loaded?

Check if the handle is greater than zero. If it does, maybe it can be one of them:

- Make sure [readArcFile](../readarcfile.md) and [requestActor](../requestactor.md) is [missionTimming 0](./how-to-define-a-mission.md).
   - `requestActor` does not need in some case like [setReqActorType](../setreqactortype.md) by the way.
- Make sure the position is correct and not out of the bound.
- If still does not work, check if [the entity amount is set to 1](../setreqactorcount.md) (default is 0 and it won't work).

If the handle is negative, check out:

- Check if it is [created](../create.md) with [reqActorType](../setreqactortype.md) *in missionTimming 1*
   - If it did, check if it is [spawned](../spawn.md) *in missionTimming 2*.

Last but not least, **check the typo**, and [**check the order**](./how-to-define-a-mission.md).

### It crashes or does infinite loading.

- [**Do not resize the PAC instruction from middle**](./writing-pac.md).
- Check if the function calls or jumps to invalid address.
- Check if you forgot [cmd_end](../cmd_end.md).
- Some resources (probably from Patapon 1 or 2) don't exist, or will refuse to load normally (e.g. Gargoyle chest).
   - Try deleting (filling the instruction to 0) them and try again, and if the game is loaded, it's probably the resource issue.
- **Check the typo**.
- Check if the instruction has invalid parameter (enum out of bounds).
   - This applies to only few instructions.

### Still it doesn't work!

Maybe the instruction might not work as your expectation.

Make sure you understood the instruction correctly, and ask experienced people for help.