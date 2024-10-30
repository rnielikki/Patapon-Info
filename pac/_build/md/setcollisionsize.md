# setCollisionSize

Sets value of the collision hitbox.

## Code Information

- **Name**: `setCollisionSize`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 42 00`
- **Assembly Address in Memory** : `0x89157f4`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(bool)bVar1` *(8 bytes)* : Usually this value is 0, please describe what this does.
- `(float)width` *(8 bytes)* :  Width of the collision box.
- `(float)height` *(8 bytes)* : Height of the collision box.

## Example

Here is one example in hex:

```25 17 42 00 / 04 00 00 00 / 32 00 00 00 / 02 00 00 00 / 00 00 00 00 / 40 00 00 00 / 34 00 00 00 / 40 00 00 00 / 35 00 00 00```

Which is interpreted as:

```c
setCollisionSize((int *)iVar50, (int)0, ((global)float *)gfVar52, ((global)float *)gfVar53)
```

This is the

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089157f4(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  if (*piVar1 != -1) {
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    if ((iVar5 != 0) && (*(int *)(iVar5 + 0xd0) != 0)) {
      iVar5 = Set_Collision(*(int *)(iVar5 + 0xd0) + 0xa0,*puVar2);
      local_4 = *puVar4;
      local_8 = *puVar3;
      if (iVar5 != 0) {
        local_10 = *(undefined4 *)(iVar5 + 0x80);
        local_c = *(undefined4 *)(iVar5 + 0x84);
        FUN_0886f4dc(iVar5,&local_10,&local_8);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

