# setTipsSelectMask

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setTipsSelectMask`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 2e 00`
- **Assembly Address in Memory** : `0x894bda8`

## Parameters

- `(uint)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 2e 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setTipsSelectMask((int)0, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894bda8(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  uint uVar5;
  uint uVar6;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Save::Get_Save_BaseAddr(1);
  iVar4 = *piVar2;
  uVar5 = *puVar1 >> 5;
  if (uVar5 < 4) {
    uVar6 = *puVar1 & 0x1f;
    puVar1 = (uint *)(*(int *)(iVar3 + 0x58) + 0x14 + uVar5 * 4);
    uVar5 = *puVar1 & ~(1 << uVar6);
    *puVar1 = uVar5;
    *puVar1 = uVar5 | (uint)(iVar4 != 0) << uVar6;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

