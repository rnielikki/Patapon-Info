# clearMedenShopItem

Deletes all items from meden shop.

## Code Information

- **Name**: `clearMedenShopItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 44 00`
- **Assembly Address in Memory** : `0x894d4b4`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 0a 44 00```

Which is interpreted as:

```c
clearMedenShopItem()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894d4b4(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = 0;
  do {
    FUN_088515c8(uVar1,iVar2);
    iVar2 = iVar2 + 1;
  } while (iVar2 < 0x14);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

