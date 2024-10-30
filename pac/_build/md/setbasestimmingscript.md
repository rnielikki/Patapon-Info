# setBasesTimmingScript

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setBasesTimmingScript`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1d 02 00`
- **Assembly Address in Memory** : `0x8b68678`

## Parameters

- `(uint)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 1d 02 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00 / 01 00 00 00 / 64 07 00 00```

Which is interpreted as:

```c
setBasesTimmingScript((int)0, (int *)iVar0, (index)1892)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b68678(int param_1,undefined4 param_2)

{
  uint *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 uVar4;
  int iVar5;
  undefined4 *puVar6;
  int iVar7;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar7 = *(int *)(param_1 + 0x10);
  iVar5 = iVar7;
  if (iVar7 == 0) {
    iVar5 = 0;
  }
  if (iVar5 != 0) {
    if (iVar7 == 0) {
      iVar7 = 0x390;
    }
    else {
      iVar7 = iVar7 + 0x390;
    }
    if (*puVar1 < 3) {
      puVar6 = (undefined4 *)(iVar7 + *puVar1 * 8);
    }
    else {
      puVar6 = (undefined4 *)0x0;
    }
    uVar4 = *puVar3;
    *puVar6 = *puVar2;
    puVar6[1] = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

