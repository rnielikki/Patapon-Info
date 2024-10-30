# setDisableBacklightOff

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setDisableBacklightOff`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 0d 00`
- **Assembly Address in Memory** : `0x89490d4`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 09 0d 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setDisableBacklightOff((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089490d4(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 uVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = FUN_088714d8(1);
  FUN_088715d4(uVar2,*piVar1 != 0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

