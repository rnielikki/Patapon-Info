# callActorEffect

Cast effect originated from an actor/handle.

## Code Information

- **Name**: `callActorEffect`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 2c 00`
- **Assembly Address in Memory** : `0x89138f8`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(int)effect_id` *(8 bytes)* : ID of the effect.
- `(int)parent_node` *(8 bytes)* : Parent node ID to append.
- `(float)Var3_x` *(8 bytes)*
- `(float)Var4_y` *(8 bytes)*
- `(float)Var5_x` *(8 bytes)*
- `(float)Var6_y` *(8 bytes)*

## Remarks

The **desired effect must be preloaded** through [readArcFile](./readarcfile.md) before calling this.

The effect created with this **can't deal actual damage**. Consider using [addEffect](./addeffect.md) for dealing damage.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089138f8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  int iVar8;
  undefined4 local_20;
  undefined4 local_1c;
  undefined4 local_18;
  undefined4 local_14;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  if (*piVar1 != -1) {
    iVar8 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar8 == 0) {
      iVar8 = 0;
    }
    if (iVar8 != 0) {
      local_1c = *puVar7;
      local_20 = *puVar6;
      local_18 = 0;
      local_14 = 0x3f800000;
      local_c = *puVar5;
      local_10 = *puVar4;
      local_4 = 0x3f800000;
      local_8 = 0;
      Action::Trigger_Effect(0x3f800000,iVar8,*puVar2,*puVar3,&local_10,&local_20,0xffffffff,0,4,0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
