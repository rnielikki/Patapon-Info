# endAppearItem

Declares end of the item definition table. Paired with [beginAppearItem](./beginappearitem.md).

## Code Information

- **Name**: `endAppearItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 08 04 00`
- **Assembly Address in Memory** : `0x896eb90`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 08 04 00```

Which is interpreted as:

```c
endAppearItem()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896eb90(int param_1,undefined4 param_2)

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
    Loot::Finish_Writing_Loot_Chances();
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

