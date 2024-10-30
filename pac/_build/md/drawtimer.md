# drawTimer

Draw the timer as seconds only. This timer is paused by default, resuming will result incrementing the number as `minute:second` format.

## Code Information

- **Name**: `drawTimer`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1b 01`
- **Assembly Address in Memory** : `0x8929fc0`

## Parameters

- `(float)time` *(8 bytes)* : Time to display.

## Example

Here is one example in hex:

```25 16 1b 01 / 20 00 00 00 / 0a 00 00 00```

Which is interpreted as:

```c
drawTimer((float *)fVar10)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08929fc0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar2 != 0)) &&
      (iVar2 = *(int *)(iVar2 + 0x2c), iVar2 != 0)) && (*(int *)(iVar2 + 100) != 0)) {
    func_0x08b32f40(*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

