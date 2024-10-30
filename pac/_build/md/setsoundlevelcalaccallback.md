# setSoundLevelCalacCallback

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setSoundLevelCalacCallback`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 af 00`
- **Assembly Address in Memory** : `0x892349c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 af 00 / 01 00 00 00 / d0 c8 00 00```

Which is interpreted as:

```c
setSoundLevelCalacCallback((index)51408)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892349c(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  undefined4 *puVar2;
  
  uVar1 = FUN_0883bc1c(param_2);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  func_0x08b7d950(uVar1,*puVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

