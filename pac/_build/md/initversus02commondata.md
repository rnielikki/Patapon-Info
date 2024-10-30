# initVersus02CommonData

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `initVersus02CommonData`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 29 01`
- **Assembly Address in Memory** : `0x8927b54`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 29 01 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
initVersus02CommonData((int)1, (int)0, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08927b54(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if (iVar5 != 0) {
    if (*piVar1 == 1) {
      iVar4 = *piVar2;
      if ((-1 < iVar4) && (iVar4 < 2)) {
        *(undefined4 *)(iVar4 * 4 + *(int *)(iVar5 + 0x48) + 0x44) = *puVar3;
      }
    }
    else if (*piVar1 == 0) {
      iVar4 = *piVar2;
      if ((-1 < iVar4) && (iVar4 < 2)) {
        *(undefined4 *)(iVar4 * 4 + *(int *)(iVar5 + 0x48) + 0x3c) = *puVar3;
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

