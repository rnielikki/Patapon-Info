# setupEndDungeonWall

Ends dungeon wall setup, expected to be calle after bunch of e.g.[setupAddDungeonWall](./setupadddungeonwall.md).

## Code Information

- **Name**: `setupEndDungeonWall`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 67 00`
- **Assembly Address in Memory** : `0x8920530`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 67 00```

Which is interpreted as:

```c
setupEndDungeonWall()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920530(int param_1,undefined4 param_2)

{
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_08972690(*(int *)(*(int *)(param_1 + 0x10) + 0x118) + 0x4320);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

