# getKillOrderFlag

Checks if a target is dead.

## Code Information

- **Name**: `getKillOrderFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 59 00`
- **Assembly Address in Memory** : `0x8917718`

## Parameters

- `(int *)handle` *(8 bytes)* : Handle of the target to check if it is dead.
- `(int *)is_alive` *(8 bytes)* : 0 if the target is killed or deleted, otherwise it is 1.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08917718(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  if (param_1 == 0) {
    iVar3 = 0;
  }
  else {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = *(int *)(iVar3 + 0xcc);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    *puVar2 = (uint)*(byte *)(iVar3 + 0x11);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

