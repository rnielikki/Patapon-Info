# recoveryHP

Fully recovers stamina of a given target.

## Code Information

- **Name**: `recoveryHP`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 4e 00`
- **Assembly Address in Memory** : `0x891e7d0`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit/Squad/troop handle, obtained from e.g. [getUnitHandle](./getunithandle.md) or [getSquadHandle](./getsquadhandle.md).

## Example

Here is one example in hex:

```25 16 4e 00 / 08 00 00 00 / 68 00 00 00```

Which is interpreted as:

```c
recoveryHP(((global)int *)giVar104)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e7d0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar2 != 0) {
    iVar3 = (**(code **)(*(int *)(iVar2 + 4) + 0x34))(iVar2);
    if (iVar3 == 9) { //single unit
      Damage::Heal::HealOne(0x3f800000,iVar2);
    }
    else if (iVar3 == 3) { //squad
      Damage::Heal::HealAll2(0x3f800000,iVar2);
    }
    else if (iVar3 == 2) { //troop
      Damage::Heal::HealAll(0x3f800000,iVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

