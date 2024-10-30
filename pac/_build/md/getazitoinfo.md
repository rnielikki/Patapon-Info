# getAzitoInfo

Gets certain hideout related information. The information depends on `info_type` parameter.

## Code Information

- **Name**: `getAzitoInfo`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 06 00`
- **Assembly Address in Memory** : `0x8b4d560`

## Parameters

- `(int)info_type` *(8 bytes)* : Type to get the info, in range of `0x0` ~ `0x12`
- `(uint *)destination` *(8 bytes)* : Variable to *store* the result value.

### About `info_type`

- `0x0` : 2 if just loaded hideout, 3 if visited mission after loading hideout (used for autosave). Other values will break the game.
- `0x1` : Last selected (*no need to play*) mission Group ID, -1 if never selected mission after loading the save.
- `0x2` : Last selected (*no need to play*) mission ID *in the world* (DLC is separated world), -1 if never selected mission after loading the save.
- `0x3` : (Unused) If the player is in barracks or world map, this is 0. Otherwise it is 1.

- `0x4` : (Unused) Related to savedata internal value.
- `0x5` : (Unused) Related to savedata internal value.
- `0x6` : (Unused) Related to savedata internal value.

- `0x7` : The selected [facility gimmick ID](./guide/reference-table.md#facility-ids).

- `0x8`, `0x9` : (Unused) Unimplemented. Does nothing.

- `0xA` : 0 if loading the scene change. 1 if the scene is loaded.
- `0xB` : 1 if a mission is selected. Otherwise it is 0.
- `0xC` : 1 if the player is in VS world map *or* VS mission is selected. Otherwise it is 0.
- `0xD` : 1 if host selected a VS mission, 2 if host selected a co-op mission, otherwise it is zero.

- `0xE` : Same as `0x11`, *except* non-functional facility choosing returns 1 too (viewing "error" dialog is 0).
- `0xF` : 1 if host is in hideout, otherwise it is 0. Related to "Cannot enter until host returns to Hideout" message.
- `0x10` : (Unused) Please describe this. Expected to be 3.
- `0x11` : When the facility is chosen (clicked X) and has actual function, it is 1.
- `0x12` : 1 if the player is in Hoshi shop or Meden shop, otherwise 0.

## Example

Here is one example in hex:

```25 1c 06 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getAzitoInfo((int)0, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4d560(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  int iVar3;
  int iVar4;
  undefined4 uVar5;
  int iVar6;
  uint uVar7;
  undefined4 uVar8;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar8 = *puVar1;
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    iVar3 = Save::Get_Save_BaseAddr(1);
    iVar3 = return__0x1c(*(undefined4 *)(iVar3 + 0x50));
    iVar4 = Save::Get_Save_BaseAddr(1);
    iVar4 = *(int *)(iVar4 + 0x58);
    uVar5 = Save::Get_Save_BaseAddr(1);
    iVar6 = Save::Get_BaseAddr__0x78(uVar5,1);
    switch(uVar8) {
    case 0:
      *puVar2 = *(uint *)(iVar4 + 0x90);
      break;
    case 1:
      *puVar2 = *(uint *)(*(int *)(iVar6 + 0x44) + 0x534);
      break;
    case 2:
      *puVar2 = *(uint *)(*(int *)(iVar6 + 0x44) + 0x550);
      break;
    case 3:
      *puVar2 = (uint)*(byte *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x20);
      break;
    case 4:
      *puVar2 = *(uint *)(iVar3 + 0xeda4);
      break;
    case 5:
      *puVar2 = *(uint *)(iVar3 + 0xeda8);
      break;
    case 6:
      *puVar2 = *(uint *)(iVar3 + 0xeda0);
      break;
    case 7:
      iVar3 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x2b8);
      if (iVar3 != 0) {
        *puVar2 = (int)**(short **)(iVar3 + 0x144);
      }
      break;
    case 10:
      *puVar2 = (uint)*(byte *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x21);
      break;
    case 0xb:
      *puVar2 = (uint)*(byte *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x2d);
      break;
    case 0xc:
      *puVar2 = (uint)*(byte *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x2e);
      break;
    case 0xd:
      uVar8 = Save::Get_Save_BaseAddr(1);
      iVar3 = Save::Get_BaseAddr__0x78(uVar8,1);
      *puVar2 = *(uint *)(*(int *)(iVar3 + 0x44) + 100);
      break;
    case 0xe:
      if (*(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x14) + 0x20) == 0) {
        *puVar2 = 1;
      }
      else {
        *puVar2 = (uint)*(byte *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x2f);
      }
      break;
    case 0xf:
      uVar8 = Save::Get_Save_BaseAddr(1);
      iVar3 = Save::Get_BaseAddr__0x78(uVar8,1);
      uVar7 = FUN_089ff418(*(undefined4 *)(*(int *)(iVar3 + 100) + 0x1dc));
      *puVar2 = uVar7 & 0xff;
      break;
    case 0x10:
      *puVar2 = *(uint *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x24);
      break;
    case 0x11:
      if (*(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x14) + 0x20) == 0) {
        *puVar2 = 1;
      }
      else {
        *puVar2 = 0;
      }
      break;
    case 0x12:
      *puVar2 = (uint)*(byte *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x28);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

