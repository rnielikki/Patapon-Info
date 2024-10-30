# getUnitParam (250a4700)

> *Other functions have the same name. Check the [Disambiguation page](./getUnitParam.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getUnitParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 47 00`
- **Assembly Address in Memory** : `0x894d62c`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 47 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 08 00 00 00 / 5b 00 00 00```

Which is interpreted as:

```c
getUnitParam((int)0, (int)0, ((global)int *)giVar91)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894d62c(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar6 = *piVar1;
  iVar5 = *piVar2;
  iVar4 = Get_Some_Flag(1);
  iVar4 = *(int *)(iVar4 + 0x44);
  *puVar3 = 0;
  iVar4 = iVar5 * 0x1620 + iVar4 + iVar6 * 0x58a4;
  if (*(int *)(iVar4 + 0x2554) != 0) {
    *puVar3 = *(undefined4 *)(iVar4 + 0x2558);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

