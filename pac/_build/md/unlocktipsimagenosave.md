# unlockTipsImageNoSave

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `unlockTipsImageNoSave`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 2b 00`
- **Assembly Address in Memory** : `0x894bcd8`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 0a 2b 00```

Which is interpreted as:

```c
unlockTipsImageNoSave()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894bcd8(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = Save::Get_Save_BaseAddr(1);
  *(undefined *)(*(int *)(iVar1 + 0x58) + 0x24) = 1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

