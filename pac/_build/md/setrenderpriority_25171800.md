#  setRenderPriority (25171800)

> *Other functions have the same name. Check the [Disambiguation page](./setRenderPriority.md) to find them.*

Sets how top the object is. Higher value means the target is more top of the screen.

## Code Information

- **Name**: `setRenderPriority`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 18 00`
- **Assembly Address in Memory** : `0x8912518`

## Parameters

- `(int *)handle_id` *(8 bytes)* : [Handle](./guide/category.md#getting-handle) to set render priority.
- `(int *)priority` *(8 bytes)* : The render priority value to set to the target.

For reference, fever gauge render priority is `10000` (`0x2710`).

## Example

Here is one example in hex:

```25 17 18 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
setRenderPriority((int *)iVar0, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08912518(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  if (iVar3 != 0) {
    (**(code **)(*(int *)(iVar3 + 0x3c) + 0x14))(iVar3 + 0x20,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

