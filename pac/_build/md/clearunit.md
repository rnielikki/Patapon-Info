# clearUnit

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `clearUnit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 28 00`
- **Assembly Address in Memory** : `0x891bf74`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 28 00```

Which is interpreted as:

```c
clearUnit()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891bf74(int param_1,undefined4 param_2)

{
  int iVar1;
  int iVar2;
  
  iVar1 = FUN_088a8650(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xf8),0);
  if (((iVar1 != 0) && (iVar1 = FUN_088df588(iVar1,0), iVar1 != 0)) &&
     (iVar2 = FUN_088c5348(iVar1,0), iVar2 != 0)) {
    (**(code **)(*(int *)(iVar2 + 4) + 0x44))(iVar2);
    (**(code **)(*(int *)(iVar1 + 4) + 0x44))(iVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

