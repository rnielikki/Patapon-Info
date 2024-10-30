# getFrontLinePosition

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getFrontLinePosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 f4 00`
- **Assembly Address in Memory** : `0x8926f90`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 f4 00 / 04 00 00 00 / 01 00 00 00 / 20 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getFrontLinePosition((int *)iVar1, (float *)fVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926f90(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  iVar3 = FUN_088a8650(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xf8),*puVar1);
  if (iVar3 != -0x170) {
    *puVar2 = *(undefined4 *)(iVar3 + 0x354);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

