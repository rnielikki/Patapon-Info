# getMultiPlayerLevelMax

Gets highest hero level amongst currently playing multiplayer squad.

Rare bosses (a.k.a. sukopon bosses) use this to scale the enemy level.

## Code Information

- **Name**: `getMultiPlayerLevelMax`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 2a 01`
- **Assembly Address in Memory** : `0x892a824`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the maximum hero level.

## Remarks

Unlike [getPlayerClassLevel](./getplayerclasslevel.md) giving max level amongst all heroes, this counts from only current squad.

For example, if the players have max level 40 unit, and they bring level 16 and 18 units, the result is 18, not 40.

## Example

Here is one example in hex:

```25 16 2a 01 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getMultiPlayerLevelMax((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a824(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  int iVar3;
  int *piVar4;
  int iVar5;
  uint uVar6;
  uint uVar7;
  uint uVar8;
  int local_c;
  int local_8;
  int local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  *piVar1 = 1;
  iVar2 = Get_Some_Flag();
  iVar2 = *(int *)(iVar2 + 0x44);
  if (*(char *)(iVar2 + 0x81c) == '\0') {
    uVar6 = 1;
  }
  else {
    uVar6 = 2;
  }
  local_4 = -1;
  uVar8 = 0;
  if (uVar6 != 0) {
    do {
      iVar5 = -1;
      local_c = -1;
      uVar7 = 0;
      do {
        iVar3 = FUN_089880e8(iVar2 + 0x850,uVar8,uVar7);
        if ((iVar3 != 0) && (*(char *)(iVar3 + 8) != '\0')) {
          piVar4 = (int *)(iVar3 + 0x20);
          if (*(int *)(iVar3 + 0x20) < iVar5) {
            piVar4 = &local_c;
          }
          iVar5 = *piVar4;
          local_c = iVar5;
        }
        uVar7 = uVar7 + 1;
      } while (uVar7 < 4);
      local_8 = iVar5;
      if (local_4 < iVar5) {
        piVar4 = &local_8;
      }
      else {
        piVar4 = &local_4;
      }
      uVar8 = uVar8 + 1;
      local_4 = *piVar4;
    } while (uVar8 < uVar6);
  }
  piVar4 = piVar1;
  if (*piVar1 < local_4) {
    piVar4 = &local_4;
  }
  *piVar1 = *piVar4;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

