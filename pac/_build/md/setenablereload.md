# setEnableReload

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setEnableReload`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 34 00`
- **Assembly Address in Memory** : `0x8b4d500`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 1c 34 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setEnableReload((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4d500(int param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  FUN_Azito__08b49ab8(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x1e4),*piVar1 != 0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

