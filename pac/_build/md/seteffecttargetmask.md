# setEffectTargetMask

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setEffectTargetMask`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 d1 00`
- **Assembly Address in Memory** : `0x8925a90`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*
- `(int)Var4` *(8 bytes)*
- `(int)Var5` *(8 bytes)*
- `(int)Var6` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 d1 00 / 08 00 00 00 / ff 01 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setEffectTargetMask(((global)int *)giVar511, (int)1, (int)1, (int)1, (int)1, (int)0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08925a90(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  int *piVar5;
  int *piVar6;
  int *piVar7;
  int iVar8;
  int iVar9;
  uint uVar10;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  piVar7 = (int *)Pac_Get_Param(param_2,6,1,4);
  iVar8 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  iVar9 = (**(code **)(*(int *)(iVar8 + 4) + 0x34))(iVar8);
  if (iVar9 == 0xb) {
    if (iVar8 != 0) {
      uVar10 = (uint)(*piVar2 != 0);
      if (*piVar3 == 0) {
        iVar9 = *piVar4;
      }
      else {
        uVar10 = uVar10 | 4;
        iVar9 = *piVar4;
      }
      if (iVar9 == 0) {
        iVar9 = *piVar5;
      }
      else {
        uVar10 = uVar10 | 0x10;
        iVar9 = *piVar5;
      }
      if (iVar9 == 0) {
        iVar9 = *piVar6;
      }
      else {
        uVar10 = uVar10 | 0x40;
        iVar9 = *piVar6;
      }
      if (iVar9 == 0) {
        iVar9 = *piVar7;
      }
      else {
        uVar10 = uVar10 | 0x100;
        iVar9 = *piVar7;
      }
      if (iVar9 != 0) {
        uVar10 = uVar10 | 0x200;
      }
      FUN_088d5290(iVar8,uVar10);
    }
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

