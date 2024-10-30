# unlockShopItem

Supposed to add hoshipon item in the hoshipon shop, but doesn't work.

## Code Information

- **Name**: `unlockShopItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 3d 00`
- **Assembly Address in Memory** : `0x894cfb4`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(uint)shopitemparam_id` *(8 bytes)* : The `shopitemparam` ID of the item.

## Example

Here is one example in hex:

```25 0a 3d 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / bd 01 00 00```

Which is interpreted as:

```c
unlockShopItem((int)0, (int)445)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894cfb4(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  uint uVar4;
  uint uVar5;
  uint *puVar6;
  int iVar7;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar7 = *piVar1;
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Save::Get_Save_BaseAddr(1);
  iVar3 = return__0x285a8(*(undefined4 *)(iVar3 + 0x50));
  if (iVar7 == 0) {
    iVar3 = iVar3 + 0x1554;
  }
  else {
    iVar3 = iVar3 + 0x1598;
  }
  uVar4 = *puVar2 >> 5;
  if (uVar4 < 0x11) {
    puVar6 = (uint *)(iVar3 + uVar4 * 4);
    uVar5 = 1 << (*puVar2 & 0x1f);
    uVar4 = *puVar6 & ~uVar5;
    *puVar6 = uVar4;
    *puVar6 = uVar4 | uVar5;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

