# setWakeUpType

Determines if the enemy takes action automatically or not.

## Code Information

- **Name**: `setWakeUpType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 38 00`
- **Assembly Address in Memory** : `0x89b44b0`

## Parameters

- `(int)reqactor_id` *(8 bytes)* : [Unique ID of the reqactor](./setreqactoruniqueid.md).
- `(bool)is_wakeup` *(8 bytes)* : 1 wake up the enemy, 0 does not.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b44b0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = Get_Squad_From_ReqUniqueID(*(undefined4 *)(iVar3 + 0xf8),*puVar1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = FUN_0896d6e0(*(undefined4 *)(iVar3 + 0x708));
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    *(undefined4 *)(iVar3 + 0x598) = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

