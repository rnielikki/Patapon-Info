# getParent

Gets parent handle of a handle.

## Code Information

- **Name**: `getParent`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 54 00`
- **Assembly Address in Memory** : `0x8917170`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/category.md#getting-handle).
- `(int)Var1` *(8 bytes)* : Set 1 if it is not sure.
- `(int *)parent_handle` *(8 bytes)* : Variable to *store* the parent handle.

## Example

Here is one example in hex:

```25 17 54 00 / 04 00 00 00 / 40 00 00 00 / 02 00 00 00 / 01 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getParent((int *)iVar64, (int)1, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08917170(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  *piVar3 = -1;
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (iVar4 != 0) {
      if (*piVar2 == 0) {
        if (*(int *)(iVar4 + 0x100) == 0) {
          iVar4 = 0;
        }
        else {
          iVar4 = *(int *)(*(int *)(iVar4 + 0x100) + 8);
        }
      }
      else {
        iVar4 = *(int *)(iVar4 + 0x7c);
      }
      if (iVar4 != 0) {
        *piVar3 = (int)*(short *)(iVar4 + 0x78);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

