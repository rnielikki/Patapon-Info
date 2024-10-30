# isGoGame

Check if the game is fully ready to go after "press any key to continue" in tip screen. If the this is 1, [startGame](./startgame.md) is called.

## Code Information

- **Name**: `isGoGame`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 6e 00`
- **Assembly Address in Memory** : `0x892080c`

## Parameters

- `(int *)is_ready` *(8 bytes)* : Variable to *store* if the game is ready, 0 is not ready yet, 1 is ready.

## Example

Here is one example in hex:

```25 16 6e 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isGoGame((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892080c(int param_1,undefined4 param_2)

{
  uint *puVar1;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  if (*(int *)(param_1 + 0x10) != 0) {
    *puVar1 = (uint)*(byte *)(*(int *)(param_1 + 0x10) + 0x4b);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

