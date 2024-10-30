# setUnitCtrlAdventPosX

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setUnitCtrlAdventPosX`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 2a 00`
- **Assembly Address in Memory** : `0x8b5e5b0`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 1f 2a 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 03 00 00 00 / 10 00 00 00 / 00 00 fa 44```

Which is interpreted as:

```c
setUnitCtrlAdventPosX((int *)iVar0, (int)3, (float)2000)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5e5b0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  if (-1 < *piVar1) {
    iVar4 = *(int *)(param_1 + 0x10);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    else if (*piVar1 == -1) {
      iVar4 = 0;
    }
    else {
      if (iVar4 == 0) {
        iVar4 = 0;
      }
      iVar4 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar4 + 0x2c8));
      if (iVar4 == 0) {
        iVar4 = 0;
      }
    }
    if (iVar4 != 0) {
      FUN_Mission__08b57168(*puVar3,iVar4,*puVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

