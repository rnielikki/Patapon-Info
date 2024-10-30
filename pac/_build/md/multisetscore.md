# multiSetScore

Adds VS score to a team's current VS score.

## Code Information

- **Name**: `multiSetScore`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 10 00`
- **Assembly Address in Memory** : `0x8919e98`

## Parameters

- `(int)team_side` *(8 bytes)* : Team to get, 0 is blue team and 1 is red team.
- `(int)score_type` *(8 bytes)* : Expected 0~3. Keep 2 for regular action.
- `(int)score` *(8 bytes)* : Score to add.
- `(uint *)occupying_flag` *(8 bytes)* : Obtained from [getGimmickPowerGaugePoint](./getgimmickpowergaugepoint.md), 0x1 blue, 0x10 red.


|`score_type`|scoring|
|---|---|
|3|*unused*, sets the score to just the given value **without adding**.|
|2|regular score setting|
|1|*unused*|
|0|like 1 but in a loop, observed in racing VS mission.|

## Example

Here is one example in hex:

```25 16 10 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 02 00 00 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
multiSetScore((int)0, (int)2, (int *)iVar0, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08919e98(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  undefined4 *puVar4;
  int iVar5;
  int iVar6;
  int iVar7;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = *piVar2;
  iVar7 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x58);
  iVar6 = *piVar1;
  if (iVar5 == 3) {
    iVar5 = *(int *)(iVar6 * 4 + iVar7 + 0x424);
    if (iVar5 != *piVar3) {
      Add_VS_Score(iVar7,iVar6,*piVar3 - iVar5);
    }
  }
  else if (iVar5 == 2) {
    Add_VS_Score(iVar7,iVar6,*piVar3);
    func_0x08b2f248(iVar7,*piVar3,*puVar4);
  }
  else if (iVar5 == 1) {
    func_0x08b2eb18(iVar7);
  }
  else if (iVar5 == 0) {
    func_0x08b2ecd8(iVar7);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

