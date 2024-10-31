# getSquadClassId

Gets [class ID](./guide/reference-table.md#class-ids) of the given squad.

## Code Information

- **Name**: `getSquadClassId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 b8 00`
- **Assembly Address in Memory** : `0x89234fc`

## Parameters

- `(int *)squad_handle` *(8 bytes)* : The squad handle to get the class ID.
- `(int *)destination` *(8 bytes)* : Variable to *store* the [class ID](./guide/reference-table.md#class-ids). -1 if the class is invalid.

## Example

Here is one example in hex:

```25 16 b8 00 / 04 00 00 00 / 03 00 00 00 / 04 00 00 00 / 04 00 00 00```

Which is interpreted as:

```c
getSquadClassId((int *)iVar3, (int *)iVar4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089234fc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0xffffffff;
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) &&
     (iVar3 != 0)) {
    *puVar2 = *(undefined4 *)(iVar3 + 0x18c);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

