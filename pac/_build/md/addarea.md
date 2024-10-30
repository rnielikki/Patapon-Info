# addArea

Enables specific field/dungeon area.

## Code Information

- **Name**: `addArea`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 12 00`
- **Assembly Address in Memory** : `0x8b4e250`

## Parameters

- `(int)group_id` *(8 bytes)* : ID of the area, in range of 0~16.

|ID|Group Name|
|---|---|
|0x0|Pataon training ground|
|0x1|Field of Angry Giants|
|0x2|Arena of Valour|
|0x3|Cave of Valour & Depths of Rage|
|0x4|Snow Field of Sullid Tears|
|0x5|Racing Alley of Purity|
|0x6|Tower of Purity & Heights of Lust|
|0x7|Plateau of Pompous Wings|
|0x8|Range of Justice|
|0x9|Castle of Justice & Dungeon of Pride|
|0xA|Greedy Mask Jungle|
|0xB|Arena of Earnestness|
|0xC|Estate of Earnestness & Basement of Greed|
|0xD|Bottomless Stomach Desert|
|0xE|Racing Alley of Restraint|
|0xF|Labyrinth of Restraint & Depths of Gluttony|
|0x10|Depths of Gluttony|
|0x11|???|
|0x12|Range of Adamance & Evilmass of Adamance|
|0x13|Savannah of Envious Eyes|
|0x14|Arena of Tolerance|
|0x15|Tomb of Tolerance & Depths of Jealousy|
|0x16|Volcano Zone of the Lazy Demon|

## Example

Here is one example in hex:

```25 1c 12 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
addArea((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4e250(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar3 = *puVar1;
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar2 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x30) + 0x14),
      iVar2 != 0)) &&
     (iVar2 = FUN_Azito__08b5a738(*(undefined4 *)(iVar2 + 0x38),0,uVar3,0xffffffff), iVar2 != 0)) {
    Save::Get_Save_BaseAddr(1);
    *(undefined4 *)(iVar2 + 0x98) = 0;
    *(undefined *)(iVar2 + 0x94) = 1;
    *(undefined4 *)(iVar2 + 0x9c) = 0xffffffff;
    *(undefined4 *)(iVar2 + 0x9c) = uVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

