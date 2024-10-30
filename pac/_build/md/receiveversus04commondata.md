# receiveVersus04CommonData

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `receiveVersus04CommonData`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 2c 01`
- **Assembly Address in Memory** : `0x8927d34`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(uint)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08927d34(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  uint *puVar3;
  uint uVar4;
  int iVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  *puVar3 = 0;
  iVar6 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if (iVar6 != 0) {
    iVar5 = *piVar1;
    if (iVar5 == 2) {
      *puVar3 = (uint)*(byte *)(*(int *)(iVar6 + 0x68) + 0xc4);
    }
    else if (iVar5 == 1) {
      iVar5 = *piVar2;
      if ((iVar5 < 0) || (1 < iVar5)) {
        uVar4 = 0xffffffff;
      }
      else {
        uVar4 = *(uint *)(iVar5 * 4 + *(int *)(iVar6 + 0x68) + 0xbc);
      }
      *puVar3 = uVar4;
    }
    else if (iVar5 == 0) {
      *puVar3 = *(uint *)(*(int *)(iVar6 + 0x68) + 0xb8);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

