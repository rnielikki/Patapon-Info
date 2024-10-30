# setParent

Sets parent handle of a handle.

## Code Information

- **Name**: `setParent`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 6e 00`
- **Assembly Address in Memory** : `0x8917264`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/category.md#getting-handle).
- `(int)Var1` *(8 bytes)* : Set 1 if it is not sure.
- `(int *)parent_handle` *(8 bytes)* : The parent handle to set.

## Example

Here is one example in hex:

```25 17 6e 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 04 00 00 00 / 0f 00 00 00```

Which is interpreted as:

```c
setParent((int *)iVar0, (int)1, (int *)iVar15)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08917264(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar3,1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    if (((iVar4 != 0) && (iVar5 != 0)) && (*piVar2 != 0)) {
      if (*piVar2 == 1) {
        *(int *)(iVar4 + 0x7c) = iVar5;
      }
      else {
        *(int *)(iVar4 + 0x80) = iVar5;
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

