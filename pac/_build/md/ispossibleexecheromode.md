# isPossibleExecHeroMode

Checks if a unit is able to perform the heromode or not.

## Code Information

- **Name**: `isPossibleExecHeroMode`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 f3 00`
- **Assembly Address in Memory** : `0x8926eb8`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(bool *)destination` *(8 bytes)* : Variable to *store* whether the unit can perform heromode or not. **0 can't perform, 1 can perform**.

## Example

Here is one example in hex:

```25 16 f3 00 / 04 00 00 00 / 2c 00 00 00 / 08 00 00 00 / 5b 00 00 00```

Which is interpreted as:

```c
isPossibleExecHeroMode((int *)iVar44, ((global)int *)giVar91)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926eb8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) &&
     (iVar3 = Is_HeroUnit(iVar3), iVar3 != 0)) {
    iVar3 = FUN_088f51cc(iVar3 + 0x170);
    if (iVar3 == 0) {
      *puVar2 = 0;
    }
    else {
      *puVar2 = 1;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

