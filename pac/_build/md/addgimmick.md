# addGimmick

Adds a gimmick and gets handle of it.

## Code Information

- **Name**: `addGimmick`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 06 00`
- **Assembly Address in Memory** : `0x8919324`

## Parameters

- `(int *)gimmick_handle` *(8 bytes)* : Variable to *store* the gimmick handle.
- `(int)gimmick_id` *(8 bytes)* : [Gimmick ID](./guide/reference-table.md#gimmickparam-ids) of the gimmick in `gimmickparam`.
- `(int)troop_type` *(8 bytes)* : [Troop type](./guide/reference-table.md#troop-types) of the gimmick.
- `(int)gimmick_identifier` *(8 bytes)* : User defined any gimmick identifier. Keep 0 if this will not used. Can be used in [gimmick_getHandle](./gimmick_gethandle.md).

## Example

Here is one example in hex:

```25 16 06 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / b1 02 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / b1 02 00 00```

Which is interpreted as:

```c
addGimmick((int *)iVar0, (int)689, (int)0, (int)689)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08919324(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *gimmick_id;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  gimmick_id = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  *piVar1 = -1;
  iVar4 = *(int *)(*(int *)(param_1 + 0x10) + 0x108);
  if ((iVar4 != 0) &&
     (iVar4 = Place_Gimmick_Caller(iVar4,*gimmick_id,*puVar2,*puVar3,0), iVar4 != 0)) {
    *piVar1 = (int)*(short *)(iVar4 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

