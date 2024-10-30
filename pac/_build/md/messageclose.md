# messageClose

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `messageClose`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 06 00`
- **Assembly Address in Memory** : `0x892c5f4`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 03 06 00```

Which is interpreted as:

```c
messageClose()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892c5f4(int param_1,undefined4 param_2)

{
  undefined4 uVar1;
  
  if (*(int *)(param_1 + 0x28) != 0) {
    uVar1 = FUN_0893d4e8(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x24) + 0x28) + 0x20));
    *(undefined4 *)(param_1 + 0x28) = uVar1;
    *(undefined4 *)(param_1 + 0x2c) = 0;
  }
  *(undefined4 *)(param_1 + 0x23c) = 0xff000000;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

