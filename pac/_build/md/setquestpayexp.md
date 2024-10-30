# setQuestPayExp

Assigns exp points given by finishing the mission.

This applies when finishing the mission only, and doesn't do anything with rewards by killing enemies.

## Code Information

- **Name**: `setQuestPayExp`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 d6 00`
- **Assembly Address in Memory** : `0x8926068`

## Parameters

- `(int)exp_amount` *(8 bytes)* : Experience amount to give after finishing the mission.
- `(bool)enabled` *(8 bytes)* : If this is 0, this reward is disabled, thus it's not given at all.

## Example

Here is one example in hex:

```25 16 d6 00 / 08 00 00 00 / 34 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setQuestPayExp(((global)int *)giVar52, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926068(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar5 = *puVar1;
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *piVar2;
  iVar4 = Get_Some_Flag(1);
  if (iVar3 == 0) {
    iVar3 = *(int *)(iVar4 + 0x44) + 0x7D0;
  }
  else {
    iVar3 = *(int *)(iVar4 + 0x44) + 0x788;
  }
  FUN_08a15688(iVar3,uVar5);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

