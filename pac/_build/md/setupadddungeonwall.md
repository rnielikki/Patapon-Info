# setupAddDungeonWall

Add Dungeon wall or dungeon related gimmick (environment cellings etc).

## Code Information

- **Name**: `setupAddDungeonWall`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 66 00`
- **Assembly Address in Memory** : `0x89204a4`

## Parameters

- `(int)gimmick_type` *(8 bytes)* : See below.
- `(int)bind_identifier` *(8 bytes)* : Any unique identifier, this can be used for setting up [setGateInfo](./setgateinfo.md). **If the gimmick has no function, set to -1**.

|gimmick_type|gimmick|
|---|---|
|0x1~0x4|celling (higher value = lower celling)|
|0x14|breakable door|
|0x15|door that requires key|
|0x17|iron door (opens from up to down)|
|0x18|iron door (opens from down to up)|
|0x1f|???|
|0x20|back of the dungeon (stones)|

## Remarks

This adds gimmicks only and does not do any interaction. For interaction, see [setGateInfo](./setgateinfo.md).

## Example

Here is one example in hex:

```25 16 66 00 / 02 00 00 00 / 15 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setupAddDungeonWall((int)21, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089204a4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_08972658(*(int *)(*(int *)(param_1 + 0x10) + 0x118) + 0x4320,*puVar1,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

