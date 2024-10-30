# getFlipEnable

Gets the "flip" value, set from [flipEnable](./flipenable.md).

For player, works only cutscene with [player model index](./changemodel.md) 1. For bosses, it works.

## Code Information

- **Name**: `getFlipEnable`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 0f 00`
- **Assembly Address in Memory** : `0x8911b74`

## Parameters

- `(int *)handle` *(8 bytes)* : [Handle](./guide/how-to-get-a-handle.md) of the target.
- `(int *)destination` *(8 bytes)* : Variable to *store* the flip value. 0 is normal direction (unit sees right), 1 the unit sees left.
   - This is **not** real flipping in e.g. dungeon, might not work properly.

## Example

Here is one example in hex:

```25 17 0f 00 / 04 00 00 00 / 16 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getFlipEnable((int *)iVar22, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08911b74(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
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
    *puVar2 = 0.0 < *(float *)(iVar3 + 0x94) ^ 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

