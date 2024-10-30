# getMissionInfo

Obtains various mission data, mostly mission ID and mission group ID.

## Code Information

- **Name**: `getMissionInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 20 00`
- **Assembly Address in Memory** : `0x894b568`

## Parameters

**All variables are used for storing data**.

- `(int *)group_id` *(8 bytes)* : [Mission group ID](./addquest.md#group_id-index).
- `(int *)mission_id` *(8 bytes)* : [Mission ID](./guide/reference-table.md#mission-ids) (DLC only), otherwise it is zero.
- `(int *)dlc_misison_id` *(8 bytes)* : Mission ID, both for DLC and non-DLC.
- `(int *)Var3` *(8 bytes)* : Related to resetting stage with [resetStageParam](./resetstageparam.md), 2nd param as 2. (or adding with [addStage](./addstage_251c1300.md))
- `(float *)Var4` *(8 bytes)* : Related to resetting stage with [resetStageParam](./resetstageparam.md), 2nd param as 3. (or adding with [addStage](./addstage_251c1300.md))

## Example

Here is one example in hex:

```25 0a 20 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 03 00 00 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getMissionInfo((int *)iVar0, (int *)iVar1, (int *)iVar2, (int *)iVar3, (float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b568(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int iVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  iVar6 = Get_Some_Flag(1);
  iVar6 = *(int *)(iVar6 + 0x44);
  *puVar1 = *(undefined4 *)(iVar6 + 0x534);
  *puVar2 = *(undefined4 *)(iVar6 + 0x538);
  *puVar3 = *(undefined4 *)(iVar6 + 0x550);
  *puVar4 = *(undefined4 *)(iVar6 + 0x77c);
  *puVar5 = *(undefined4 *)(iVar6 + 0x780);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

