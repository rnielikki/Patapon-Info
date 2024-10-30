# getAbnormalStatus

Gets status effect as **flags**.

Check [status ID table](./guide/reference-table.md#as-flag) for the status effect flag.

## Code Information

- **Name**: `getAbnormalStatus`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 4e 00`
- **Assembly Address in Memory** : `0x89165cc`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(uint *)destination` *(8 bytes)* : Target to store the result.

## Example

Here is one example in hex:

```25 17 4e 00 / 04 00 00 00 / 2d 00 00 00 / 08 00 00 00 / 5b 00 00 00```

Which is interpreted as:

```c
getAbnormalStatus((int *)iVar45, ((global)int *)giVar91)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089165cc(int param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
      iVar3 = iVar3 + 0x180;
      *puVar2 = 0;
      iVar4 = Damage::Status::Is_On_Status_Effect(iVar3,0);
      if (iVar4 != 0) {
        *puVar2 = *puVar2 | 1;
      }
      iVar4 = Damage::Status::Is_On_Status_Effect(iVar3,1);
      if (iVar4 != 0) {
        *puVar2 = *puVar2 | 2;
      }
      iVar4 = Damage::Status::Is_On_Status_Effect(iVar3,2);
      if (iVar4 != 0) {
        *puVar2 = *puVar2 | 4;
      }
      iVar4 = Damage::Status::Is_On_Status_Effect(iVar3,3);
      if (iVar4 != 0) {
        *puVar2 = *puVar2 | 8;
      }
      iVar4 = Damage::Status::Is_On_Status_Effect(iVar3,4);
      if (iVar4 != 0) {
        *puVar2 = *puVar2 | 0x10;
      }
      iVar4 = Damage::Status::Is_On_Status_Effect(iVar3,5);
      if (iVar4 != 0) {
        *puVar2 = *puVar2 | 0x20;
      }
      iVar3 = Damage::Status::Is_On_Status_Effect(iVar3,6);
      if (iVar3 != 0) {
        *puVar2 = *puVar2 | 0x40;
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

