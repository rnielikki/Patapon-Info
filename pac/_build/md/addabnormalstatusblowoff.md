# addAbnormalStatusBlowOff

Sets **knockback** effect.

## Code Information

- **Name**: `addAbnormalStatusBlowOff`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 51 00`
- **Assembly Address in Memory** : `0x8916d98`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(float)Var1` *(8 bytes)*
- `(float)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 51 00 / 04 00 00 00 / 41 00 00 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
addAbnormalStatusBlowOff((int *)iVar65, (float *)fVar0, (float *)fVar1)
```

For more context, `fVar0` was 8.5 and `fVar1` was 16.5.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08916d98(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  undefined uStack64;
  byte local_3f;
  undefined4 local_38;
  undefined4 local_30;
  undefined4 local_2c;
  undefined4 local_28;
  undefined4 local_24;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if ((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 9)) {
      local_10 = 0;
      local_c = 0;
      local_8 = 0;
      local_4 = 0;
      Syscall::Kernel::Kernel_Memset(&uStack64,0,0x40);
      local_38 = 0xffffffff;
      local_3f = local_3f & 0xf6 | 9;
      local_2c = *puVar3;
      local_30 = *puVar2;
      local_24 = 0x3f800000;
      local_28 = 0;
      Damage::Status::Apply_Status_Effect(0,iVar4 + 0x180,5,1,&uStack64,0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

