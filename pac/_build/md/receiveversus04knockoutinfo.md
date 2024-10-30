# receiveVersus04KnockOutInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `receiveVersus04KnockOutInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ea 00`
- **Assembly Address in Memory** : `0x8924a9c`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924a9c(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  char *pcVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *piVar2 = -1;
  *puVar3 = 0xffffffff;
  iVar4 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if ((iVar4 != 0) && (iVar4 = *(int *)(iVar4 + 0x68) + 0x10, iVar4 != 0)) {
    iVar5 = *piVar1;
    if (iVar5 < 0) {
      pcVar6 = (char *)0x0;
    }
    else if (iVar5 < 8) {
      pcVar6 = (char *)(iVar4 + iVar5 * 8 + 4);
    }
    else {
      pcVar6 = (char *)0x0;
    }
    if (pcVar6 != (char *)0x0) {
      *piVar2 = (int)*pcVar6;
      *puVar3 = *(undefined4 *)(pcVar6 + 4);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

