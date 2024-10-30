# itemTableAllClear

Resets the item table. Called **before settling loot from the chest**.

## Code Information

- **Name**: `itemTableAllClear`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 08 07 00`
- **Assembly Address in Memory** : `0x896ee64`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 08 07 00```

Which is interpreted as:

```c
itemTableAllClear()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896ee64(int param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = *(int *)(param_1 + 0x10);
  if (iVar1 == 0) {
    iVar1 = 0;
  }
  else {
    if (iVar1 == 0) {
      iVar1 = 0;
    }
    iVar1 = *(int *)(iVar1 + 0x188);
    if (iVar1 == 0) {
      iVar1 = 0;
    }
  }
  if (iVar1 != 0) {
    FUN_089517d0(iVar1 + 0xf7c4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

