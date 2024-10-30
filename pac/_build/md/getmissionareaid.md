# getMissionAreaId

Gets current floor of the dungeon. Dungeon index **starts from 0**, floor 1 results zero.

## Code Information

- **Name**: `getMissionAreaId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 12 06 00`
- **Assembly Address in Memory** : `0x8a1d25c`

## Parameters

- `(int *)dungeon_floor` *(8 bytes)* : Variable to *store* dungeon floor id, starts from zero. "Floor number" is this number +1.

## Example

Here is one example in hex:

```25 12 06 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getMissionAreaId((int *)iVar0)
```

This is used for setting separate logic for each dungeon floor.

The example below is part of defining each floor logic in "Baby Dragon Hyumitto" mission.

```c
00000000  25120300:setMaxMissionAreaId(2:5)
0000000C  25000300:cmd_call(1:1770)
00000014  25002C00:cmd_flgAND(1:24, E3E)
00000024  25001700:cmd_ifEQ(8:1C, 202.0, 1:5B774)
  0005B774  25000300:cmd_call(1:5BA4)
  0005B77C  25100600:getPack(4:0)
  /* timming script 1 */
  0005B788  25120200:setMissionTimmingScript(2:0, 4:0, 1:5B7E0)
  /* b8 */
    0005B7E0  25000300:cmd_call(1:B8)
      000000B8  25000300:cmd_call(1:148)
      000000C0  25120600:getMissionAreaId(4:0)
      000000CC  25001700:cmd_ifEQ(4:0, 0.0, 1:178) //floor 1
      000000E4  25001700:cmd_ifEQ(4:0, 1.0, 1:190) //floor 2
      000000FC  25001700:cmd_ifEQ(4:0, 2.0, 1:1B0) //floor 3
      00000114  25001700:cmd_ifEQ(4:0, 3.0, 1:1D0) //floor 4
      0000012C  25001700:cmd_ifEQ(4:0, 4.0, 1:1F0) //floor 5
      00000144  25000100:cmd_end()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08a1d25c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *puVar1 = *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x540);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

