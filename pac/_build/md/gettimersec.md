# getTimerSec

Gets current seconds of the current timer.

## Code Information

- **Name**: `getTimerSec`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 a1 00`
- **Assembly Address in Memory** : `0x8922878`

## Parameters

- `(int *)time` *(8 bytes)* : Variable to *store* the current time in the timer, as seconds.

## Example

Here is one example in hex:

```25 16 a1 00 / 20 00 00 00 / 0b 00 00 00```

Which is interpreted as:

```c
getTimerSec((float *)fVar11)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08922878(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar2 != 0)) &&
      (iVar2 = *(int *)(iVar2 + 0x2c), iVar2 != 0)) && (*(int *)(iVar2 + 100) != 0)) {
    uVar3 = func_0x08b32f08();
    *puVar1 = uVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

