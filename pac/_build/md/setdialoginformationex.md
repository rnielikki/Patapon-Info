# setDialogInformationEx

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setDialogInformationEx`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 0f 00`
- **Assembly Address in Memory** : `0x892df88`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*
- `(uint)Var4` *(4 bytes)*
- `(int...)Vars5` *(>= 4 bytes)*

`...` means any amounts of parameter.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892df88(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  undefined4 *puVar3;
  int *piVar4;
  int *piVar5;
  int *piVar6;
  int *piVar7;
  uint *puVar8;
  int *piVar9;
  undefined4 uVar10;
  int iVar11;
  int iVar12;
  float *pfVar13;
  undefined4 *puVar14;
  int iVar15;
  uint uVar16;
  uint uVar17;
  int iVar18;
  float local_30;
  float local_2c;
  float local_28;
  float local_24;
  undefined4 local_20 [8];
  
  Get_Execution_Pause_Phase(param_2);
  Save::Get_Save_BaseAddr(1);
  uVar2 = FUN_08a1ee40(*(undefined4 *)(param_1 + 0x1c));
  puVar3 = (undefined4 *)&DAT_00000020;
  puVar14 = local_20;
  puVar1 = puVar14;
  while (puVar1 != (undefined4 *)0x0) {
    *(undefined *)puVar14 = 0;
    puVar14 = (undefined4 *)((int)puVar14 + 1);
    puVar3 = (undefined4 *)((int)puVar3 + -1);
    puVar1 = puVar3;
  }
  piVar4 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar7 = (int *)Pac_Get_Param(param_2,3,1,4);
  puVar8 = (uint *)Pac_Get_Param(param_2,4,0,4);
  uVar17 = DAT_08a70d08;
  if ((int)*puVar8 < (int)DAT_08a70d08) {
    uVar17 = *puVar8;
  }
  iVar15 = 0;
  if (0 < (int)uVar17) {
    puVar14 = local_20;
    do {
      piVar9 = (int *)Pac_Get_Param(param_2,5,0,4);
      iVar18 = *piVar9;
      if (iVar18 < 0) {
        uVar10 = 0;
      }
      else {
        iVar11 = FUN_0883bc1c(param_2);
        iVar12 = Save::Get_Save_BaseAddr(1);
        uVar10 = Message::Get_MsgAddr_With_FullID(iVar12 + 0x98,*(undefined4 *)(iVar11 + iVar18));
      }
      *puVar14 = uVar10;
      iVar15 = iVar15 + 1;
      puVar14 = puVar14 + 1;
    } while (iVar15 < (int)uVar17);
  }
  FUN_08a1df88(uVar2,&DAT_08a60088);
  uVar16 = 0;
  if (uVar17 != 0) {
    puVar14 = local_20;
    do {
      FUN_08a1e190(uVar2,*puVar14);
      uVar16 = uVar16 + 1;
      puVar14 = puVar14 + 1;
    } while (uVar16 < uVar17);
  }
  FUN_08a1e1c8(uVar2);
  local_28 = (float)*piVar6;
  local_24 = (float)*piVar7;
  FUN_08a1e91c(uVar2,&local_28);
  pfVar13 = (float *)FUN_08a1e878(uVar2);
  local_2c = (float)*piVar5 - pfVar13[1] * 0.5;
  local_30 = (float)*piVar4 - *pfVar13 * 0.5;
  FUN_08a1e7d8(uVar2,&local_30);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

