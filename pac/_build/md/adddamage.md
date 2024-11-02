# addDamage

This supposed to deal damage, but it **doesn't work**.

## Code Information

- **Name**: `addDamage`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 5b 00`
- **Assembly Address in Memory** : `0x89178a8`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(int)damage` *(8 bytes)* : Damage amount to inflict.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089178a8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  byte local_40;
  byte local_3f;
  undefined4 local_3c;
  undefined4 local_38;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 != 0) {
      local_10 = 0;
      local_c = 0;
      local_8 = 0;
      local_4 = 0;
      Syscall::Kernel::Kernel_Memset(&local_40,0,0x40);
      local_38 = 0xffffffff;
      local_3f = local_3f & 0xf6 | 9;
      local_40 = local_40 & 0xfe | 1;
      local_3c = *puVar2;
      (**(code **)(*(int *)(iVar3 + 4) + 200))(iVar3,&local_40);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
