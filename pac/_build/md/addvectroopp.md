# addVecTroopP

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `addVecTroopP`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 19 00`
- **Assembly Address in Memory** : `0x89b2e4c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 19 00 / 04 00 00 00 / 14 00 00 00 / 20 00 00 00 / 01 00 00 00 / 20 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
addVecTroopP((int *)iVar20, (float *)fVar1, (float *)fVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b2e4c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  undefined4 local_30;
  undefined4 local_2c;
  undefined4 local_28;
  undefined4 local_24;
  undefined auStack24 [4];
  undefined auStack20 [4];
  undefined auStack16 [4];
  undefined auStack12 [4];
  undefined auStack8 [4];
  undefined auStack4 [4];
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar4 != 0) {
    local_2c = *puVar3;
    local_30 = *puVar2;
    local_24 = 0x3f800000;
    local_28 = 0;
    iVar6 = *(int *)(iVar4 + 0x80);
    FUN_088ccd30(auStack4);
    uVar5 = FUN_0887de78(iVar6 + 0x40);
    FUN_0887b8d0(auStack12,uVar5);
    FUN_0887dd44(auStack4,auStack12);
    uVar5 = FUN_0887de78(iVar6 + 0x40);
    FUN_0887b8c8(auStack24,uVar5);
    iVar4 = FUN_0887b7f4(auStack4,auStack24);
    while (iVar4 != 0) {
      iVar4 = FUN_0887dcfc(auStack4);
      iVar8 = *(int *)(iVar4 + 8);
      iVar4 = (**(code **)(*(int *)(iVar8 + 4) + 0x34))(iVar8);
      if (iVar4 == 3) {
        FUN_088ccd30(auStack8);
        uVar5 = FUN_0887de78(iVar8 + 0x40);
        FUN_0887b8d0(auStack16,uVar5);
        FUN_0887dd44(auStack8,auStack16);
        uVar5 = FUN_0887de78(iVar8 + 0x40);
        FUN_0887b8c8(auStack20,uVar5);
        iVar4 = FUN_0887b7f4(auStack8,auStack20);
        while (iVar4 != 0) {
          iVar4 = FUN_0887dcfc(auStack8);
          iVar7 = *(int *)(iVar4 + 8);
          iVar4 = (**(code **)(*(int *)(iVar7 + 4) + 0x34))(iVar7);
          if (iVar4 == 9) {
            FUN_089b3074(&local_30,iVar7);
          }
          FUN_088ccd10(auStack8);
          uVar5 = FUN_0887de78(iVar8 + 0x40);
          FUN_0887b8c8(auStack20,uVar5);
          iVar4 = FUN_0887b7f4(auStack8,auStack20);
        }
      }
      FUN_088ccd10(auStack4);
      uVar5 = FUN_0887de78(iVar6 + 0x40);
      FUN_0887b8c8(auStack24,uVar5);
      iVar4 = FUN_0887b7f4(auStack4,auStack24);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

