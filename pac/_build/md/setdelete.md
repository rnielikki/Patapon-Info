# setDelete

Deletes an object by a given handle. Not known if this does work.

## Code Information

- **Name**: `setDelete`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 2a 00`
- **Assembly Address in Memory** : `0x89b3c4c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Handle ID of the object to delete.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b3c4c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar2 != 0) {
    FUN_0897b738(iVar2,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

