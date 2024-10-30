# multiGetTime

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `multiGetTime`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 15 00`
- **Assembly Address in Memory** : `0x891a0f0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 15 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
multiGetTime((float *)fVar0, (float *)fVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891a0f0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar3 != 0)) &&
      (iVar3 = *(int *)(iVar3 + 0x2c), iVar3 != 0)) && (iVar3 = *(int *)(iVar3 + 0x58), iVar3 != 0))
  {
    uVar4 = func_0x08b2f050(iVar3);
    *puVar1 = uVar4;
    uVar4 = func_0x08b2f010(iVar3);
    *puVar2 = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

