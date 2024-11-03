# getModelInfo

Gets position and movement information of the given handle.

Before performing this, wait until the model is fully loaded.

## Code Information

- **Name**: `getModelInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 0a 00`
- **Assembly Address in Memory** : `0x8911444`

## Parameters

- `(int *)handle_id` *(8 bytes)* : [Handle](./guide/category.md#getting-handle) to get the model info.
- `(float *)position_x` *(8 bytes)* : Variable to *store* the X Position of the model, as *PSP pixel in the world*.
- `(float *)position_y` *(8 bytes)* : Variable to *store* the Y position of the model, as *PSP pixel in the world*. 0 is the center.
- `(float *)velocity_x` *(8 bytes)* : Variable to *store* how much (and in which direction as + or -) it moves in X direction during lifetime.
- `(float *)velocity_y` *(8 bytes)* : Variable to *store* how much (and in which direction as + or -) it moves in Y direction during lifetime.

Note that **PSP screen size is 480 x 272**.

## Example

Here is one example in hex:

```25 17 0a 00 / 04 00 00 00 / 00 00 00 00 / 20 00 00 00 / 02 00 00 00 / 20 00 00 00 / 03 00 00 00 / 20 00 00 00 / 04 00 00 00 / 20 00 00 00 / 05 00 00 00```

Which is interpreted as:

```c
getModelInfo((int *)iVar0, (float *)fVar2, (float *)fVar3, (float *)fVar4, (float *)fVar5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08911444(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int iVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  if (param_1 == 0) {
    iVar6 = 0;
  }
  else {
    iVar6 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    else {
      iVar6 = *(int *)(iVar6 + 200);
      if (iVar6 == 0) {
        iVar6 = 0;
      }
    }
  }
  if (iVar6 != 0) {
    *puVar2 = *(undefined4 *)(iVar6 + 0xc0);
    *puVar3 = *(undefined4 *)(iVar6 + 0xc4);
    *puVar4 = *(undefined4 *)(iVar6 + 0xe0);
    *puVar5 = *(undefined4 *)(iVar6 + 0xe4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

