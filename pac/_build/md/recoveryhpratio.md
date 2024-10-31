# recoveryHPRatio

Recovers stamina of a given target for a given percentage of amount.

## Code Information

- **Name**: `recoveryHPRatio`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 4f 00`
- **Assembly Address in Memory** : `0x891e8ac`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit/Squad/Troop handle, obtained from e.g. [getUnitHandle](./getunithandle.md) or [getUnitSquadHandle](./getunitsquadhandle.md).
- `(float)amount_percentage` *(8 bytes)* : Recovery amount as percentage, in range of 0~1.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e8ac(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar3 != 0) {
    iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
    if (iVar4 == 9) {
      Damage::Heal::HealOne(*puVar2,iVar3);
    }
    else if (iVar4 == 3) {
      Damage::Heal::HealAll2(*puVar2,iVar3);
    }
    else if (iVar4 == 2) {
      Damage::Heal::HealAll(*puVar2,iVar3);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

