# checkShopItemUnlock

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `checkShopItemUnlock`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 3e 00`
- **Assembly Address in Memory** : `0x894d07c`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(4 bytes)*
- `(uint...)Vars2` *(>= 4 bytes)*

`...` means any amounts of parameter.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894d07c(undefined4 param_1,undefined4 param_2)

{
  bool bVar1;
  int *piVar2;
  int iVar3;
  uint *puVar4;
  uint uVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  
  FUN_0883c04c(param_2,0);
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar6 = *piVar2;
  iVar3 = Save::Get_Save_BaseAddr(1);
  iVar3 = return__0x285a8(*(undefined4 *)(iVar3 + 0x50));
  if (iVar6 == 0) {
    iVar3 = iVar3 + 0x1554;
  }
  else {
    iVar3 = iVar3 + 0x1598;
  }
  piVar2 = (int *)Pac_Get_Param(param_2,1,0,1);
  iVar6 = *piVar2;
  iVar8 = 0;
  iVar7 = 0;
  if (0 < iVar6) {
    do {
      puVar4 = (uint *)Pac_Get_Param(param_2,1,0,4);
      uVar5 = *puVar4;
      if ((int)uVar5 < 0) {
        iVar6 = *piVar2;
      }
      else {
        if (uVar5 >> 5 < 0x11) {
          bVar1 = (1 << (uVar5 & 0x1f) & *(uint *)(iVar3 + (uVar5 >> 5) * 4)) >> (uVar5 & 0x1f) != 0;
        }
        else {
          bVar1 = false;
        }
        if (bVar1) {
          iVar8 = iVar8 + 1;
        }
        iVar6 = *piVar2;
      }
      iVar7 = iVar7 + 1;
    } while (iVar7 < iVar6);
  }
  FUN_0883c04c(param_2,iVar8 == iVar6);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

