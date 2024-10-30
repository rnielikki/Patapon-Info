# getPack (251c0200)

> *Other functions have the same name. Check the [Disambiguation page](./getPack.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getPack`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 02 00`
- **Assembly Address in Memory** : `0x8b4d200`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(String)Var1`

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4d200(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  undefined4 *puVar2;
  undefined *puVar3;
  undefined4 uVar4;
  undefined *puVar5;
  undefined local_100 [256];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = &DAT_00000100;
  puVar5 = local_100;
  puVar1 = puVar5;
  while (puVar1 != (undefined *)0x0) {
    *puVar5 = 0;
    puVar5 = puVar5 + 1;
    puVar3 = puVar3 + -1;
    puVar1 = puVar3;
  }
  Pac_Get_StringParam(param_2,local_100);
  if (*(int *)(param_1 + 0x10) != 0) {
    uVar4 = FUN_0889505c(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x1a4),local_100);
    *puVar2 = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

