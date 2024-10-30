# getItem (250a0b00)

> *Other functions have the same name. Check the [Disambiguation page](./getItem.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 0b 00`
- **Assembly Address in Memory** : `0x8949ef4`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 0b 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getItem((int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949ef4(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  short *psVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  *piVar2 = 0;
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 != 0) {
    if (*piVar1 == 0x32) {
      iVar4 = FUN_089457e4(*(undefined4 *)(*(int *)(iVar4 + 0x374) + 0x34));
      *piVar2 = iVar4;
    }
    else {
      psVar3 = (short *)FUN_0894554c(*(undefined4 *)(*(int *)(iVar4 + 0x374) + 0x34));
      *piVar2 = (int)*psVar3;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

