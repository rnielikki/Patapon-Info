# setMotion (25211b00)

> *Other functions have the same name. Check the [Disambiguation page](./setMotion.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setMotion`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 1b 00`
- **Assembly Address in Memory** : `0x89b31c4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(float)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 1b 00 / 04 00 00 00 / 15 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setMotion((int *)iVar21, (int)1, (int)1, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b31c4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int *piVar3;
  float *pfVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  pfVar4 = (float *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar5 != 0) &&
     ((**(code **)(*(int *)(*(int *)(iVar5 + 200) + 0x7c) + 0x14))
                (*(int *)(iVar5 + 200),*puVar2,*piVar3 != 0), *pfVar4 != 0.0)) {
    iVar5 = *(int *)(iVar5 + 200);
    *(float *)(iVar5 + 0x68) = *pfVar4;
    if (*(float *)(iVar5 + 0x70) < *(float *)(iVar5 + 0x68)) {
      *(float *)(iVar5 + 0x68) = *(float *)(iVar5 + 0x70);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

