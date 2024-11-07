# addGimmickModelName

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `addGimmickModelName`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 07 00`
- **Assembly Address in Memory** : `0x891940c`

## Parameters

- `(int *)gimmick_handle` *(8 bytes)* : Variable to *store* the gimmick handle.
- `(int)gimmick_id` *(8 bytes)* : ID of the gimmick in `gimmickparam`.
- `(int)troop_type` *(8 bytes)* : [Troop type](./guide/reference-table.md#hitbox-layers) of the gimmick.
- `(int)gimmick_identifier` *(8 bytes)* : User defined any gimmick identifier. Keep 0 if this will not used. Can be used in [gimmick_getHandle](./gimmick_gethandle.md).
- `(String)Var4`

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891940c(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  int *piVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined *puVar6;
  undefined *puVar7;
  int iVar8;
  undefined local_100 [256];
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar6 = &DAT_00000100;
  puVar7 = local_100;
  puVar1 = puVar7;
  while (puVar1 != (undefined *)0x0) {
    *puVar7 = 0;
    puVar7 = puVar7 + 1;
    puVar6 = puVar6 + -1;
    puVar1 = puVar6;
  }
  Pac_Get_StringParam(param_2,local_100);
  *piVar2 = -1;
  iVar8 = *(int *)(*(int *)(param_1 + 0x10) + 0x108);
  if ((iVar8 != 0) &&
     (iVar8 = Place_Gimmick_Caller(iVar8,*puVar3,*puVar4,*puVar5,local_100), iVar8 != 0)) {
    *piVar2 = (int)*(short *)(iVar8 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

