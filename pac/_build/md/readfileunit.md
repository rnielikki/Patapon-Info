# readFileUnit

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `readFileUnit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 32 00`
- **Assembly Address in Memory** : `0x891cc20`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 32 00```

Which is interpreted as:

```c
readFileUnit()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891cc20(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  
  uVar1 = FUN_08842ef4(1);
  iVar2 = FUN_08843888(uVar1,0);
  if (iVar2 == 0) {
    FUN_088a8f5c();
    FUN_08843908(uVar1);
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

