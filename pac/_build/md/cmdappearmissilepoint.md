# cmdAppearMissilePoint

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmdAppearMissilePoint`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3a 01`
- **Assembly Address in Memory** : `0x892ad0c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 3a 01 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 40 00 00 00 / 33 00 00 00 / 08 00 00 00 / 5b 00 00 00```

Which is interpreted as:

```c
cmdAppearMissilePoint((int)0, (int)0, ((global)float *)gfVar51, ((global)int *)giVar91)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892ad0c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  undefined4 *puVar3;
  int *piVar4;
  int iVar5;
  int iVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar5 != 0)) &&
     (iVar5 = func_0x08b2acc0(*(undefined4 *)(*(int *)(iVar5 + 0x2c) + 0x54),*puVar1), iVar5 != 0))
  {
    iVar6 = *piVar2;
    if (iVar6 == 2) {
      FUN_08a4e658(*puVar3,iVar5);
    }
    else if (iVar6 == 1) {
      FUN_08a4e584(*puVar3,iVar5,*piVar4);
    }
    else if (iVar6 == 0) {
      *puVar3 = *(undefined4 *)(iVar5 + 0xa8);
      *piVar4 = (int)*(short *)(iVar5 + 0x98);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

