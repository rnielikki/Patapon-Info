# setAddress

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setAddress`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 0e 00`
- **Assembly Address in Memory** : `0x890a474`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 10 0e 00 / 02 00 00 00 / 02 00 00 00 / 04 00 00 00 / 40 00 00 00```

Which is interpreted as:

```c
setAddress((int)2, (int *)iVar64)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0890a474(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int *piVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (piVar3 = *(int **)(*(int *)(param_1 + 0x10) + 0x4dc), piVar3 != (int *)0x0)) {
    (**(code **)(*piVar3 + 0x24))(piVar3,*puVar1,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

