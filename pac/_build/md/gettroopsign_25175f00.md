# getTroopSign (25175f00)

> *Other functions have the same name. Check the [Disambiguation page](./getTroopSign.md) to find them.*

Gets direction as terms of troop. This works on head-on VS mission. Otherwise it always returns 1.

## Code Information

- **Name**: `getTroopSign`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 5f 00`
- **Assembly Address in Memory** : `0x8917c4c`

## Parameters

- `(int *)handle` *(8 bytes)*
- `(int *)result` *(8 bytes)* : Result to store. 1 means blue team or going forward.

## Example

Here is one example in hex:

```25 17 5f 00 / 04 00 00 00 / 0a 00 00 00 / 20 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getTroopSign((int *)iVar10, (float *)fVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08917c4c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0x3f800000;
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
      iVar3 = *(int *)(iVar3 + 200);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    *puVar2 = *(undefined4 *)(iVar3 + 0x90);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

