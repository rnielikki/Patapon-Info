# getPlayerSquadHandle

Gets a *squad handle* of the player squad member.

## Code Information

- **Name**: `getPlayerSquadHandle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 39 00`
- **Assembly Address in Memory** : `0x891d1bc`

## Parameters

- `(int *)destination` *(8 bytes)* : Destination ID to store the squad handle. **Stores -1 if the unit doesn't exist**.
- `(int)player_type` *(8 bytes)* : PlayerSquad ID of the player.

Here is the "PlayerSquad ID" table:

|`player_type`|Unit|
|---|---|
|0|UberHero|
|1|Ton|
|2|Chin|
|3|Kan|
|4|Dark Hero|
|5|Hatapon|
|6|???|

## Example

Here is one example in hex:

```25 16 39 00 / 04 00 00 00 / 03 00 00 00 / 02 00 00 00 / 05 00 00 00```

Which is interpreted as:

```c
getPlayerSquadHandle((int *)iVar3, (int)5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891d1bc(int param_1,undefined4 param_2)

{
  char cVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  int iVar6;
  undefined4 uVar7;
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *piVar2 = -1;
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = *(int *)(iVar4 + 0xf8);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    uVar5 = Save::Get_Save_BaseAddr(1);
    iVar6 = Save::Get_BaseAddr__0x78(uVar5,1);
    iVar6 = *(int *)(*(int *)(iVar6 + 0x44) + 0x28);
    if (iVar6 < 0) {
      iVar6 = iVar6 + 3;
    }
    uVar5 = FUN_088a8650(iVar4,iVar6 >> 2);
    switch(*puVar3) {
    case 0:
      iVar4 = FUN_088df7ac(uVar5);
      if (iVar4 != 0) {
        *piVar2 = (int)*(short *)(*(int *)(iVar4 + 0xa14) + 0x78);
      }
      break;
    case 1:
      iVar4 = Is_Class_Tree(uVar5,1,0);
      if (iVar4 != 0) {
        *piVar2 = (int)*(short *)(*(int *)(iVar4 + 0xa14) + 0x78);
      }
      break;
    case 2:
      iVar4 = Is_Class_Tree(uVar5,2,0);
      if (iVar4 != 0) {
        *piVar2 = (int)*(short *)(*(int *)(iVar4 + 0xa14) + 0x78);
      }
      break;
    case 3:
      iVar4 = Is_Class_Tree(uVar5,3,0);
      if (iVar4 != 0) {
        *piVar2 = (int)*(short *)(*(int *)(iVar4 + 0xa14) + 0x78);
      }
      break;
    case 4:
      iVar4 = FUN_088e0afc(uVar5);
      if (iVar4 != 0) {
        *piVar2 = (int)*(short *)(iVar4 + 0x78);
      }
      break;
    case 5:
      iVar4 = Get_HataponAddr(uVar5);
      if (iVar4 != 0) {
        *piVar2 = (int)*(short *)(*(int *)(iVar4 + 0xa14) + 0x78);
      }
      break;
    case 6:
      uVar7 = Save::Get_Save_BaseAddr(1);
      iVar4 = Save::Get_BaseAddr__0x78(uVar7,1);
      if (*(int *)(*(int *)(iVar4 + 100) + 0x98) == 0) {
        iVar4 = *piVar2;
      }
      else {
        iVar4 = 0;
        do {
          iVar6 = FUN_088df588(uVar5,iVar4);
          if (((iVar6 != 0) && (*(int *)(iVar6 + 0x188) == 0)) &&
             (cVar1 = pointer_offset18(iVar6 + 0x474), cVar1 == '\0')) {
            *piVar2 = (int)*(short *)(iVar6 + 0x78);
            break;
          }
          iVar4 = iVar4 + 1;
        } while (iVar4 < 4);
        iVar4 = *piVar2;
      }
      if ((iVar4 == -1) && (iVar4 = FUN_088df7ac(uVar5), iVar4 != 0)) {
        *piVar2 = (int)*(short *)(*(int *)(iVar4 + 0xa14) + 0x78);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

