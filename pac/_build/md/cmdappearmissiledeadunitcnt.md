# cmdAppearMissileDeadUnitCnt

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmdAppearMissileDeadUnitCnt`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3b 01`
- **Assembly Address in Memory** : `0x892ae4c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 3b 01 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
cmdAppearMissileDeadUnitCnt((int)0, (int)0, (int)0, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892ae4c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar5 != 0)) &&
     (iVar5 = func_0x08b2acc0(*(undefined4 *)(*(int *)(iVar5 + 0x2c) + 0x54),*puVar1), iVar5 != 0))
  {
    if (*piVar2 == 1) {
      if (*piVar3 == 0) {
        *(short *)(iVar5 + 0x9e) = (short)*piVar4;
      }
      else {
        *(short *)(iVar5 + 0x9c) = (short)*piVar4;
      }
    }
    else if (*piVar2 == 0) {
      if (*piVar3 == 0) {
        *piVar4 = (int)*(short *)(iVar5 + 0x9e);
      }
      else {
        *piVar4 = (int)*(short *)(iVar5 + 0x9c);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

