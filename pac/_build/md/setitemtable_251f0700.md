# setItemTable (251f0700)

> *Other functions have the same name. Check the [Disambiguation page](./setItemTable.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setItemTable`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 07 00`
- **Assembly Address in Memory** : `0x8b5c3a8`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5c3a8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else if (*piVar1 == -1) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar3 + 0x2c8));
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (iVar3 != 0) {
    *(undefined4 *)(iVar3 + 0x28) = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

