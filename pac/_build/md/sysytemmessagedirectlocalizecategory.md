# sysytemMessageDirectLocalizeCategory

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sysytemMessageDirectLocalizeCategory`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 05 00`
- **Assembly Address in Memory** : `0x892c388`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(float)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*
- `(undefined4)Var5` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892c388(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  float *pfVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  int iVar7;
  undefined4 uVar8;
  uint uVar9;
  float fVar10;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  pfVar4 = (float *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  FUN_0892d470(param_1);
  iVar7 = Save::Get_Save_BaseAddr(1);
  *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x34c) = 0;
  *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x354) = 0x3e800000;
  *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a0) = 0;
  *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a4) = 0;
  *(undefined4 *)(*(int *)(param_1 + 0x2c) + 0x1a4) = 1;
  local_8 = *puVar3;
  local_4 = local_8;
  FUN_089350e8(*(undefined4 *)(param_1 + 0x2c),&local_8);
  FUN_089353d0(*(undefined4 *)(param_1 + 0x2c),param_1 + 0x23c);
  uVar8 = Message::Get_Message(iVar7 + 0x98,*puVar5,*puVar6);
  FUN_089352a0(*(undefined4 *)(param_1 + 0x2c),uVar8,0);
  fVar10 = *pfVar4 * 4800.0;
  if (fVar10 < 2.147484e+09) {
    uVar9 = (uint)fVar10;
  }
  else {
    uVar9 = (int)(fVar10 - 2.147484e+09) | 0xffff8000;
  }
  *(uint *)(*(int *)(param_1 + 0x2c) + 0x358) = uVar9;
  local_c = *puVar2;
  local_10 = *puVar1;
  FUN_08939140(*(undefined4 *)(param_1 + 0x2c),&local_10);
  uVar8 = *puVar2;
  iVar7 = *(int *)(param_1 + 0x2c);
  *(undefined4 *)(iVar7 + 0x170) = *puVar1;
  *(undefined4 *)(iVar7 + 0x174) = uVar8;
  (**(code **)(*(int *)(*(int *)(param_1 + 0x2c) + 0x32c) + 0x14))
            (*(int *)(param_1 + 0x2c) + 0x310,*(undefined4 *)(param_1 + 0x244));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

