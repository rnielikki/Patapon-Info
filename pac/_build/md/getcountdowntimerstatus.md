# getCountDownTimerStatus

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getCountDownTimerStatus`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1c 01`
- **Assembly Address in Memory** : `0x892a044`

## Parameters

- `(uint)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 1c 01 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
getCountDownTimerStatus((int *)iVar2, (int *)iVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a044(int param_1,undefined4 param_2)

{
  uint *puVar1;
  uint *puVar2;
  int iVar3;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  *puVar1 = 1;
  *puVar2 = 0;
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar3 != 0)) &&
      (iVar3 = *(int *)(iVar3 + 0x2c), iVar3 != 0)) && (iVar3 = *(int *)(iVar3 + 100), iVar3 != 0))
  {
    *puVar1 = (uint)*(byte *)(iVar3 + 0x1f2);
    *puVar2 = (uint)*(byte *)(iVar3 + 499);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

