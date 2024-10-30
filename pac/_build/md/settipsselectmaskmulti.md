# setTipsSelectMaskMulti

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setTipsSelectMaskMulti`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 2f 00`
- **Assembly Address in Memory** : `0x894be70`

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
void FUN_0894be70(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  uint *puVar4;
  int iVar5;
  uint uVar6;
  uint uVar7;
  int iVar8;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,0,1);
  iVar3 = Save::Get_Save_BaseAddr(1);
  iVar3 = *(int *)(iVar3 + 0x58);
  iVar8 = 0;
  if (0 < *piVar2) {
    do {
      puVar4 = (uint *)Pac_Get_Param(param_2,2,0,4);
      uVar7 = *puVar4;
      if ((int)uVar7 < 0) {
        iVar5 = *piVar2;
      }
      else {
        iVar5 = *piVar1;
        if (uVar7 >> 5 < 4) {
          puVar4 = (uint *)(iVar3 + 0x14 + (uVar7 >> 5) * 4);
          uVar6 = *puVar4 & ~(1 << (uVar7 & 0x1f));
          *puVar4 = uVar6;
          *puVar4 = uVar6 | (uint)(iVar5 != 0) << (uVar7 & 0x1f);
        }
        iVar5 = *piVar2;
      }
      iVar8 = iVar8 + 1;
    } while (iVar8 < iVar5);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

