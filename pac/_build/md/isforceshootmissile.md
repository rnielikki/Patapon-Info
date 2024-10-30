# isForceShootMissile

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isForceShootMissile`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3c 01`
- **Assembly Address in Memory** : `0x892af88`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 3c 01 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isForceShootMissile((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892af88(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  FUN_0883c04c(param_2,0);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar2 != 0)) &&
     (iVar2 = func_0x08b2acc0(*(undefined4 *)(*(int *)(iVar2 + 0x2c) + 0x54),*puVar1), iVar2 != 0))
  {
    uVar3 = FUN_08a4e3fc(iVar2);
    FUN_0883c04c(param_2,uVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

