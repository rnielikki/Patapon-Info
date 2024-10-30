# resultReadyGo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `resultReadyGo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 02 01`
- **Assembly Address in Memory** : `0x8928280`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 02 01```

Which is interpreted as:

```c
resultReadyGo()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08928280(int param_1,undefined4 param_2)

{
  int iVar1;
  int iVar2;
  
  if (*(int *)(param_1 + 0x10) != 0) {
    iVar2 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x3c);
    (**(code **)(*(int *)(iVar2 + 4) + 0x44))(iVar2);
    iVar1 = (**(code **)(*(int *)(iVar2 + 4) + 0x44))(iVar2);
    if (iVar1 == 2) {
      (**(code **)(*(int *)(iVar2 + 4) + 0x34))(iVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

