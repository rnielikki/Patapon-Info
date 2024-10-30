# setDisableAbnormal

Enables or disables specific status effect. This is unused.

## Code Information

- **Name**: `setDisableAbnormal`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 25 00`
- **Assembly Address in Memory** : `0x89b379c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(int)status_effect_id` *(8 bytes)* : [ID of the status effect](./guide/reference-table.md#as-non-flag) to enable/disable.
- `(int)disable` *(8 bytes)* : Please describe which one disables status effect.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b379c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int *piVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar4 != 0) {
    switch(*puVar2) {
    case 0:
      Set_StatusEffect_ImmuneFlag(iVar4,1,*piVar3 != 0);
      break;
    case 1:
      Set_StatusEffect_ImmuneFlag(iVar4,2,*piVar3 != 0);
      break;
    case 2:
      Set_StatusEffect_ImmuneFlag(iVar4,6,*piVar3 != 0);
      break;
    case 3:
      Set_StatusEffect_ImmuneFlag(iVar4,4,*piVar3 != 0);
      break;
    case 4:
      Set_StatusEffect_ImmuneFlag(iVar4,3,*piVar3 != 0);
      break;
    case 5:
      Set_StatusEffect_ImmuneFlag(iVar4,5,*piVar3 != 0);
      break;
    case 6:
      Set_StatusEffect_ImmuneFlag(iVar4,0,*piVar3 != 0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

