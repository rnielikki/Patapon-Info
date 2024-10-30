# setRetrogradeLimit

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setRetrogradeLimit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 2f 01`
- **Assembly Address in Memory** : `0x89238f0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 2f 01 / 08 00 00 00 / 65 00 00 00 / 08 00 00 00 / 64 00 00 00 / 40 00 00 00 / 14 00 00 00```

Which is interpreted as:

```c
setRetrogradeLimit(((global)int *)giVar101, ((global)int *)giVar100, ((global)float *)gfVar20)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089238f0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  undefined4 *puVar3;
  int iVar4;
  uint uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = *(int *)(iVar4 + 0xf8);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (((iVar4 != 0) && (iVar4 = FUN_088a8650(iVar4,*puVar1), iVar4 != 0)) && (iVar4 + 0x170 != 0)) {
    uVar5 = *puVar2 & 3;
    if (((int)*puVar2 < 0) && (uVar5 != 0)) {
      uVar5 = uVar5 - 4;
    }
    *(undefined4 *)(uVar5 * 4 + iVar4 + 0x170 + 0xd0) = *puVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

