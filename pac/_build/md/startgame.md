# startGame

Starts to play the game. Followed after [isGoGame](./isgogame.md).

## Code Information

- **Name**: `startGame`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 6b 00`
- **Assembly Address in Memory** : `0x8920714`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 6b 00```

Which is interpreted as:

```c
startGame()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920714(int param_1,undefined4 param_2)

{
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_0889dda8();
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

