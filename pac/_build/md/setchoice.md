# setChoice

Adds choice for a **debug menu**. After adding all choices, [doSelect](./doselect.md) must be called.

## Code Information

- **Name**: `setChoice`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 01 00`
- **Assembly Address in Memory** : `0x892c72c`

## Parameters

- `(String)text` : Text to show in the menu.
- `(Address)address` *(4 bytes)* : Address to jump when the item is being selected (pressed).

## Remarks

This is for **debug menu**. The position is fixed, features are limited, and cannot be localised at all.

For localisation and more customisation, use [showDialogEx](./showdialogex.md) instead.

## Example

Here is one example in hex:

```25 03 01 00 / 4f 50 45 4e / 20 41 4c 4c / 20 54 49 50 / 53 00 00 00 / 74 a1 03 00```

Which is interpreted as:

```c
setChoice("OPEN ALL TIPS", 0x3a174)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892c72c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  int iVar3;
  undefined auStack320 [60];
  undefined4 local_104;
  undefined auStack256 [256];
  
  Pac_Get_StringParam(param_2,auStack256);
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,0,4);
  local_104 = *puVar1;
  iVar3 = *(int *)(param_1 + 0x10);
  uVar2 = FUN_0892c90c(auStack320,iVar3,auStack256,&DAT_08a60080,&local_104,&DAT_08aabddc);
  FUN_0892c7c0(iVar3 + 0x304,uVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

