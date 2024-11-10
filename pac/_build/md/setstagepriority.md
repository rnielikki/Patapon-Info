# setStagePriority

**This is not functional**. Do not use this.

## Code Information

- **Name**: `setStagePriority`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 85 00`
- **Assembly Address in Memory** : `0x89215a0`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(String)Var2`

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089215a0(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  int *piVar2;
  undefined4 *puVar3;
  undefined *puVar4;
  int iVar5;
  undefined *puVar6;
  undefined local_100 [256];
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar4 = &DAT_00000100;
  puVar6 = local_100;
  puVar1 = puVar6;
  while (puVar1 != (undefined *)0x0) {
    *puVar6 = 0;
    puVar6 = puVar6 + 1;
    puVar4 = puVar4 + -1;
    puVar1 = puVar4;
  }
  Pac_Get_StringParam(param_2,local_100);
  if (*(int *)(param_1 + 0x10) != 0) {
    if (*piVar2 < 0x16) {
      iVar5 = *(int *)(*piVar2 * 4 + *(int *)(*(int *)(param_1 + 0x10) + 0x118) + 0x5640);
    }
    else {
      iVar5 = 0;
    }
    if (iVar5 != 0) {
      (**(code **)(*(int *)(iVar5 + 0x3c) + 0x14))(iVar5 + 0x20,*puVar3);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

