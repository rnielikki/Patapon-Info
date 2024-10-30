# setQuestPayItem

Assigns an item given by finishing the mission.

The "Reward: XXX" in mission description is related to this.

This applies when finishing the mission only, and doesn't do anything with enemy item drops.

## Code Information

- **Name**: `setQuestPayItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 d5 00`
- **Assembly Address in Memory** : `0x8925f6c`

## Parameters

- `(int)item_type` *(8 bytes)* : Type of the item as [item ID](./guide/reference-table.md#item-id--weaponparam-id-indexes), can be e.g. chest ID.
- `(int)item_level` *(8 bytes)* : Level of the item. 0 gives same level of reward as [quest level](./setquestlevelrevise.md).
- `(bool)enabled` *(8 bytes)* : If this is 0, this reward is disabled, thus it's not given at all.
- `(bool)allow_duplication` *(8 bytes)* : Allows giving the item if same item type exists.
   - If this is 0 and if the same item is defined through `setQuestPayItem`, this wipes out the prior pay item and overwrites to the current value.
   - Activated only with `enabled` flag.

## Remarks

`setQuestPayItem` reward can be changed later.

`setQuestPayItem` can be defined multiple times, **but be careful and do not assign duplicated item type**.

## Example

Here is one example in hex:

```25 16 d5 00 / 08 00 00 00 / 50 00 00 00 / 08 00 00 00 / 51 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setQuestPayItem(((global)int *)giVar80, ((global)int *)giVar81, (int)1, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08925f6c(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  undefined4 uVar6;
  int iVar7;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar7 = *piVar1;
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar6 = *puVar2;
  piVar1 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar3 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar4 = *piVar1;
  if (0 < iVar7) {
    iVar5 = Get_Some_Flag(1);
    if (iVar3 == 0) {
      iVar3 = *(int *)(iVar5 + 0x44) + 0x7D0;
    }
    else {
      iVar3 = *(int *)(iVar5 + 0x44) + 0x788;
    }
    if (iVar4 == 0) {
      FUN_08a155c0(iVar3,iVar7,uVar6);
    }
    else {
      FUN_08a15550(iVar3,iVar7,uVar6);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

