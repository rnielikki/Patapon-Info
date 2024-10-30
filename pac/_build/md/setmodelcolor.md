# setModelColor

Sets colour of (multiplies colour to) the model.

## Code Information

- **Name**: `setModelColor`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 36 00`
- **Assembly Address in Memory** : `0x891457c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Handle of the object.
- `(float)Var1` *(8 bytes)* : Subtle colour adjustment for some objects, can keep 0 in most cases.
- `(int)red` *(8 bytes)* : Red Value of the colour to set, in range of 0~255.
- `(int)green` *(8 bytes)* : Green Value of the colour to set, in range of 0~255.
- `(int)blue` *(8 bytes)* : Blue Value of the colour to set, in range of 0~255.
- `(int)alpha` *(8 bytes)* : Alpha Value of the colour to set, in range of 0~255.

## Example

Here is one example in hex:

```25 17 36 00 / 04 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 41 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setModelColor((int *)iVar0, (float)16, (int)1, (int)1, (int)1, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891457c(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  uint *puVar3;
  int *piVar4;
  int *piVar5;
  int *piVar6;
  int iVar7;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  if (*piVar1 != -1) {
    iVar7 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar7 == 0) {
      iVar7 = 0;
    }
    if (iVar7 != 0) {
      (**(code **)(*(int *)(iVar7 + 4) + 0xa0))
                (*puVar2,iVar7,*piVar6 << 0x18 | *piVar5 << 0x10 | *puVar3 | *piVar4 << 8);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

