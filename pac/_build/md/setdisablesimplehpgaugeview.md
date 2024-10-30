# setDisableSimpleHpgaugeView

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setDisableSimpleHpgaugeView`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 98 00`
- **Assembly Address in Memory** : `0x8922348`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 98 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setDisableSimpleHpgaugeView((int)1, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08922348(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar2 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x48),
     iVar2 != 0)) {
    FUN_08a499bc(iVar2,*piVar1 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

