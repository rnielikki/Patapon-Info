# getGimmickId

Gets [Gimmick ID](./guide/reference-table.md#gimmickparam-ids) in `gimmickparam` by given handle.

## Code Information

- **Name**: `getGimmickId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 16 00`
- **Assembly Address in Memory** : `0x894242c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Handle of the gimmick, from e.g. [gimmick_getHandle](./gimmick_gethandle.md).
- `(int *)gimmick_id` *(8 bytes)* : Variable to *store* the [Gimmick ID](./guide/reference-table.md#gimmickparam-ids).

## Example

Here is one example in hex:

```25 19 16 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getGimmickId((int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894242c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
  }
  *puVar2 = 0;
  if (iVar3 != 0) {
    *puVar2 = *(undefined4 *)(*(int *)(*(int *)(iVar3 + 0x20c) + 0x14) + 0x18);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

