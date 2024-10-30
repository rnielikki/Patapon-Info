# addSkill

Applies set skill or class skill to a unit.

## Code Information

- **Name**: `addSkill`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 2d 00`
- **Assembly Address in Memory** : `0x891c500`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle to apply the skill.
- `(int)skill_id` *(8 bytes)* : [Set skill or Class skill ID](https://rnielikki.github.io/pata/resources/skill.html) to apply to a unit.

## Example

Here is one example in hex:

```25 16 2d 00 / 04 00 00 00 / 36 00 00 00 / 02 00 00 00 / 84 00 00 00```

Which is interpreted as:

```c
addSkill((int *)iVar54, (int)132)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891c500(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
    SS_Controller::Select_SS(iVar3,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

