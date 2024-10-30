# setDisableInvalidNoTrespassing

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setDisableInvalidNoTrespassing`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 dd 00`
- **Assembly Address in Memory** : `0x8923774`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08923774(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 != 0) {
    iVar3 = *piVar2;
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    else {
      if (iVar4 == 0) {
        iVar4 = 0;
      }
      iVar4 = *(int *)(iVar4 + 0xf8);
      if (iVar4 == 0) {
        iVar4 = 0;
      }
    }
    iVar4 = FUN_088a8650(iVar4,*puVar1);
    *(bool *)(iVar4 + 0x370) = iVar3 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

