# getCameraSightParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getCameraSightParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 84 00`
- **Assembly Address in Memory** : `0x8921500`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*
- `(Undefined)Var3` *(8 bytes)*
- `(Undefined)Var4` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 84 00 / 04 00 00 00 / 00 00 00 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 01 00 00 00 / 20 00 00 00 / 02 00 00 00 / 20 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
getCameraSightParam((int *)iVar0, (float *)fVar0, (float *)fVar1, (float *)fVar2, (float *)fVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921500(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  Pac_Get_Param(param_2,2,1,4);
  Pac_Get_Param(param_2,3,1,4);
  Pac_Get_Param(param_2,4,1,4);
  *puVar1 = 0;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

