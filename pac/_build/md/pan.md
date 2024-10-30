# pan

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `pan`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0b 06 00`
- **Assembly Address in Memory** : `0x896fb34`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 0b 06 00 / 02 00 00 00 / be 00 90 3f / 10 00 00 00 / 00 00 00 00 / 20 00 00 00 / 05 00 00 00```

Which is interpreted as:

```c
pan((int)1066401982, (float)0, (float *)fVar5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896fb34(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int *piVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  FUN_088eb36c((float)*piVar3,0,(float)*piVar2,*(int *)(param_1 + 0x14) + 0x60,*puVar1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

