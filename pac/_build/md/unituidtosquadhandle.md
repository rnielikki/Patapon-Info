# unitUidToSquadHandle

**Use [getUnitSquadHandle](./getunitsquadhandle.md)** for stability.

## Code Information

- **Name**: `unitUidToSquadHandle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 2f 00`
- **Assembly Address in Memory** : `0x89b3f34`

## Parameters

- `(int)reqactor_id` *(8 bytes)* : [Unique ID of the reqactor](./setreqactoruniqueid.md).
- `(int *)destination` *(8 bytes)* : Variable to *store* the squad handle.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b3f34(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  *piVar2 = -1;
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  iVar3 = Get_Squad_From_ReqUniqueID(*(undefined4 *)(iVar3 + 0xf8),*puVar1);
  if (iVar3 != 0) {
    *piVar2 = (int)*(short *)(iVar3 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

