# setMssionBgmId

Forces theme for the mission. This is used in Dungeon to change music between floors.

Expected in [setMissionTimmingScript](./setmissiontimmingscript.md) phase 0.

## Code Information

- **Name**: `setMssionBgmId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 1b 00`
- **Assembly Address in Memory** : `0x894b104`

## Parameters

- `(int)bgm_id` *(8 bytes)* : The [theme ID](./guide/reference-table.md#theme-ids).
- `(int)overwrite_selectable_theme` *(8 bytes)* : 1 overwrites the selectable theme, 0 gives priority to the selectable theme.

## Remarks

With DxD random theme, this instruction will take priority.

## Example

Here is one example in hex:

```25 0a 1b 00 / 02 00 00 00 / 13 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setMssionBgmId((int)19, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b104(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar5 = *puVar1;
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar4 = *piVar2;
  Save::Get_Save_BaseAddr(1);
  iVar3 = Get_Some_Flag(1);
  iVar3 = *(int *)(iVar3 + 0x44);
  if (iVar4 == 0) {
                    // using custom theme?
    if (*(char *)(iVar3 + 0x54a) == '\0') {
      *(short *)(iVar3 + 0x548) = (short)uVar5;
    }
  }
  else {
    *(short *)(iVar3 + 0x548) = (short)uVar5;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

