# setNoTrespassing

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setNoTrespassing`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 dc 00`
- **Assembly Address in Memory** : `0x89236b4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089236b4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 != 0) {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      if (iVar3 == 0) {
        iVar3 = 0;
      }
      iVar3 = *(int *)(iVar3 + 0xf8);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
    iVar3 = FUN_088a8650(iVar3,*puVar1);
    FUN_08954fb8(*puVar2,iVar3 + 0x2b0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

