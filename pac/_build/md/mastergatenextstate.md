# masterGateNextState

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `masterGateNextState`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 23 00`
- **Assembly Address in Memory** : `0x8b4fc80`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 1c 23 00```

Which is interpreted as:

```c
masterGateNextState()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4fc80(int param_1,undefined4 param_2)

{
  int iVar1;
  
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar1 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0xcdbc), iVar1 != 0)) {
    *(undefined *)(iVar1 + 0x151) = 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

