# addVector

Adds **force** to the model.

For consistent velocity, consider using another method.

## Code Information

- **Name**: `addVector`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 14 00`
- **Assembly Address in Memory** : `0x891208c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target handle to give the force.
- `(float)scale` *(8 bytes)* : The power, how much force will give to the target.
- `(float)direction_x` *(8 bytes)* : X direction of the force.
- `(float)direction_y` *(8 bytes)* : Y Direction of the force.

## Example

Here is one example in hex:

```25 17 14 00 / 04 00 00 00 / 41 00 00 00 / 10 00 00 00 / 00 00 00 3f / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 bf```

Which is interpreted as:

```c
addVector((int *)iVar65, (float)0.5, (float)0, (float)-0.5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891208c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  float *pfVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  float fVar6;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  pfVar2 = (float *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  if (param_1 == 0) {
    iVar5 = 0;
  }
  else {
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    else {
      iVar5 = *(int *)(iVar5 + 200);
      if (iVar5 == 0) {
        iVar5 = 0;
      }
    }
  }
  if (iVar5 != 0) {
    fVar6 = *pfVar2;
    *(float *)(iVar5 + 0xe0) = *(float *)(iVar5 + 0xe0) * fVar6;
    *(float *)(iVar5 + 0xe4) = *(float *)(iVar5 + 0xe4) * fVar6;
    *(undefined4 *)(iVar5 + 0xec) = 0;
    local_c = *puVar4;
    local_10 = *puVar3;
    local_4 = 0x3f800000;
    local_8 = 0;
    FUN_0888e460(iVar5,&local_10,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

