# checkRangePriority_setPos

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `checkRangePriority_setPos`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 21 01`
- **Assembly Address in Memory** : `0x892a3dc`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 21 01 / 20 00 00 00 / 01 00 00 00 / 20 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
checkRangePriority_setPos((float *)fVar1, (float *)fVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a3dc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar4 = *puVar2;
  uVar5 = *puVar1;
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x118);
  *(undefined *)(iVar3 + 0x864c) = 1;
  *(undefined4 *)(iVar3 + 0x8650) = uVar5;
  *(undefined4 *)(iVar3 + 0x8654) = uVar4;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

