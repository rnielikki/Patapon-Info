# setDisableCommandGuide

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setDisableCommandGuide`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 20 00`
- **Assembly Address in Memory** : `0x89712fc`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 0c 20 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
setDisableCommandGuide((int)1, (int)2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089712fc(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar3 != 0) {
    if (*piVar1 == 0) {
      func_0x08b5f788(iVar3,*puVar2);
    }
    else {
      func_0x08b5f760(iVar3,*puVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

