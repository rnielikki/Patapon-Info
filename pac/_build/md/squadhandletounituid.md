# squadHandleToUnitUid

Gets [unique reqActor ID](./setreqactoruniqueid.md) from a squad.

## Code Information

- **Name**: `squadHandleToUnitUid`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 30 00`
- **Assembly Address in Memory** : `0x89b3fdc`

## Parameters

- `(int *)squad_handle` *(8 bytes)* : The squad handle to get the unique reqActor ID.
- `(int *)destination` *(8 bytes)* : Variable to *store* the unique UID.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b3fdc(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0xffffffff;
  iVar3 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar3 != 0) {
    *puVar2 = *(undefined4 *)(*(int *)(iVar3 + 0x7c) + 0xa08);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

