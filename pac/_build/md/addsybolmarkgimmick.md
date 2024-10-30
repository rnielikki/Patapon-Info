# addSybolMarkGimmick

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `addSybolMarkGimmick`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 e1 00`
- **Assembly Address in Memory** : `0x8926740`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 e1 00 / 04 00 00 00 / 03 00 00 00 / 04 00 00 00 / 01 00 00 00 / 08 00 00 00 / 8a 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
addSybolMarkGimmick((int *)iVar3, (int *)iVar1, ((global)int *)giVar138, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926740(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,
                 undefined4 param_5,undefined4 param_6,undefined4 param_7,undefined4 param_8)

{
  undefined *puVar1;
  int *piVar2;
  int *piVar3;
  undefined4 *puVar4;
  undefined *puVar5;
  int iVar6;
  undefined *puVar7;
  undefined4 discpath;
  undefined4 filepath;
  undefined4 uVar8;
  undefined4 uVar9;
  int iVar10;
  undefined local_40 [64];
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar10 = *piVar3;
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  uVar8 = *puVar4;
  discpath = 1;
  filepath = 4;
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3);
  uVar9 = *puVar4;
  *piVar2 = -1;
  puVar5 = (undefined *)0x40;
  puVar7 = local_40;
  puVar1 = puVar7;
  while (puVar1 != (undefined *)0x0) {
    *puVar7 = 0;
    puVar7 = puVar7 + 1;
    puVar5 = puVar5 + -1;
    puVar1 = puVar5;
  }
  if (iVar10 == -1) {
    Data::Load_from_path
              (local_40,s_TeamFlagMissionDefault_08a5fd70,discpath,filepath,param_5,param_6,param_7,
               param_8);
    iVar10 = *(int *)(param_1 + 0x10);
  }
  else {
    Data::Load_from_path
              (local_40,s_TeamFlagMission_04d_08a5fd88,iVar10,filepath,param_5,param_6,param_7,
               param_8);
    iVar10 = *(int *)(param_1 + 0x10);
  }
  if (iVar10 == 0) {
    iVar10 = 0;
  }
  iVar10 = Find_Target_By_HandleID(*(undefined4 *)(iVar10 + 0xe8),uVar8,1);
  if (iVar10 != 0) {
    iVar6 = *(int *)(param_1 + 0x10);
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    iVar6 = Place_Gimmick_Caller
                      (*(undefined4 *)(iVar6 + 0x108),599,(int)*(char *)(iVar10 + 0x98),0,local_40);
    Gimmick::Gimmick_Set_Position(iVar6,iVar10,uVar9,0);
    *(uint *)(iVar6 + 0x120) = *(uint *)(iVar6 + 0x120) | 8;
    *piVar2 = (int)*(short *)(iVar6 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

