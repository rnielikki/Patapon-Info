# getPlayerSuperHeroClassMaskId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getPlayerSuperHeroClassMaskId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 52 00`
- **Assembly Address in Memory** : `0x891ef1c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891ef1c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0xffffffff;
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = *(int *)(iVar2 + 0xf8);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  uVar3 = Save::Get_Save_BaseAddr(1);
  iVar4 = Save::Get_BaseAddr__0x78(uVar3,1);
  iVar5 = 0;
  if (*(int *)(iVar4 + 0x44) != 0) {
    iVar4 = *(int *)(*(int *)(iVar4 + 0x44) + 0x28);
    iVar5 = iVar4 >> 2;
    if (iVar4 < 0) {
      iVar5 = iVar4 + 3 >> 2;
    }
  }
  if (iVar2 != 0) {
    uVar3 = FUN_088a8650(iVar2,iVar5);
    iVar2 = FUN_088df7ac(uVar3);
    if (iVar2 != 0) {
      *puVar1 = *(undefined4 *)(iVar2 + 0xa00);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

