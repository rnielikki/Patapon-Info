# dispSetVersusString

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `dispSetVersusString`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 f7 00`
- **Assembly Address in Memory** : `0x8927510`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08927510(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int *piVar3;
  int *piVar4;
  undefined4 *puVar5;
  int iVar6;
  undefined4 uVar7;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  uVar7 = *(undefined4 *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x68);
  if (*piVar1 == 2) {
    iVar6 = func_0x08b36458(uVar7);
  }
  else if (*piVar1 == 1) {
    iVar6 = func_0x08b36460(uVar7,*puVar2);
  }
  else {
    iVar6 = func_0x08b36450();
  }
  if (iVar6 != 0) {
    if (*piVar3 == 1) {
      if (*piVar1 != 2) {
        func_0x08b360f0(*puVar5,iVar6,*piVar4);
      }
    }
    else {
      func_0x08b360e8(iVar6,*piVar4 != 0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

