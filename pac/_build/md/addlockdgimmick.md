# addLockdGimmick

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `addLockdGimmick`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 16 01`
- **Assembly Address in Memory** : `0x8919528`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 16 01 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 2e 01 00 00 / 02 00 00 00 / 03 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
addLockdGimmick((int *)iVar0, (int)302, (int)3, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08919528(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  *piVar1 = -1;
  iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x108);
  if ((iVar5 != 0) && (iVar5 = FUN_088b4d68(iVar5,*puVar2,*puVar3,*puVar4,0), iVar5 != 0)) {
    *piVar1 = (int)*(short *)(iVar5 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

