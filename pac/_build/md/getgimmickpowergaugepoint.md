# getGimmickPowerGaugePoint

Gets occupation status of a gimmick in head-on VS.

## Code Information

- **Name**: `getGimmickPowerGaugePoint`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 13 00`
- **Assembly Address in Memory** : `0x891a418`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Giimmick handle of the fort.
- `(int)team_side` *(8 bytes)* : Team to get, 0 is blue team and 1 is red team.
- `(float *)occupation` *(8 bytes)* : Variable to *store* the occupation percentage.
- `(uint *)troopside_flag` *(8 bytes)* : Variable to *store* the flag of the troop side, 0x1 blue, 0x10 red.

## Example

Here is one example in hex:

```25 16 13 00 / 08 00 00 00 / 7f 00 00 00 / 02 00 00 00 / 01 00 00 00 / 20 00 00 00 / 00 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getGimmickPowerGaugePoint(((global)int *)giVar127, (int)1, (float *)fVar0, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891a418(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  undefined4 *puVar3;
  uint *puVar4;
  int iVar5;
  int iVar6;
  undefined4 uVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (uint *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  *puVar3 = 0;
  *puVar4 = 0;
  if ((((iVar5 != 0) && (iVar6 = (**(code **)(*(int *)(iVar5 + 4) + 0x34))(iVar5), iVar6 == 10)) &&
      (*(int *)(param_1 + 0x10) != 0)) &&
     (iVar5 = func_0x08b30450(*(undefined4 *)
                               (*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x4c),
                              iVar5), iVar5 != 0)) {
    iVar6 = *piVar2;
    uVar7 = func_0x08b29890(iVar5,iVar6);
    *puVar3 = uVar7;
    iVar5 = iVar6 * 0x10 + iVar5;
    *puVar4 = *(uint *)(iVar5 + 0x3c) | *(uint *)(iVar5 + 0x40);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

