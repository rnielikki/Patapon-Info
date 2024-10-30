# enableCollision

Enables or disables a collision hitbox.

## Code Information

- **Name**: `enableCollision`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 3e 00`
- **Assembly Address in Memory** : `0x89151c8`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(bool)bVar1` *(8 bytes)* : Usually this is zero, please describe what this does.
- `(bool)enabled` *(8 bytes)* : 1 enables the collision, otherwise 0.

## Example

Here is one example in hex:

```25 17 3e 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
enableCollision((int *)iVar1, (int)0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089151c8(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int iVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (iVar4 != 0) {
      iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
      if (iVar5 == 0xb) {
        if (*piVar2 == 0) {
          (**(code **)(*(int *)(iVar4 + 4) + 0x110))(iVar4,*piVar3 != 0);
          goto LAB_089152e0;
        }
        iVar4 = *(int *)(iVar4 + 0xd0);
      }
      else {
        iVar4 = *(int *)(iVar4 + 0xd0);
      }
      if ((iVar4 != 0) && (iVar4 = Set_Collision(iVar4 + 0xa0,*piVar2), iVar4 != 0)) {
        FUN_0886f280(iVar4,*piVar3 != 0);
      }
    }
  }
LAB_089152e0:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

