# addQuest

Adds a quest on a map. **Called in a world map**.

## Code Information

- **Name**: `addQuest`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 14 00`
- **Assembly Address in Memory** : `0x8b4e958`

## Parameters

- `(int)mission_id` *(8 bytes)* : ID of the mission, the id is *unique in the map*.
   - The mission ID can be duplicated in different world map.
- `(int)group_id` *(8 bytes)* : Group of the mission. Same group ID will be placed in same category in the world map. See details below.
   - Note this is different from given ID in [addArea](./addarea.md), and this considers "depths" dungeon as separated group.
- `(int)name_msg` *(8 bytes)* : Message ID of the mission name.
- `(int)description_msg` *(8 bytes)* : Message ID of the description.
   - The message IDs are ID in `loadinggroup/azitolocal/localize/(language)/worldmapdata/scriptlist`(non-dlc) or inside `98D1E9D2` (dlc), the message IDs are NOT defined in the PAC file.
- `(int)theme_id` *(8 bytes)* : Default [theme ID](./guide/reference-table.md#theme-ids). Custom (selected) theme or [setMssionBgmId](./setmssionbgmid.md) overwrites this.
- `(int)vs_type` *(8 bytes)* : Affects VS rule screen. 0: PVE Mission, 1: Head-on, 2: Missile, 3:Racing, 4: Hellgate (unused).
- `(bool)optional_mission` *(8 bytes)* : If this is 0, it means this is necessary story mission for story progress.
- `(bool)Var7` *(8 bytes)* : Keep this as 1. Please describe what this actually does.
- `(bool)new_mission` *(8 bytes)* : Mark the mission as new mission.
- `(bool)is_replayable` *(8 bytes)* : If this is not zero, the mission can be played again after finishing it.
- `(String)Pac_file_name` : Name of the PAC file.

### `group_id` index

|ID|Group Name|
|---|---|
|0x1|Pataon training ground|
|0x2|Field of Angry Giants|
|0x3|Arena of Valour|
|0x4|Cave of Valour|
|0x5|Depths of Rage|
|0x6|Snow Field of Sullid Tears|
|0x7|Racing Alley of Purity|
|0x8|Tower of Purity|
|0x9|Heights of Lust|
|0xA|Plateau of Popmous Wings|
|0xB|Range of Justice|
|0xC|Castle of Justice|
|0xD|Dungeon of Pride|
|0xE|Greedy Mask Jungle|
|0xF|Arena of Earnestness|
|0x10|Estate of Earnestness|
|0x11|Basement of Greed|
|0x12|Bottomless Stomach Desert|
|0x13|Racing Alley of Restraint|
|0x14|Labyrinth of Restraint|
|0x15|Depths of Gluttony|
|0x16|Volcano Zone of the Lazy Demon|
|0x17|Range of Adamance|
|0x18|Evilmass of Adamance|
|0x19|Heights of Indolence|
|0x1A|Savannah of Envious Eyes|
|0x1B|Arena of Tolerance|
|0x1C|Tomb of Tolerance|
|0x1D|Depths of Jealousy|
|0x3E|DLC Mission selector|

## Example

Here is one example in hex:

```25 1c 14 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 3c 00 00 00 / 02 00 00 00 / 3d 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 08 00 00 00 / 39 00 00 00 / 08 00 00 00 / 3a 00 00 00 / 4d 69 73 73 / 69 6f 6e 5f / 30 31 5f 30 / 30 2e 70 61 / 63 00 00 00```

Which is interpreted as:

```c
addQuest((int)1, (int)1, (int)60, (int)61, (int)1, (int)0, (int)1, (int)1, ((global)int *)giVar57, ((global)int *)giVar58, "Mission_01_00.pac")
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4e958(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  int *piVar6;
  int iVar7;
  int iVar8;
  undefined4 uVar9;
  int iVar10;
  int iVar11;
  undefined4 uVar12;
  undefined4 uVar13;
  undefined4 uVar14;
  undefined4 uVar15;
  undefined4 uVar16;
  undefined auStack256 [256];
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar14 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar13 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  uVar16 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  uVar15 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  uVar2 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  uVar3 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  uVar4 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,7,1,4);
  uVar5 = *puVar1;
  piVar6 = (int *)Pac_Get_Param(param_2,8,1,4);
  iVar7 = *piVar6;
  piVar6 = (int *)Pac_Get_Param(param_2,9,1,4);
  iVar8 = *piVar6;
  uVar9 = FUN_0883bc34(param_2);
  Pac_Get_StringParam(param_2,auStack256);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar10 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x30) + 0x14),
      iVar10 != 0)) &&
     (iVar10 = FUN_Azito__08b5a738(*(undefined4 *)(iVar10 + 0x38),2,uVar14,uVar13), iVar10 != 0)) {
    iVar11 = Save::Get_Save_BaseAddr(1);
    *(undefined4 *)(iVar10 + 0x98) = 2;
    *(undefined *)(iVar10 + 0x94) = 1;
    uVar12 = FUN_Azito__08b50680(param_1);
    uVar15 = Message::Get_Message(iVar11 + 0x98,uVar12,uVar15);
    uVar12 = FUN_Azito__08b50680(param_1);
    uVar16 = Message::Get_Message(iVar11 + 0x98,uVar12,uVar16);
    *(undefined4 *)(iVar10 + 0x9c) = 0xffffffff;
    *(undefined4 *)(iVar10 + 0xa0) = 0xffffffff;
    *(undefined4 *)(iVar10 + 0xa4) = 1;
    *(undefined4 *)(iVar10 + 0xa8) = 0;
    *(undefined4 *)(iVar10 + 0xac) = 0;
    *(undefined4 *)(iVar10 + 0xb0) = 0;
    *(undefined4 *)(iVar10 + 0xb4) = 0;
    *(undefined4 *)(iVar10 + 0xb8) = 0;
    *(undefined4 *)(iVar10 + 0xbc) = 0xffffffff;
    *(undefined4 *)(iVar10 + 0xc0) = 0;
    *(undefined4 *)(iVar10 + 0xc4) = 0;
    *(undefined4 *)(iVar10 + 200) = 1;
    *(undefined *)(iVar10 + 0xcc) = 0;
    *(undefined *)(iVar10 + 0xcd) = 1;
    *(undefined4 *)(iVar10 + 0x9c) = uVar14;
    *(undefined4 *)(iVar10 + 0xa0) = uVar13;
    *(undefined4 *)(iVar10 + 0xa4) = uVar2;
    *(undefined4 *)(iVar10 + 0xa8) = uVar3;
    *(undefined4 *)(iVar10 + 0xac) = uVar9;
    *(undefined4 *)(iVar10 + 0xb0) = uVar16;
    *(undefined4 *)(iVar10 + 0xb4) = uVar15;
    *(undefined4 *)(iVar10 + 0xb8) = 0;
    *(undefined4 *)(iVar10 + 0xbc) = 0xffffffff;
    *(undefined4 *)(iVar10 + 0xc0) = 0;
                    // story or non-story mission? 0x1: non-story
    *(undefined4 *)(iVar10 + 0xc4) = uVar4;
    *(undefined4 *)(iVar10 + 200) = uVar5;
                    // "new mission"
    *(bool *)(iVar10 + 0xcc) = iVar7 != 0;
                    // "if Mission finished" flag
    *(bool *)(iVar10 + 0xcd) = iVar8 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

