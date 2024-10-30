# setHitEffectScript

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setHitEffectScript`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0c 00`
- **Assembly Address in Memory** : `0x89199b4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 0c 00 / 02 00 00 00 / 07 00 00 00 / 04 00 00 00 / 00 00 00 00 / 01 00 00 00 / 24 25 00 00```

Which is interpreted as:

```c
setHitEffectScript((int)7, (int *)iVar0, (index)9508)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089199b4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(*(int *)(param_1 + 0x10) + 0x128);
  if (iVar4 != 0) {
    FUN_0894e618(iVar4 + 0x1220,*puVar1,*puVar2,*puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

