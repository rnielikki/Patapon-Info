# setDecay

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setDecay`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 17 00`
- **Assembly Address in Memory** : `0x89123f8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 17 00 / 04 00 00 00 / 15 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 8f c2 75 3f```

Which is interpreted as:

```c
setDecay((int *)iVar21, (int)0, (float)0.96)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089123f8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  if (param_1 == 0) {
    iVar4 = 0;
  }
  else {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    else {
      iVar4 = *(int *)(iVar4 + 200);
      if (iVar4 == 0) {
        iVar4 = 0;
      }
    }
  }
  if (iVar4 == 0) goto LAB_089124f0;
  if (*piVar2 == 1) {
    *(undefined4 *)(iVar4 + 0x174) = *puVar3;
LAB_089124dc:
    uVar5 = *(undefined4 *)(iVar4 + 0x170);
  }
  else {
    if (*piVar2 == 0) {
      *(undefined4 *)(iVar4 + 0x170) = *puVar3;
      goto LAB_089124dc;
    }
    uVar5 = *(undefined4 *)(iVar4 + 0x170);
  }
  *(undefined4 *)(iVar4 + 0x168) = uVar5;
  *(undefined4 *)(iVar4 + 0x16c) = *(undefined4 *)(iVar4 + 0x174);
LAB_089124f0:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

