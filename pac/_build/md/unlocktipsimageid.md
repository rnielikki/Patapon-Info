# unlockTipsImageId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `unlockTipsImageId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 2a 00`
- **Assembly Address in Memory** : `0x894bc10`

## Parameters

- `(uint)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894bc10(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  int iVar2;
  uint uVar3;
  uint uVar4;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Save::Get_Save_BaseAddr(1);
  uVar3 = *puVar1;
  iVar2 = *(int *)(iVar2 + 0x58) + 4;
  if (((int)uVar3 < 0) || (0x80 < uVar3)) {
    Syscall::Kernel::Kernel_Memset(iVar2,0,0x10);
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    if (uVar3 >> 5 < 4) {
      puVar1 = (uint *)(iVar2 + (uVar3 >> 5) * 4);
      uVar4 = 1 << (uVar3 & 0x1f);
      uVar3 = *puVar1 & ~uVar4;
      *puVar1 = uVar3;
      *puVar1 = uVar3 | uVar4;
    }
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

