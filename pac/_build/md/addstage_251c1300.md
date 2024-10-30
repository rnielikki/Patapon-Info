# addStage (251c1300)

> *Other functions have the same name. Check the [Disambiguation page](./addStage.md) to find them.*

Setups stages to the world map to make them selectable.

## Code Information

- **Name**: `addStage`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 13 00`
- **Assembly Address in Memory** : `0x8b4e310`

## Parameters

- `(int)group_id` *(8 bytes)* : [Mission Group ID](./addquest.md#group_id-index), 0x3E is DLC mission.
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(int)title_msg` *(8 bytes)* : Title message index in `worldmapmsg.msg`. This is **not** PAC instruction message table.
- `(int)description_msg` *(8 bytes)* : Description message index in `worldmapmsg.msg`. This is **not** PAC instruction message table.
- `(int)left_nav_id` *(8 bytes)* : [Mission Group ID](./addquest.md#group_id-index) **to select** when being moved left. **Keep -1 to move left normally**.
- `(int)right_nav_id` *(8 bytes)* : [Mission Group ID](./addquest.md#group_id-index) **to select** when being moved right. **Keep -1 to move right normally**.
- `(int)up_nav_id` *(8 bytes)* : [Mission Group ID](./addquest.md#group_id-index) **to select** when being moved up. **Keep -1 for default value**.
- `(int)down_nav_id` *(8 bytes)* : [Mission Group ID](./addquest.md#group_id-index) **to select** when being moved down. **Keep -1 for default value**.
- `(undefined4)Var9` *(8 bytes)*
- `(float)Var10` *(8 bytes)*
- `(float)Var11` *(8 bytes)*
- `(int)Var12` *(8 bytes)*
- `(String)nav_icon_name1` : Icon name 1
- `(String)nav_icon_name2` : Icon name 2
- `(String)nav_icon_name3` : Icon name 3
- `(String)nav_icon_name4` : Icon name 4

## Example

Here is one example in hex:

```25 1c 13 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 03 00 00 00 / 04 00 00 00 / 04 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 3f / 40 00 00 00 / dc 00 00 00 / 02 00 00 00 / 00 00 00 00 / 6d 69 63 6f / 6e 5f 30 31 / 30 00 00 00 / 63 6f 6e 5f / 30 31 30 00 / 6d 69 63 6f / 6e 5f 30 31 / 30 00 00 00 / 63 6f 6e 5f / 30 31 30 00```

Which is interpreted as:

```c
addStage((int)1, (int)0, (int)0, (int)0, (int)1, (int *)iVar1, (int *)iVar2, (int *)iVar3, (int *)iVar4, (int)0, (float)1, ((global)float *)gfVar220, (int)0, "micon_010", "con_010", "micon_010", "con_010")
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4e310(int param_1,undefined4 param_2)

{
  bool bVar1;
  char cVar2;
  undefined4 *puVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  undefined4 uVar6;
  undefined4 uVar7;
  undefined4 uVar8;
  undefined4 uVar9;
  undefined4 uVar10;
  undefined4 uVar11;
  undefined4 uVar12;
  undefined4 uVar13;
  int iVar14;
  int iVar15;
  undefined4 uVar16;
  uint uVar17;
  int iVar18;
  undefined4 uVar19;
  undefined4 uVar20;
  undefined4 uVar21;
  undefined4 uVar22;
  undefined4 uVar23;
  undefined4 uVar24;
  undefined auStack284 [4];
  undefined auStack280 [4];
  undefined auStack276 [4];
  undefined auStack272 [4];
  undefined auStack268 [4];
  undefined auStack264 [4];
  undefined local_104 [4];
  undefined auStack256 [256];
  
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar20 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar19 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  uVar4 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  uVar22 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  uVar21 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  uVar5 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  uVar6 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,7,1,4);
  uVar7 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,8,1,4);
  uVar8 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,9,1,4);
  uVar9 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,10,1,4);
  uVar23 = *puVar3;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0xb,1,4);
  uVar24 = *puVar3;
  Pac_Get_Param(param_2,0xc,1,4);
  uVar10 = FUN_0883bc34(param_2);
  Pac_Get_StringParam(param_2,auStack256);
  uVar11 = FUN_0883bc34(param_2);
  Pac_Get_StringParam(param_2,auStack256);
  uVar12 = FUN_0883bc34(param_2);
  Pac_Get_StringParam(param_2,auStack256);
  uVar13 = FUN_0883bc34(param_2);
  Pac_Get_StringParam(param_2,auStack256);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar14 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x30) + 0x14),
      iVar14 != 0)) &&
     (iVar14 = FUN_Azito__08b5a738(*(undefined4 *)(iVar14 + 0x38),1,uVar20,uVar19), iVar14 != 0)) {
    iVar15 = Save::Get_Save_BaseAddr(1);
    *(undefined4 *)(iVar14 + 0x98) = 1;
    *(undefined *)(iVar14 + 0x94) = 1;
    uVar16 = FUN_Azito__08b50680(param_1);
    uVar21 = Message::Get_Message(iVar15 + 0x98,uVar16,uVar21);
    uVar16 = FUN_Azito__08b50680(param_1);
    uVar22 = Message::Get_Message(iVar15 + 0x98,uVar16,uVar22);
    FUN_Azito__08b4e908(iVar14 + 0x9c);
    *(undefined4 *)(iVar14 + 0x9c) = uVar20;
    *(undefined4 *)(iVar14 + 0xa0) = uVar19;
    *(undefined4 *)(iVar14 + 0xa4) = uVar4;
    *(undefined4 *)(iVar14 + 0xa8) = uVar10;
    *(undefined4 *)(iVar14 + 0xb0) = uVar11;
    *(undefined4 *)(iVar14 + 0xb4) = uVar12;
    *(undefined4 *)(iVar14 + 0xb8) = uVar13;
    *(undefined4 *)(iVar14 + 0xbc) = uVar22;
    *(undefined4 *)(iVar14 + 0xc0) = uVar21;
    *(undefined4 *)(iVar14 + 0xc4) = uVar5;
    *(undefined4 *)(iVar14 + 200) = uVar6;
    *(undefined4 *)(iVar14 + 0xcc) = uVar7;
    *(undefined4 *)(iVar14 + 0xd0) = uVar8;
    *(undefined4 *)(iVar14 + 0xd4) = uVar9;
    *(undefined4 *)(iVar14 + 0xd8) = uVar23;
    *(undefined4 *)(iVar14 + 0xdc) = uVar24;
    iVar14 = *(int *)(iVar14 + 0x3c) + 0x18;
    local_104[0] = 0;
    uVar17 = FUN_Azito__08b4e900(iVar14);
    if (1 < uVar17) {
      do {
        FUN_Azito__08b4e8f0(auStack264,iVar14);
        FUN_Azito__08b4e8e0(auStack268,auStack264);
        bVar1 = false;
        while( true ) {
          FUN_Azito__08b4e8d0(auStack268,auStack264);
          FUN_Azito__08b4e8a8(auStack272,auStack268,0);
          FUN_Azito__08b4e8a0(auStack276,iVar14);
          iVar15 = FUN_Azito__08b4e860(auStack264,auStack276);
          if (iVar15 != 0) break;
          FUN_Azito__08b4e8a0(auStack280,iVar14);
          iVar15 = FUN_Azito__08b4e860(auStack268,auStack280);
          if ((iVar15 != 0) || (iVar15 = FUN_Azito__08b4e860(auStack264,auStack268), iVar15 != 0))
          break;
          iVar15 = FUN_Azito__08b4e858(auStack264);
          iVar18 = FUN_Azito__08b4e858(auStack268);
          cVar2 = FUN_Azito__08b4e848(local_104,*(undefined4 *)(iVar15 + 8),
                                      *(undefined4 *)(iVar18 + 8));
          if (cVar2 == '\0') {
            FUN_Azito__08b4e8a8(auStack284,auStack264,0);
          }
          else {
            uVar4 = FUN_Azito__08b4e840(auStack264);
            uVar5 = FUN_Azito__08b4e840(auStack268);
            FUN_Azito__08b4e768(uVar4,uVar5);
            bVar1 = true;
          }
        }
      } while (bVar1);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

